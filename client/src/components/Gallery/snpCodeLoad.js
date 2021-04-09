/* eslint-disable */
export function snpCodeLoad() { 
    let current;
    let filledG = (dataG) => {
   
        let newG = new Array(1).fill(dataG);
        console.log(newG);
        let valInt = newG.values();
        switch (new Date().getDay()) {
        for (let snp of valInt) {
         case 0: 
         snp === "AA":
           current = 0.1;
          strand(current);
          break;
       case 1: snp === "AT":
            current = 0.2;
            strand(current);
           break;
         case 2: snp === "AG":
             current = 0.3;
            strand(current);
           break;
         case 2: snp === "AC":
            current = 0.4;
           break;
         case 3: snp === "TA":
            current = 0.5;
            strand(current);
           break;
         case 4: snp === "TT":
            current = 0.6;
            strand(current);
           break;
         case 5: snp === "TG":
            current = 0.7;
            strand(current);
           break;
         case 6: snp === "TC":
            current = 0.8;
            strand(current);
           break;
         case 7: snp === "GA":
            current = 0.9;
            strand(current);
           break;
         case 8: snp === "GT":
            current = 0.31;
            strand(current);
           break;
         case 9: snp === "GG":
            current = 0.43;
            strand(current);
           break;
         case 10: snp === "GC":
            current = 0.43;
           break;
            strand(current);
         case 11: snp === "CA":
            current = 0.21;
            strand(current);
           break;
         case 12: snp === "CT":
            current = 0.59;
            strand(current);
           break;
         case 13: snp === "CG":
            current = 0.377;
            strand(current);
           break;
         case 14: snp === "CC":
            current = 0.311;
            strand(current);
           break;
        case 15: snp === "??":
            /*********IF COME ACCROSS A ?? GENOTYPE *****/
            let current = 0.3;
             strand(current);
        case 16:
         break;
        
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



