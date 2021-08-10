const dna = require('dna2json');
const fs = require('fs');
const dataPath = "/Users/mollybeach/Documents/git/molly-beach-chromagene/server/data/AncestryDNA.txt";
const dataJSONPath = "/Users/mollybeach/Documents/git/molly-beach-chromagene/server/data/dna.json";
const dnatxt = fs.readFileSync(dataPath);
const stringDna = dnatxt.toString();
console.log(typeof stringDna);
dna.parse(stringDna, function(err, snps){
  if (err) throw err;
 let x = fs.writeFileSync(dataJSONPath, JSON.stringify(stringDna, null, 2));

  //fs.writeFileSync(stringDna.join(__dirname, dataJSONPath), JSON.stringify(snps));

  
});

module.exports = router;


/*const dna = require('dna2json');
const fs = require('fs');

const dataJSONPath = "/Users/mollybeach/Documents/git/molly-beach-chromagene/server/data/galleryData.json";
const dnatxt = fs.readFileSync(dataPath);



  //fs.writeFileSync(stringDna.join(__dirname, dataJSONPath), JSON.stringify(snps));

  
//});

//module.exports = router;
*//*const express = require("express");
const galleryData = require("../galleryData.json");
const router = express.Router();
const fs = require("fs");


router.get("chromosome", (req, res) => {
    res.status(200).json(galleryData);
});


router.get("/chromosome.id", (req, res) => {
    let targetDnaId = req.params.dnaId;
    let searchDnaQueryCheck = galleryData.find(item => {
    return targetDnaId === item.id;
    });
    if(searchDnaQueryCheck){
        res.status(200).json(searchDnaQueryCheck);
    } else {
        res.status(400).send({ error: "DNA ribosome does not exist" });
      }

})
module.exports = router;


*/