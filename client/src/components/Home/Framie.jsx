import React from 'react';
import {sculptToMinimalRenderer} from 'shader-park-core';
import {spCode} from './spCode.js';

let canvas = document.querySelector('.my-canvas');



const Framie = () => {
  
    return (
      <div>
       <canvas id="my-canvas" ></canvas>
        <iframe id="bigfram" title='miframie'
         > {sculptToMinimalRenderer(canvas, spCode)} </iframe>
    
      </div>

    )
  }

  export default Framie;
//style={{position: 'static', width: '300px', height: '300px'}}
// style={{'height': '100%', 'width': '100%', 'border': '0'}}
// style={{'height': '100%', 'width': '100%', 'border': '0'}}
//src={sculptToMinimalRenderer(document.querySelector('.my-canvas'), spCode)}

