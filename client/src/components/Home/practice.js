
  let dnaList = {
    rs369202065: { chromosome: 1, genotype: 'AA' },
    rs199476136: { chromosome: 2, genotype: 'AC' },
    rs190214723: { chromosome: 1, genotype: 'CC' },
    rs3131972: { chromosome: 3, genotype: 'GG' },
    rs12562034: { chromosome: 1, genotype: 'GB' },
    rs115093905: { chromosome: 1, genotype: 'GG' },
  }
  
let filled = (dataAll) => {
//console.log(data);
}

let filledC = (dataC) => {
//console.log(dataC);
 //console.log(dataC[0])

}
let filledG = (dataG) => {
      let newG = new Array(1).fill(dataG);
     console.log(newG);
     let valInt = newG.values();
     for(let snp of valInt){
            if(snp === 'AA'){
              console.log('red');
            }
             else if(snp === 'GG'){
              console.log('yellow');
            }
             else if(snp === 'CC'){
              console.log('green');
            }
              else if(snp === 'TT'){
              console.log('orange');
            }
              else{
                console.log('purple');
              }
            }
     
       }
     



 let makeOrganized = () =>{ Object.values(dnaList).forEach(vul =>{
  let filledArray = new Array(1).fill(vul);
  let dataAll = filledArray[0];
  filled(dataAll);
  let dataG = dataAll.genotype;
  filledG(dataG);
  let dataC = dataAll.chromosome;
  filledC(dataC);
})}

makeOrganized();
//filled();
filledG();
filledC();





