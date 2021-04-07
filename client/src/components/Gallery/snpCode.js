  /* eslint-disable */
export function snpCode() { 
    let current;
    let filledG = (dataG) => {
        let newG = new Array(1).fill(dataG);
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
            /*********IF COME ACCROSS A ?? GENOTYPE *****/
            let current = 0.3;
             strand(current);
          }else {
           console.log('done ');
        
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
        let strand = function (current) {
          rotateX(PI/2);
          let j = 0;
          for (j = 0; j < 1; j++) {
            let pairSpheres = function () {
              color(1.0, 1.0, 1.0);
              line(pos1, pos2, thickness * 2);
            line(pos3, pos4, thickness * 2);
            };
            let pairSNPs = function () {
           color(0.9-current, 0.5*current, 3);
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
        displace(0.0, -0.8, -0.0); //position of entire strand
      /*************DATA FUNCTIONS****************/
      let dnaList = {
        rs369202065: { chromosome: 1, genotype: "AA" },
        rs199476136: { chromosome: 2, genotype: "AC" },
        rs190214723: { chromosome: 3, genotype: "CC" },
        rs3131972: { chromosome: 4, genotype: "GG" },
        rs12562034: { chromosome: 5, genotype: "GB" },
        rs115093905: { chromosome: 6, genotype: "GG" },
        rs11888922: { chromosome: 7, genotype: 'TC' },
        rs730402: { chromosome: 8, genotype: 'AG' },
        rs763297: { chromosome: 9, genotype: 'TC' },
        rs9653546: { chromosome: 10, genotype: 'AG' },
        rs6545760: { chromosome: 11, genotype: 'AG' },
        rs17400093: { chromosome: 12, genotype: 'TT' },
        rs17328175: { chromosome: 13, genotype: '??' },
        rs1005038: { chromosome: 14, genotype: 'TC' },
        rs11721321: { chromosome: 15, genotype: 'TC' },
        rs7652589: { chromosome: 16, genotype: 'AG' },
        rs7648041: { chromosome: 17, genotype: 'TC' },
        rs4678029: { chromosome: 18, genotype: 'TT' },
        rs1501900: { chromosome: 19, genotype: '??' },
        rs1814740: { chromosome: 20, genotype: 'AG' },
        rs16832787: { chromosome: 21, genotype: 'GG' },
        rs1405687: { chromosome: 22, genotype: 'GG' },
        rs2851057: { chromosome: 23, genotype: 'TG' },
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



