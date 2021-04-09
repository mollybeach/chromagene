/* eslint-disable */
export function snpCodeLoad() { 
/*************DOUBLE HELIX***********/
rotateX(PI / 2);
/*************COLORS**************/
/****A*****/
let red = vec3(1.0, 0.0, 0.0);
let redLight = vec3(1.8, 0.0, 0.0);
let redMagenta = vec3(0.5, 0.0, 0.1);
let redHotPink = vec3(1.5, 0.0, 0.1);
/****C*****/
let blue = vec3(0.0, 1.0, 1.0);
let lightBlue = vec3(0.0, 1.9, 1.8);
let blueX = vec3(0.0, 1.5, 1.8);
let blueWhite = vec3(1.0, 1.4, 2.05);
/****G*****/
let green = vec3(0.02, 0.245, 0.05);
let greenLight = vec3(0.02, 0.245, 0.05);
let greenBrown = vec3(1.0, 0.4, 0.03);
let greenYellow = vec3(1.9, 1.6, 0.0);
/****T*****/
let purple = vec3(0.1, 0.0, 0.9);
let purpleLavender = vec3(1.0, 0.5, 1.0);
let purplePink = vec3(3.0, 0.5, 1.0);
let purpleP = vec3(2.9, 0.4, 1.0);
/****??*****/
let grey = vec3(1.0, 1.0, 1.0);
let black = vec3(0.0, 0.0, 0.0);
let white = vec3(1.0, 1.4, 2.05);
let current;
let filledG = (dataG) => {
  let newG = new Array(1).fill(dataG);
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
        strand(current);
        strand(current);
        break;
      default:
        current = grey;
        strand(current);
    }
  }
};
let thickness = 0.02;
let zed = 0.0;
let change;
/*****************SPHERE VARIABLES**********/
let positiveTopSphere = 0.1;
let negativeTopSphere = 0.1;
let positiveBottomSphere = -0.1;
let negativeBottomSphere = -0.1;
/**************SNP VARIABLES***********/
let positiveTopSNP1 = 0.1;
let negativeTopSNP1 = 0.021; //0.0
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
displace(0.0, 0.0, 0.6); //position of entire strand
/*************DATA FUNCTIONS****************/
let dnaList = {
  rs369202065: { chromosome: 1, genotype: "AA" },
  rs199476136: { chromosome: 2, genotype: "AC" },
  rs190214723: { chromosome: 3, genotype: "CC" },
  rs3131972: { chromosome: 4, genotype: "GG" },
  rs12562034: { chromosome: 5, genotype: "GB" },
  rs115093905: { chromosome: 6, genotype: "GG" },
  rs11888922: { chromosome: 7, genotype: "TC" },
  rs730402: { chromosome: 8, genotype: "AG" },
  rs763297: { chromosome: 9, genotype: "TC" },
  rs9653546: { chromosome: 10, genotype: "AG" },
  rs6545760: { chromosome: 11, genotype: "AG" },
  rs17400093: { chromosome: 12, genotype: "TT" },
  rs17328175: { chromosome: 13, genotype: "??" },
  rs1005038: { chromosome: 14, genotype: "TC" },
  rs11721321: { chromosome: 15, genotype: "TC" },
  rs7652589: { chromosome: 16, genotype: "AG" },
  rs7648041: { chromosome: 17, genotype: "TC" },
  rs4678029: { chromosome: 18, genotype: "TT" },
  rs1501900: { chromosome: 19, genotype: "??" },
  rs1814740: { chromosome: 20, genotype: "AG" },
  rs16832787: { chromosome: 21, genotype: "GG" },
  rs1405687: { chromosome: 22, genotype: "GG" },
  rs2851057: { chromosome: 23, genotype: "TG" },
};
let makeOrganized = () => {
  Object.values(dnaList).forEach((vul) => {
    let filledArray = new Array(1).fill(vul);
    let dataAll = filledArray[0];
    let dataG = dataAll.genotype;
    filledG(dataG);
  });
};
makeOrganized();


}



