//import {sculptToMinimalRenderer} from 'shader-park-core/dist/shader-park-core.esm.js';
import {sculptToMinimalRenderer} from 'shader-park-core';
import {spCode} from './spCode';
//import React, { Component } from 'react';
//let Canvas = document.querySelector('.my-canvas');

// This converts your Shader Park code into a shader and renders it to the my-canvas element


export default function Canvas()  {
    //Put your Shader Park Code here
    sculptToMinimalRenderer(Canvas, spCode);
    };
/*
    React.createElement(
        'canvas',
        {className: 'my-canvas'}
      )*/