import React, { useRef, useState } from 'react';
import axios from 'axios';
import './Upload.scss';
//import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
require('dotenv').config();

const Upload = () => {
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
        axios.post(process.env.REACT_APP_API_URL + "/uploadApi", formData, {
            onUploadProgress: (loadEvent) => {
                let prog = Math.round(
                loadEvent.loaded / loadEvent.total * 100) + '%';
                set(prog);
            }
        }).then(res => {
            console.log(res);
            grabFile({ name: res.data.name,
            path: process.env.REACT_APP_API_URL  + res.data.path
            })
        }).catch(err => console.log(err))}

        /****************************HTML************************************/
        return (
        <main className="main">
            <form  className=""method='POST' action="post">
                <h1 className='form-header'>Upload Your DNA file:</h1><br></br>
                <div className="input-block">
                    <label for="user">Upload DNA .txt or .csv file to create unique art and begin your journey!</label>
                    <div className="upload__about " >
                    <div className="upload__progessbar" style={{ width: prog }}>{prog}</div>
                    <input type="file" ref={el} onChange={onEvent} id="mod-button" hidden/> 
                    <label for="mod-button"  className="" ><span>Choose File</span></label>  
                        <button onClick={uploadFile} className="btn btn--gamma"><span>Upload</span></button>
                        <hr/>
                    {data.path && <img src={data.path} alt={data.name} />}
                    </div>
                </div>
            </form>
        </main>

        );
    }
    export default Upload;
