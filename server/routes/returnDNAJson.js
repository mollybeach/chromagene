const express = require("express");
const galleryList = require("../chromosome.json");
const router = express.Router();
const fs = require("fs");


router.get("chromosome", (req, res) => {
    res.status(200).json(galleryList);
});


router.get("/chromosome.id", (req, res) => {
    let targetDnaId = req.params.dnaId;
    let searchDnaQueryCheck = galleryList.find(item => {
    return targetDnaId === item.id;
    });
    if(searchDnaQueryCheck){
        res.status(200).json(searchDnaQueryCheck);
    } else {
        res.status(400).send({ error: "DNA ribosome does not exist" });
      }

})
module.exports = router;


