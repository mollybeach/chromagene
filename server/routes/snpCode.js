import axios from "axios";


export function getData() {
    return axios.get("http://localhost:8080/gallery")
    /*
       .then(function(response){
           return ;
               //populateData(response.data);
        })
        .catch(function(error){
               console.log(error);
               return 'bad';
         });
         
      }
      return axiosTest(); 
      /*
      const lst = [];  
      const populateData = (data) => {
        lst.push(data);
      
      }
      
      console.log(lst);
      
      return lst.JSON.stringify();
      */
}


export function fullSpCode(dat) {
    let source = spCode.toString();
    source = `let lstp = JSON.parse(\`${dat}\`);\n` + source;
    console.log(source);
    return source;
}


  /* eslint-disable */

function spCode()  {

for (let i = 1; i < lstp.length; i++){
    var value = lstp[i];
    console.log(value.genotype);
    draw(value.genotype);
    }

function draw(dataG) {

let thickness = 0.02;
let zed = 0.0;
let change;
/*****************SPHERE VARIABLES*********/

let positiveTopSphere = 0.1;
let negativeTopSphere = 0.1; //0.1
let positiveBottomSphere = -0.1; //-0.1
let negativeBottomSphere = -0.1;
/**************SNP VARIABLES**********/
let positiveTopSNP1 = 0.1;
let negativeTopSNP1 = -0.1;//0.021
let positiveBottomSNP2 = -0.1;
let negativeBottomSNP2 = -0.02; //0.0
/****************OUTER SPHERES*************/
let pos1 = vec3(positiveTopSphere, positiveTopSphere, zed); //x,y
let pos2 = vec3(negativeTopSphere, negativeTopSphere, zed); //-x, -y
let pos3 = vec3(positiveBottomSphere, positiveBottomSphere, zed); //x,y
let pos4 = vec3(negativeBottomSphere, negativeBottomSphere, zed); //-x, -y
/*******************SNPS*********************/
let pos5 = vec3(positiveTopSNP1, positiveTopSNP1, zed); //x,y
let pos6 = vec3(negativeTopSNP1, negativeTopSNP1, zed); //-x, -y
let pos7 = vec3(positiveBottomSNP2, positiveBottomSNP2, zed); //x,y
let pos8 = vec3(negativeBottomSNP2, negativeBottomSNP2, zed); //-x, -y
/*****************STRAND***************/
let strand = function (current) {
  rotateZ(2.92);
  let pairSpheres = function () {
    color(1.0, 1.0, 1.0);
    line(pos1, pos2, thickness * 2);
    line(pos3, pos4, thickness * 2);
  };
  let pairSNPs = function () {
    color(current);
    displace(0.0, 0.0, 0.0);
    line(pos5, pos6, thickness);
    line(pos7, pos8, thickness);
  };
  pairSNPs();
  pairSpheres();
  displace(-0.01, 0.1, -0.0545); //space between SNP
};
displace(0.0, 0.0, 0.5); //position of entire strand
       let current;
       let newG = new Array(1).fill(dataG);
       console.log(newG);
      let valInt = newG.values();
      for (let snp of valInt) {
    switch (snp) {
      /****A*****/
      case "AA":
        current = red;
        strand(current);
        break;
      case "AC":
        current = redLight;
        strand(current);
        break;
      case "AG":
        current = redMagenta;
        strand(current);
        break;
      case "AF":
        current = redHotPink;
        strand(current);
        break;
      /****C****/
      case "CC":
        current = blue;
        strand(current);
        break;
      case "CA":
        current = lightBlue;
        strand(current);
        break;
      case "CG":
        current = blueX;
        strand(current);
        break;
      case "CF":
        current = blueWhite;
        strand(current);
        break;
      /****G****/
      case "GG":
        current = green;
        strand(current);
        break;
      case "GA":
        current = greenLight;
        strand(current);
        break;
      case "GC":
        current = greenBrown;
        strand(current);
        break;
      case "GF":
        current = greenYellow;
        strand(current);
        break;
      /****F****/
      case "FF":
        current = purple;
        strand(current);
        break;
      case "FA":
        current = purpleLavender;
        strand(current);
        break;
      case "FC":
        current = purplePink;
        strand(current);
        break;
      case "FG":
        current = purpleP;
        strand(current);
        break;
      default:
        current = grey;
        strand(current);
    }
        }
    }
   };

        
