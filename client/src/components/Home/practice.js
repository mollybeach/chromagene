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
  let filledG = (dataG) => {
    let newG = new Array(1).fill(dataG);
    console.log(newG);
    let valInt = newG.values();
    for (let snp of valInt) {
      if (snp === "AA") {
        console.log(" 1 red");
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
  filledC();
  