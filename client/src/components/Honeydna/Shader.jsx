import React, { Component } from 'react';
//import sculptToMinimalRenderer from './sculptToMinimalRenderer';
//import './Shader.scss';
import './style.scss'
     // import {spCode} from './spCode.js';

class Shader extends Component {

  componentDidMount() {
    const scriptone = document.createElement("script");    
    scriptone.async = true;    
    scriptone.src = "https://button.glitch.me/button.js";    
    this.ele.appendChild(scriptone);  
    const script = document.createElement("script");    
    script.async = true;    
    script.src = "./index,js";    
    this.instance.appendChild(script);  
  }
    render() {
        return (
      <div>
              <h1>big foof</h1>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div className="home" ref={el => (this.ele = el)}>  </div>
            <link rel="stylesheet" href="/style.scss" />
            <div className="glitchButton" style={{position: 'fixed', top: '20px', right: '20px'}} />
            <canvas className="my-canvas" ></canvas>
            <div className="home" ref={el => (this.instance = el)}>  </div>
            <h1>Success</h1>
      </div>
        );
    }
}

export default Shader;

/*        <div>
            <title>big foof</title>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        
            <link rel="stylesheet" href="/style.scss" />
            <div className="glitchButton" style={{position: 'fixed', top: '20px', right: '20px'}} /> 
            
            */