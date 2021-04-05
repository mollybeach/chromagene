import { useEffect, useRef } from 'react';
//import { glslToMinimalRenderer } from 'shader-park-core';
import {sculptToMinimalRenderer} from 'shader-park-core';
//import { snpCode } from "./genotypeColoring.jsx";
import { snpCode } from "./placeholderColoring.jsx";
//import { spCode } from "./spCode.js";
//import fp from './crrrr.jpeg';
/****************USE HOOKS TO LOAD SHADER ***********************/
const Framie = ({ src }) => {
  const shadeRef = useRef(null);
  useEffect(() => {
    if (shadeRef.current) {
      const canvas = document.querySelector(".my-canvas");
     //glslToMinimalRenderer(canvas, spCode);
       sculptToMinimalRenderer(canvas, snpCode);
    }
  }, [src]);

  return (
    <div>
      <canvas className="my-canvas"></canvas>
      <iframe title="miframie" ref={shadeRef}>
    <body className="removeAdditionaFrame"></body>
      </iframe>
    
    </div>
  );
};

export default Framie;
