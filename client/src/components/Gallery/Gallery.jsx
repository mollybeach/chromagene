//import React from 'react';
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import GS from './GS.jsx';
import './Gallery.scss';
    const Gallery = ({ src }) => {

        return (
        <>
        <div className="gallery">
            <div className="hero-container "></div>
            <div className="content"></div>
          <div className='gallery__inside '> 
          <div className="gallery__title "> ChromaGene Genotype Display:
            <img className="gallery__arrow" src={chevronImg} alt="img" />
          </div>
          <div className="gallery__subtitle "> Each color represents one of the 16 SNPs
          </div>
          <div className="gallery__subtitle "> Simulated Display: </div>
          <div className="gallery__about " >
          </div>
          </div>
        </div>
    <GS/>
      </>   
        );
    
}

export default Gallery;
