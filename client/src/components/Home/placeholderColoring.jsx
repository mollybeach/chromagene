/* eslint-disable */
export function snpCode()  {
  let thickness = 0.02;
  let zed = 0.0;
  let change;
  /*************COLORING FUNCTION*****************/
      let colorBook = (varient) => {
        let colorX = 0.9 * Math.random();
        let colorY = colorX - Math.random();
        let colorZ = colorY - 0.2;
        let rainbow = color(colorX, colorY, colorZ);
        return rainbow;
      };
  /*****************SPHERE VARIABLES**********/
  let positiveTopSphere = 0.1;
  let negativeTopSphere = 0.1;
  let positiveBottomSphere = -0.1;
  let negativeBottomSphere = -0.1;
  /**************SNP VARIABLES***********/
  let positiveTopSNP1 = 0.1;
  let negativeTopSNP1 = 0.021;//0.0
  let positiveBottomSNP2 = -0.1;
  let negativeBottomSNP2 = -0.02; //0.0
  /****************OUTER SPHERES**************/
  let pos1 = vec3(positiveTopSphere, positiveTopSphere, zed); //x,y
  let pos2 = vec3(negativeTopSphere, negativeTopSphere, zed); //-x, -y
  let pos3 = vec3(positiveBottomSphere, positiveBottomSphere, zed); //x,y
  let pos4 = vec3(negativeBottomSphere, negativeBottomSphere, zed); //-x, -y
  /*******************SNPS**********************/
  let pos5 = vec3(positiveTopSNP1, positiveTopSNP1, zed); //x,y
  let pos6 = vec3(negativeTopSNP1, negativeTopSNP1, zed); //-x, -y
  let pos7 = vec3(positiveBottomSNP2, positiveBottomSNP2, zed); //x,y
  let pos8 = vec3(negativeBottomSNP2, negativeBottomSNP2, zed); //-x, -y
  /*****************STRAND****************/
  let strand = function () {
    rotateX(PI / 2);
    let j = 0;
    for (j = 0; j < 20; j++) {
    
      let pairSpheres = function () {
        color(1.0, 1.0, 1.0);
        line(pos1, pos2, thickness * 2);
        line(pos3, pos4, thickness * 2);
      };
      let pairSNPs = function () {
      //  mirrorX();
        colorBook(Math.random());
        rotateZ(3);
        displace(0.0, 0.0, 0.0);
      line(pos5, pos6, thickness);
        
        line(pos7, pos8, thickness);
      }
      pairSNPs();
      pairSpheres();
      displace(-0.30, 0.061, -0.0345); //space between SNPS
    }
  };
  
  displace(0.0, -0.4, 0.0); //position of entire strand
  strand();





}