//import React, { Component, useEffect} from 'react';
import React, { Component} from 'react';
import Honeydna from '../Honeydna/Honeydna'
import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
//import ReactDOM from 'react-dom';
//import Iframe from 'react-iframe'

import './Profile.scss';
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
       axios.get(`${API_URL}/profile`)
       .then((response) => {
         if(this.state.homeList!==  prevProps.match.params) {
         axios.get(`${API_URL}/profile`)
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
            <div className ='profile'> Welcome to ChromaGene
           
            <div className="profile__subtitle">My 23
            <img className = 'profile__arrow' src={chevronImg} alt=""/>
            </div>

    
            <canvas className="my-canvas" />
            <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRDAljWc9zYg1Y_xK" frameBorder="0"  style={{ top:'15px'}}></iframe>
       
          
            <div className ='profile__table-body' >             
                    {this.state.homeList.map(profileObj =>  <Honeydna key={profileObj.id} singleWar={profileObj} />)}
                    </div>
       
            <div className='profile__about'>About: Upload DNA .txt or .csv file create unique art.A SNP Single-Nucleotide Polymorphism is a variation of a single nucleotide (A, G, C or T). 
             <div className='profile__buttons'>
            <button className='profile__button-upload' type='submit'> UPLOAD </button>
           
 
          </div>

             </div>
             
            </div>
        );
    }
}

export default Home;
/*   <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRyBzCS1JVqMQi3WK" frameBorder="0"  style={{position: 'fixed', 'top': '25px'}}></iframe>
     <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRcsR3dfQV5mH_N8j" frameBorder="0"  style={{position: 'fixed'}}></iframe>

*/