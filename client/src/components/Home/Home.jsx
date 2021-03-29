import React, { Component } from 'react';
import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
import dnaImg from '../../assets/Icons/dna.png';
import '../Shader/Shader.scss';
//import Shader from '../Shader/Shader';
//import Pixel from './Pixel';

//import { Canvas } from "@react-three/fiber";
//import ThreeJS from "../ThreeJS/ThreeJS";
//import {sculptToMinimalRenderer} from 'https://unpkg.com/shader-park-core@0.0.17/dist/shader-park-core.esm.js';
//import {spCode} from './spCode.js';

import './Home.scss';




class Home extends Component {
    
    render() {
        return (
            <div className ='home'> Welcome to ChromaGene
           
            <div className="home__subtitle">Featured
            <img className = 'home__arrow' src={chevronImg} alt=""/>
            </div>
          
            <link type="text/css" rel="Stylesheet" href="../Shader.scss" />
            <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3" frameBorder="0"  style={{position: 'fixed'}}></iframe>
            <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3" frameBorder="0"  style={{position: 'fixed', 'margin-left': '0px'}}></iframe>
            <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3" frameBorder="0"  style={{position: 'fixed', 'margin-left': '50%'}}></iframe>
            <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3" frameBorder="0"  style={{position: 'fixed', 'margin-left': '75%'}}></iframe>
            </div>
        );
    }
}

export default Home;
//  <img className = 'home__dna' src={dnaImg} alt=""/>

//   <ThreeJS />
//  <Shader/>
//   <div className="playBox">{Pixel}</div>
//  <canvas className="my-canvas" />
/*     <iframe title='playbox2'src="https://shaderpark.netlify.com/embed/-LjYqJ_3mP2AHjUPzW8e" frameborder="0"></iframe>
            <iframe title='playbox1' src="https://shaderpark.netlify.com/embed/-M5epJty2Omf4pd-Bgno" frameborder="0"></iframe>
      
            <iframe title='playbox' src="https://shaderpark.netlify.com/embed/-L_5WEJ6RfzjHbHOLAVA" frameBorder="0"></iframe> */