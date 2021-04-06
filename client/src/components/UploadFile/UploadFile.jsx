import React, { useRef, useState } from 'react';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import './UploadFile.scss';
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";

function FileUpload() {
    /****************************STORE FILE WITH HOOKS****************************************/
    let [data, grabFile] = useState({ name: "", path: "" });    
    let [prog, set] = useState(0); 
    let [file, storeFile] = useState(''); 
    let el = useRef(); 
    /******************************EVENT FUNCTION *********************************/
    let onEvent = (event) => {
        set(0)
        let file = event.target.files[0]; 
        console.log(file);
        storeFile(file); 
    }
/****************************UPLOAD FUNCTION************************************/
    const uploadFile = () => {
        const formData = new FormData();        
        formData.append('file', file);
        axios.post(`${API_URL}/uploadfile`, formData, {
            onUploadProgress: (loadEvent) => {
                let prog = Math.round(
                loadEvent.loaded / loadEvent.total * 100) + '%';
                set(prog);
            }
        }).then(res => {
            console.log(res);
            grabFile({ name: res.data.name,
            path: { API_URL } + res.data.path
            })
        }).catch(err => console.log(err))}
        return (
            <>
            <div className="upload">
                <div className="hero-container "></div>
                <div className="content"></div>
              <div className='upload__inside '>
              <div className="upload__title ">ChromaGene
                <img className="upload__arrow" src={chevronImg} alt="img" />
              </div>
              <div className="upload__subtitle ">Upload Your DNA file!</div>
              <div className="upload__about " > Upload DNA .txt or .csv file to create unique art and begin your journey!
                    <div className="upload__progessBar" style={{ width: prog }}>{prog}</div>
                    <input type="file" ref={el} onChange={onEvent} id="mod-button" hidden/> 
                    <label for="mod-button"  className="btn-form btn-form--delta" ><span>Choose File</span></label>   
                    <button onClick={uploadFile} className="btn btn--gamma"><span>Upload</span></button>
                     <hr />
                    {data.path && <img src={data.path} alt={data.name} />}
              </div>
              </div>
            </div>
            <div className="content">
            </div>
            <div className="content"></div>
       </>
        );
    }
    export default FileUpload;
