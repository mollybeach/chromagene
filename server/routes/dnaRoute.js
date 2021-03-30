const dna = require('dna2json');
const fs = require('fs');
const dataPath = "/Users/mollybeach/Documents/git/molly-beach-chromagene/server/data/AncestryDNA.txt";
const dataJSONPath = "/Users/mollybeach/Documents/git/molly-beach-chromagene/server/data/dna.json";

const dnatxt = fs.readFileSync(dataPath);
const stringDna = dnatxt.toString();
console.log(typeof stringDna);
dna.parse(stringDna, function(err, data){
  if (err) throw err;
 //console.log(data);
 //fs.writeFileSync(path.join(__dirname, 'dna.json'), JSON.stringify(snps));
 fs.writeFileSync(dataJSONPath, JSON.stringify(stringDna, null, 2));
});

