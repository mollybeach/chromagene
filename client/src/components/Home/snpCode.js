
/* eslint-disable */

export function spCode()  {
    let thickness = 0.02;
    let zed = 0.0;
    let change;
    /*************COLORING FUNCTION************/
        let colorBook = (varient) => {
          let colorX = 0.9 * Math.random();
          let colorY = colorX - Math.random();
          let colorZ = colorY - 0.2;
          let rainbow = color(colorX, colorY, colorZ);
          return rainbow;
        };
    /*****************SPHERE VARIABLES**********/
    let positiveTopSphere = 0.3;
    let negativeTopSphere = 0.29;
    let positiveBottomSphere = -0.3;
    let negativeBottomSphere = -0.29;
    /**************LINES VARIABLES***********/
    let positiveTopHalf1 = 0.05;
    let negativeTopHalf1 = 0.3;
    let positiveBottomHalf2 = -0.05;
    let negativeBottomHalf2 = -0.3;
    /****************OUTER SPHERES**************/
    let pos1 = vec3(positiveTopSphere, positiveTopSphere, zed); //x,y
    let pos2 = vec3(negativeTopSphere, negativeTopSphere, zed); //-x, -y
    let pos3 = vec3(positiveBottomSphere, positiveBottomSphere, zed); //x,y
    let pos4 = vec3(negativeBottomSphere, negativeBottomSphere, zed); //-x, -y
    /*******************SNPS**********************/
    let pos5 = vec3(positiveTopHalf1, positiveTopHalf1, zed); //x,y
    let pos6 = vec3(negativeTopHalf1, negativeTopHalf1, zed); //-x, -y
    let pos7 = vec3(positiveBottomHalf2, positiveBottomHalf2, zed); //x,y
    let pos8 = vec3(negativeBottomHalf2, negativeBottomHalf2, zed); //-x, -y
    /*****************STRAND****************/
    let strand = function () {
      rotateX(PI / 2);
      let j = 0;
      for (j = 0; j < 6; j++) {
      
        if (j % 2 == 0) {
          change = 2.5;
        } else if (j % 3 == 0) {
          change = 2;
        } else if (j % 5 == 0) {
          change = 4;
        } else if (j % 7 == 0) {
          change = 5;
        } else {
          change = 0.1;
        }
        let pairSpheres = function () {
          color(1.0, 1.0, 1.0);
          line(pos1, pos2, thickness * 2);
          line(pos3, pos4, thickness * 2);
        };
        let pairSNPs = function () {
          colorBook(Math.random());
          rotateZ(0.061 * change * 2);
          line(pos5, pos6, thickness);
          line(pos7, pos8, thickness);
        }
        pairSNPs();
        pairSpheres();
        displace(0.06, 0.061, -0.0345); //space between SNPS
      }
    };
    
    displace(0.0, -0.8, 0.0); //position of entire strand
    strand();

};

/*      
 /*******************DOUBLE HEXLIX OPTIONAL**********************
    /********SPHERES FOR DOUBLE HELIX**********
    let pos9 = vec3(positiveTopSphere, negativeTopSphere, zed); //x, -y
    let pos10 = vec3(negativeTopSphere, positiveTopSphere, 0.0); //-x, y
    let pos11 = vec3(positiveBottomSphere, negativeBottomSphere, zed); //x, -y
    let pos12 = vec3(negativeBottomSphere, positiveBottomSphere, 0.0); //-x, -y
    /***************DOUBLE HELIX SNPS *******
    let pos13 = vec3(positiveTopHalf1, negativeTopHalf1, zed); //x, -y
    let pos14 = vec3(negativeTopHalf1, positiveTopHalf1, 0.0); //-x, y
    let pos15 = vec3(positiveBottomHalf2, negativeBottomHalf2, 0.0); //x, -y
    let pos16 = vec3(negativeBottomHalf2, positiveBottomHalf2, 0.0); //-x, y
    /***********WAVY DNA****OPTIONAL******
    let pos17 = vec3(negativeBottomHalf2, positiveBottomHalf2 + 0.6, 0.0); //-x, y
       let doubleHelixBall = function () {
          // line(pos9, pos10, thickness)
          //line(pos11, pos12, thickness)
        };
    let doubleHelixSNPs = function () {
          rotateZ(0.061 * change * 2);
          // line(pos13, pos14 thickness)
          // line(pos15, pos16, thickness)
          // displace(0.070, 0.0, -0.0);
        };
    
        let leftPairSNP = function () {
          colorBook(Math.random());
          rotateZ(0.061 * change * 2);
          line(pos5, pos6, thickness);
          line(pos7, pos8, thickness);
        };

if (j % 2 == 0) {
          leftPairSNP();
          // displace(0.050, 0.0, -0.0);
        } else {
          rightPairSNP();
        } */
