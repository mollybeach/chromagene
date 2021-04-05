import React, { Component } from 'react';
import './Gallery.scss';
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import Framie from "../Home/Framie";

class Gallery extends Component {
    state = {
        galleryList : this.props.galleryList
    }
   componentDidMount(){
    this.setState({galleryList: this.props.galleryList})
   }
   componentDidUpdate(prevProps){
    axios.get(`${API_URL}/gallery`)
    .then((response) => {
    if(this.state.galleryList!==  prevProps.match.params) {
         axios.get(`${API_URL}/Gallery`)
           .then((res) => {
               this.setState({
            galleryList : res.data
                  })
           })
           .catch((error) => {
             console.log(error);
           });
         }
      });
     }

   render() {
        return (
               <>
        <div className="gallery">
            <div className="hero-container "></div>
            <div className="content"></div>
          <div className='gallery__inside '>
          <div className="gallery__subtitle "> ChromaGene
            <img className="gallery__arrow" src={chevronImg} alt="img" />
          </div>
          <div className="gallery__titleb ">Welcome to ChromaGene!</div>
          <div className="gallery__about " >
            <Framie/>   
          </div>
          </div>
        </div>
      </>   
        );
    }
}

export default Gallery;
