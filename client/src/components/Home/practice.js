
/* eslint-disable */

export function snpCode()  {
  
    let thickness = 0.05;
    let zed = 0.0;
    let change;
    /*************COLORING FUNCTION*****************/
        let colorBook = (varient) => {
          let colorX = 0.9 * Math.random();
          let colorY = colorX - Math.random();
          let colorZ = colorY - 0.2;
          let rainbowy = color(colorX, colorY, colorZ);
          return rainbowy;
        };
        let rainbow = (varient) => {
          let shade = color(varient, varient, varient);
          return shade;
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
      for (j = 0; j < 1; j++) {
      
        let pairSpheres = function () {
          color(1.0, 1.0, 1.0);
          line(pos1, pos2, thickness * 2);
          //line(pos3, pos4, thickness * 2);
        };
        let pairSNPs = function () {
          rainbow();
          rotateZ(4);
          displace(0.0, 0.0, 0.0);
          line(pos5, pos6, thickness);
          
          //line(pos7, pos8, thickness);
        }
        pairSNPs();
        pairSpheres();
        displace(-0.30, 0.061, -0.0345); //space between SNPS
      }
    };
    
    displace(0.0, -0.8, 0.0); //position of entire strand
    strand();
  /*************DATA FUNCTIONS****************/
  let dnaList = {
    rs369202065: { chromosome: 1, genotype: "AA" },
    rs199476136: { chromosome: 2, genotype: "AC" },
    rs190214723: { chromosome: 1, genotype: "CC" },
    rs3131972: { chromosome: 3, genotype: "GG" },
    rs12562034: { chromosome: 1, genotype: "GB" },
    rs115093905: { chromosome: 1, genotype: "GG" },
  };
  
  let filled = (dataAll) => {
    //console.log(data);
  };
    //AA, AT, AG, AC, TA, TT, TG, TC, GA, GT, GG, GC, CA, CT, CG, CC
  let filledC = (dataC) => {
    //console.log(dataC);
    //console.log(dataC[0])
  
  };
  let current;
  let filledG = (dataG) => {
    let newG = new Array(1).fill(dataG);
    console.log(newG);
    let valInt = newG.values();
    for (let snp of valInt) {
      if (snp === "AA") {
        console.log(" 1 red");
       current = 0.5;
      } else if (snp === "AT") {
        console.log("red green");
      } else if (snp === "AG") {
        console.log("red orange");
      } else if (snp === "AC") {
        console.log("red green");
      } else if (snp === "TA") {
        console.log("green");
      } else if (snp === "TT") {
        console.log(" light green");
      } else if (snp === "TG") {
        console.log("green blue");
      } else if (snp === "TC") {
        console.log("green red");
      } else if (snp === "GA") {
        console.log("blue red");
      } else if (snp === "GT") {
        console.log("blue green");
      } else if (snp === "GG") {
        console.log("blue");
      } else if (snp === "GC") {
        console.log("blue pink");
      } else if (snp === "CA") {
        console.log("pink red");
      } else if (snp === "CT") {
        console.log("pink green");
      } else if (snp === "CG") {
        console.log("pink blue");
      } else if (snp === "CC") {
        console.log("pink");
      } else {
        /*********IF COME ACCROSS A ?? GENOTYPE */
        console.log("grey");
      }
    }
  };
  
  let makeOrganized = () => {
    Object.values(dnaList).forEach((vul) => {
      let filledArray = new Array(1).fill(vul);
      let dataAll = filledArray[0];
      filled(dataAll);
      let dataG = dataAll.genotype;
      filledG(dataG);
      let dataC = dataAll.chromosome;
      filledC(dataC);
    });
  };
  
  makeOrganized();
  //filled();
  filledG();
  //filledC();
  
  
  
  };
  
  
  
  