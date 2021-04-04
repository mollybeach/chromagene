/*      
 /*******************DOUBLE HEXLIX OPTIONAL**********************
  * 
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

         if (s < 0 == 0) {
          change = 0.5;
        } else if (s < 0 == 0) {
          change = 0.3;
        } 
        } else {
          change = 1.0;
        }
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