import {sculptToMinimalRenderer} from 'https://unpkg.com/shader-park-core@0.0.17/dist/shader-park-core.esm.js';
import {spCode} from './spCode.js';
let canvas = document.querySelector('.my-canvas');
 // This converts your Shader Park code into a shader and renders it to the my-canvas element
sculptToMinimalRenderer(canvas, spCode);