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
        <div className="upload-file"> Upload Your DNA File! 
          <div className="upload-file__subtitle">Join our Community
          <img className="upload-file__arrow" src={chevronImg} alt="img" />
          </div>
          <div className="upload-file__title">Upload Your File</div>
          <div className="upload-file__titleb">Welcome to ChromeGene!</div>
          <div className="upload-file__about">
            Upload DNA .txt or .csv file create unique art to begin your
            journey! A SNP Single-Nucleotide Polymorphism is a variation of a
            single nucleotide (A, G, C or T). I find it fascinating that you can
            get a text file, roughly 25meg big that contains what is essentially
            a diff against a common shared genetic code, it's certainly millions
            of years of progress, but yet can be transferred to your computer in
            a matter of seconds. Maybe at some point in the future bad things
            could happen because of this. But it's worth it for this one simple
            line.Each line corresponds to a single SNP. For each SNP, we provide
            its identifier (an rsid or an internal id), its location on the
            reference human genome, and the genotype call oriented with respect
            to the plus strand on the human reference sequence.
        </div>
            <div className="upload-file__box">
                <input type="file" ref={el} onChange={changeEvent} />                
				<div className="upload-file__progessBar" style={{ width: progress }}>{progress}</div>
                <button onClick={uploadFile} className="btn btn--gamma"><span>Upload</span></button>
            <hr/>
            {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    </>
    );
}
export default FileUpload;