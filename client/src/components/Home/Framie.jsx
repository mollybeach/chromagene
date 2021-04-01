import React, { useEffect, useRef} from 'react';
import {sculptToMinimalRenderer} from 'shader-park-core';
import {spCode} from './spCode.js';

const Framie = ({src}) => {
  const shadeRef= useRef(null);
  useEffect(() => {
  
    if (shadeRef.current) {
      const canvas = shadeRef.current.getElementById('.my-canvas');
      console.log(canvas);
    sculptToMinimalRenderer(canvas, spCode);
    }
 }, [src])

    return (
      <div>
         <canvas id="my-canvas" ></canvas>
        <iframe id="bigfram" title='miframie'
     >  </iframe>
      src={src}</div>

    )
  }

  export default Framie;
//style={{position: 'static', width: '300px', height: '300px'}}
// style={{'height': '100%', 'width': '100%', 'border': '0'}}
// style={{'height': '100%', 'width': '100%', 'border': '0'}}
//src={sculptToMinimalRenderer(document.querySelector('.my-canvas'), spCode)}

