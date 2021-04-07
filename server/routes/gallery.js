const express = require("express");
const galleryList = require("../data/chromosome.json");
const router = express.Router();
const fs = require("fs");
/*
let dnaList = [
           { "id": "rs369202065",
             "chromosome": 1, 
             "genotype": "AA" 
          },
           { "id": "rs199476136",
             "chromosome": 1, 
             "genotype": "AC" 
          },
           { "id": "rs190214723",
             "chromosome": 1, 
             "genotype": "CC" },
           { "id": "rs3131972",
             "chromosome": 1, 
             "genotype": "GG" },
           { "id": "rs12562034",
             "chromosome": 1, 
             "genotype": "GB" },
           { "id": "rs115093905", 
             "chromosome": 1, 
             "genotype": "GG"
          }
 ]
 */
router.get("/gallery", (req, res) => {
   res.status(200).json(galleryList);
   //res.send(dnaList);
});
/*

router.get("/gallery/:galleryId", (req, res) => {
    let targetDnaId = req.params.galleryId;
    let searchDnaQueryCheck = galleryList.find(item => {
    return targetDnaId === item.id;
    });
    if(searchDnaQueryCheck){
        res.status(200).json(searchDnaQueryCheck);
    } else {
        res.status(400).send({ error: "DNA ribosome does not exist" });
      }

})
*/
module.exports = router;