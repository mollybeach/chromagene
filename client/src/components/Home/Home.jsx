//import React, { Component, useEffect} from 'react';
import React, { Component} from 'react';
import HoneyDna from '../Honeydna/Shader'
import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
//import ReactDOM from 'react-dom';
//import Iframe from 'react-iframe'

import './Home.scss';
import '../Shader/Shader.scss';
import axios from 'axios';
//import Gallery from '../Gallery/Gallery';

//import Shader from '../Shader/Shader';
//import Pixel from './Pixel';

//import { Canvas } from "@react-three/fiber";
//import ThreeJS from "../ThreeJS/ThreeJS";
//import {sculptToMinimalRenderer} from 'https://unpkg.com/shader-park-core@0.0.17/dist/shader-park-core.esm.js';
//import {spCode} from './spCode.js';


let API_URL = "http://localhost:8080";

class Home extends Component {
    state = {
        homeList : this.props.homeList
    }
   
   componentDidMount(){
       this.setState({homeList: this.props.homeList})
          
   }
   componentDidUpdate(prevProps){
       axios.get(`${API_URL}/home`)
       .then((response) => {
         if(this.state.homeList!==  prevProps.match.params) {
         axios.get(`${API_URL}/home`)
           .then((res) => {
               this.setState({
                   homeList : res.data
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
            <div className ='home'> Welcome to ChromaGene
           
            <div className="home__subtitle">Featured
            <img className = 'home__arrow' src={chevronImg} alt=""/>
            </div>
           
            <link type="text/css" rel="Stylesheet" />
  
       
            <div className='home__about'>About: Upload DNA .txt or .csv file create unique art.A SNP Single-Nucleotide Polymorphism is a variation of a single nucleotide (A, G, C or T). 
             <div className='home__buttons'>
            <button className='home__button-upload' type='submit'> UPLOAD </button>
            <div className ='home__table-body' >             
                    {this.state.homeList.map(homeObj =>  <HoneyDna key={homeObj.id} singleWar={homeObj} />)}
                    </div>
 
          </div>

             </div>
             
            </div>
        );
    }
}

export default Home;
