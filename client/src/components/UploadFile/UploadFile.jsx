import React, { useRef, useState } from 'react';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import './UploadFile.scss';
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";

function FileUpload() {
    const [file, storeFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const changeEvent = (event) => {
        setProgess(0)
        const file = event.target.files[0]; 
        console.log(file);
        storeFile(file); 
    }
    const uploadFile = () => {
        const formData = new FormData();        
        formData.append('file', file); // appending file
        axios.post(`${API_URL}/uploadfile`, formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
            path: { API_URL } + res.data.path
            })
        }).catch(err => console.log(err))}
    return (
        <>
      
        <div className="upload">
            <div className="hero-container "></div>
            <div className="content"></div>
          <div className='upload__inside '>
          <div className="upload__subtitle ">
          ChromaGene
            <img className="upload__arrow" src={chevronImg} alt="img" />
          </div>
    
          <div className="upload__titleb ">Upload Your DNA file!</div>
          <div className="upload__about " > Upload DNA .txt or .csv file to create unique art and begin your journey!
                <input type="file" ref={el} onChange={changeEvent} />                
                <div className="upload__progessBar" style={{ width: progress }}>{progress}</div>
                <button onClick={uploadFile} className="btn btn--gamma"><span>Upload</span></button>
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
