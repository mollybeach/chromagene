//import React, { Component, useEffect} from 'react';
import React, { Component} from 'react';
import HoneyDna from '../Honeydna/Shader'
import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
//import ReactDOM from 'react-dom';
//import Iframe from 'react-iframe'
import '../Shader/Shader.scss';
//import Shader from '../Shader/Shader';
//import Pixel from './Pixel';

//import { Canvas } from "@react-three/fiber";
//import ThreeJS from "../ThreeJS/ThreeJS";
//import {sculptToMinimalRenderer} from 'https://unpkg.com/shader-park-core@0.0.17/dist/shader-park-core.esm.js';
//import {spCode} from './spCode.js';

import './Home.scss';



class Home extends Component {
    /*
    componentDidMount() {
        const obj = ReactDOM.findDOMNode(this);
        this.setState({iFrameHeight:  obj.contentWindow.document.body.scrollHeight + 'px'});
      
     }
     */
    
    
    render() {
        
        return (
            <div className ='home'> Welcome to ChromaGene
           
            <div className="home__subtitle">Featured
            <img className = 'home__arrow' src={chevronImg} alt=""/>
            </div>
          
            <link type="text/css" rel="Stylesheet" href="../Shader.scss" />
        
       
            <div className='home__about'>About: Upload DNA .txt or .csv file create unique art.A SNP Single-Nucleotide Polymorphism is a variation of a single nucleotide (A, G, C or T). 
             <div className='home__buttons'>
            <button className='home__button-upload' type='submit'> UPLOAD </button>
         <HoneyDna/>
          </div>

             </div>
            </div>
        );
    }
}

export default Home;

/*

            <iframe id="frame" title='playbox2'src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3"frameBorder="0"  style={{position: 'fixed'}}></iframe>
            <iframe id="frame" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRDAljWc9zYg1Y_xK" frameBorder="0"  style={{position: 'fixed', 'margin-left': '0px'}}></iframe>
            <iframe id="frame" title='playbox4'src="https://shaderpark.netlify.com/embed/-MWzRcsR3dfQV5mH_N8j" frameBorder="0"  style={{position: 'fixed', 'margin-left': '50%'}}></iframe>
            <iframe id="frame" title='playbox5'src="https://shaderpark.netlify.com/embed/-MWzRyBzCS1JVqMQi3WK" frameBorder="0"  style={{position: 'fixed', 'margin-left': '75%'}}></iframe>




<div id="wrap">
            <iframe title='happ' id="scaled-frame" src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3"></iframe>
            </div>

  renderHTMLFrame() {
        if (typeof window !== 'undefined') {
            ReactDOM.render(<MainWrapper />, document.getElementById("root"));
        }
        
          <iframe title='playbox5' width=" 100%" class="home__soundcloud" height="166" scrolling="no" frameborder="no" allow="autoplay"src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3"></iframe>
            <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
      
            <a href="https://soundcloud.com/widowspeakband" title="Widowspeak" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Widowspeak</a>
            <a href="https://soundcloud.com/widowspeakband/all-yours-1" title="All Yours" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>All Yours</a>
            </div>
        
        
        */
        
//srcdoc="<iframe src='https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q stlye={{margin: '120vw'}}'></iframe>"
// src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3"
//srcDoc={this.props.srcDoc}
//  <img className = 'home__dna' src={dnaImg} alt=""/>
//   <button className='home__button-cancel' type='reset'>CANCEL</button>
//   <ThreeJS />
//  <Shader/>
//   <div className="playBox">{Pixel}</div>
//  <canvas className="my-canvas" />
/*     <iframe title='playbox2'src="https://shaderpark.netlify.com/embed/-LjYqJ_3mP2AHjUPzW8e" frameborder="0"></iframe>
            <iframe title='playbox1' src="https://shaderpark.netlify.com/embed/-M5epJty2Omf4pd-Bgno" frameborder="0"></iframe>
      
            <iframe title='playbox' src="https://shaderpark.netlify.com/embed/-L_5WEJ6RfzjHbHOLAVA" frameBorder="0"></iframe>
            
            
            
                 constructor() {
        super();
        this.state = {
            iFrameHeight: '0px'
        }
    }
            
               <iframe title='playbox1'
                       scrolling="no"
                       frameBorder={0}
                       width="100%"
                       src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3"
                       onLoad = {e => setTimeout(() => {
                           const obj = ReactDOM.findDOMNode(this);
                           obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
                       }, 50)} />*/