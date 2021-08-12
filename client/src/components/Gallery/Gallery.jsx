import React from 'react'; //, { useRef,  useEffect }
//import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
//import spCode from './spCode';
import './Gallery.scss';
//import sculptToMinimalRenderer from 'shader-park-core';
//import {spCode} from './spCode.js';

const Gallery = () => {
 /* //let [galleryApi, setGalleryApi] = useState([]);
  const shadeRef = useRef(null);
  useEffect(() => {
    if(shadeRef.current){
  let canvas = document.querySelector('.my-canvas');
      console.log(typeof spCode);
      console.log(spCode);
      sculptToMinimalRenderer(canvas, 'sphere(0.5);');
  }      
  }, []);*/

        return (
          <main class="main">
              <article class="sector sector-featured">
                  <div class="">
                      <div class="sector__maintitle imgborderround">ChromaGene Gallery 
                          <img class="home__arrow " src="https://res.cloudinary.com/chromagene/image/upload/v1628704653/dna/chevron_right-24px_p2z0sa.svg" alt="img"/>
                      </div>
                      <div class="sector__subtitle imgborderround"> Each color represents one of the 16 SNPs</div> 
                          <div class="sector__text gallery__border">
                              <img class="hero__image  "src="https://res.cloudinary.com/chromagene/image/upload/v1628720174/dna/imgs/transparentdnagif_uzrqua.gif" alt="" />
                          </div>
                  </div>
              </article>
      </main> 
        );
    }
//ref={shadeRef}

export default Gallery;

/* <canvas className="my-canvas"></canvas>
                              <iframe title="miframie" frameBorder="0"ref={shadeRef} >
                                  <body className="removeAdditionaFrame"></body>
                          
                              </iframe>*/

//ref={shadeRef} 
     /*************THE DATA FROM THE BACKEND IT ISNT WORKING BECAUSE  ASYNC */
  //  let source = spCode.toString();
   // let sourceRes = `let lstp = JSON.parse(\`${galleryList}\`);\n` + source;
   //console.log(sourceRes);

     /*
      // With a function defined separately
     getData().then((resp) => {
     // sculptToMinimalRenderer(canvas, fullSpCode(JSON.stringify(galleryList)));
      //sculptToMinimalRenderer(canvas, 'sphere(0.5);');
     */
     

  /*     sculptToMinimalRenderer(canvas, `let lstp = JSON.parse(\`[{"id":"rs369202065","chromosome":1,"genotype":"AA"},{"id":"rs11888922","chromosome":2,"genotype":"AC"},{"id":"rs16832787","chromosome":3,"genotype":"GG"},{"id":"rs2851058","chromosome":4,"genotype":"AG"},{"id":"rs2851058","chromosome":4,"genotype":"AT"},{"id":"rs2851059","chromosome":5,"genotype":"AT", "chromosome":5,"genotype":"AT"}]\`);
  for (let i = 1; i < lstp.length; i++) {
    var value = lstp[i];
    console.log(value.genotype);
    draw(value.genotype);
  }
  function draw(inputData) {
    let thickness = 0.02;
    let zed = 0.0;
    let change;
    /*****************SPHERE VARIABLES*********
    let positiveTopSphere = 0.1;
    let negativeTopSphere = 0.1; //0.1
    let positiveBottomSphere = -0.1; //-0.1
    let negativeBottomSphere = -0.1;
    /**************SNP VARIABLES**********
    let positiveTopSNP1 = 0.1;
    let negativeTopSNP1 = -0.1; //0.021
    let positiveBottomSNP2 = -0.1;
    let negativeBottomSNP2 = -0.02; //0.0
    /****************OUTER SPHERES*************
    let pos1 = vec3(positiveTopSphere, positiveTopSphere, zed); //x,y
    let pos2 = vec3(negativeTopSphere, negativeTopSphere, zed); //-x, -y
    let pos3 = vec3(positiveBottomSphere, positiveBottomSphere, zed); //x,y
    let pos4 = vec3(negativeBottomSphere, negativeBottomSphere, zed); //-x, -y
    /*******************SNPS********************
    let pos5 = vec3(positiveTopSNP1, positiveTopSNP1, zed); //x,y
    let pos6 = vec3(negativeTopSNP1, negativeTopSNP1, zed); //-x, -y
    let pos7 = vec3(positiveBottomSNP2, positiveBottomSNP2, zed); //x,y
    let pos8 = vec3(negativeBottomSNP2, negativeBottomSNP2, zed); //-x, -y
    /*****************STRAND***************
    let strand = function (current) {
      rotateX(PI / 2);
      let j = 0;
      for (j = 0; j < 1; j++) {
        let pairSpheres = function () {
          color(1.0, 1.0, 1.0);
          line(pos1, pos2, thickness * 2);
          line(pos3, pos4, thickness * 2);
        };
        let pairSNPs = function () {
          color(0.9 - current, 0.5 * current, 0.2);
          rotateZ(3);
          displace(0.0, 0.0, 0.0);
          line(pos5, pos6, thickness); //line(pos7, pos8, thickness);
        };
        pairSNPs();
        pairSpheres();
        displace(-0.30, 0.061, -0.0345); //space between SNPS
      }
    };
    displace(0.0, -0.8, 0.0); //position of entire strand
    let current;
    let newG = new Array(1).fill(inputData);
    console.log(newG);
    let valInt = newG.values();
    for (let snp of valInt) {
      if (snp === "AA") {
        current = 0.1;
        strand(current);
      } else if (snp === "AT") {
        console.log("red green");
        current = 0.2;
        strand(current);
      } else if (snp === "AG") {
        console.log("red orange");
        current = 0.3;
        strand(current);
      } else if (snp === "AC") {
        console.log("red green");
        current = 0.4;
        strand(current);
      } else if (snp === "TA") {
        console.log("green");
        current = 0.5;
        strand(current);
      } else if (snp === "TT") {
        console.log(" light green");
        current = 0.6;
        strand(current);
      } else if (snp === "TG") {
        console.log("green blue");
        current = 0.7;
        strand(current);
      } else if (snp === "TC") {
        console.log("green red");
        current = 0.8;
        strand(current);
      } else if (snp === "GA") {
        console.log("blue red");
        current = 0.9;
        strand(current);
      } else if (snp === "GT") {
        console.log("blue green");
        current = 0.31;
        strand(current);
      } else if (snp === "GG") {
        console.log("blue");
        current = 0.43;
        strand(current);
      } else if (snp === "GC") {
        console.log("blue pink");
        current = 0.43;
        strand(current);
      } else if (snp === "CA") {
        console.log("pink red");
        current = 0.21;
        strand(current);
      } else if (snp === "CT") {
        console.log("pink green");
        current = 0.59;
        strand(current);
      } else if (snp === "CG") {
        console.log("pink blue");
        current = 0.377;
        strand(current);
      } else if (snp === "CC") {
        console.log("pink");
        current = 0.311;
        strand(current);
      } else if (snp === "??") {
        /*********IF COME ACCROSS A ?? GENOTYPE ****
        let current = 0.3;
        strand(current);
      } else {
        console.log('done ');
      }
    }
  
}
`); */