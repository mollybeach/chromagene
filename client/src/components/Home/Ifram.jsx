import React, {useEffect} from 'react';
import {sculptToMinimalRenderer} from 'shader-park-core';
import {spCode} from './spCode.js';
let canvas = document.querySelector('.my-canvas');


const Ifram = () => {
    useEffect(() => {
      const handler = event => {
        const data = JSON.parse(event.data)
        console.log("Hello World?", data)
      }
  
      window.addEventListener("message", handler)
      const script = document.createElement("script");    
      script.async = true;    
      script.src = "https://some-scripturl.js";    
      // clean up
      return () => window.removeEventListener("message", handler)
    }, []) // empty array => run only once
  
    return (
      <div>
        <iframe title='hi'
          srcDoc={`
          <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Shader Park</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="./style.scss">
  </head>  
  <body>    
    <div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>    
    <script src="https://button.glitch.me/button.js"></script>
    <canvas id="my-canvas2"  style="width:"400px"></canvas>
  
  </body>
</html>
        `} >  {sculptToMinimalRenderer(canvas, spCode)}</iframe>
    
      </div>

    )
  }

  export default Ifram;