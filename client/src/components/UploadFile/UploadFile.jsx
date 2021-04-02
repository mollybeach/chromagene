import React, { useRef, useState } from 'react';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import './UploadFile.scss';

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
        <div>
            <div className="upload-file">
                <input type="file" ref={el} onChange={changeEvent} />                
				<div className="upload-file__progessBar" style={{ width: progress }}>
                {progress}
                </div>
                <button onClick={uploadFile} className="upload-file__upload-button">Upload</button>
            <hr/>
            {/* displaying received image*/}
            {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    );
}
export default FileUpload;