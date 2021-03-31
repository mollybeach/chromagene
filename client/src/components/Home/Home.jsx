//import React, { Component, useEffect} from 'react';
import React, { Component} from 'react';
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

  
          
       <div className="home__title">ChromeGene</div>
       <div className="home__titleb">Welcome to ChromeGene!</div>
            <div className='home__about'>Upload DNA .txt or .csv file create unique art to begin your journey! A SNP Single-Nucleotide Polymorphism is a variation of a single nucleotide (A, G, C or T). 
            I find it fascinating that you can get a text file, roughly 25meg big that contains what is essentially a diff against a common shared genetic code, it's certainly millions of years of progress, but yet can be transferred to your computer in a matter of seconds. Maybe at some point in the future bad things could happen because of this. But it's worth it for this one simple line.Each line corresponds to a single SNP. For each SNP, we provide its identifier (an rsid or an internal id), its location on the reference human genome, and the genotype call oriented with respect to the plus strand on the human reference sequence.
             <div className='home__buttons'>
            <button className='home__button-upload' type='submit'> UPLOAD </button>

            <canvas style={{position: 'static',width: '300px', height: '300px'}}> </canvas>
    <div className='iframeContainer'>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3" frameBorder="0"  style={{position: 'fixed'  }}></iframe>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRDAljWc9zYg1Y_xK" frameBorder="0" style={{position: 'fixed', 'margin-left': '25px'}}></iframe>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRcsR3dfQV5mH_N8j" frameBorder="0"  style={{position: 'fixed', 'margin-left': '50%'}}></iframe>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRyBzCS1JVqMQi3WK" frameBorder="0" style={{position: 'fixed',  'margin-left': '-23%'}}></iframe>
       </div>
 
          </div>

             </div>
            
            </div>
        );
    }
}

export default Home;
/*   <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRyBzCS1JVqMQi3WK" frameBorder="0"  style={{position: 'fixed', 'top': '25px'}}></iframe> 'height': '700px'
     <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRcsR3dfQV5mH_N8j" frameBorder="0"  style={{position: 'fixed'}}></iframe>' 'margin-left': '25%' 'z-index': '3', 'margin-left': '0%' 'margin-left': '50%'

*/