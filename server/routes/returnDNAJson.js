const express = require("express");
const galleryList = require("../data/userData.json");
const router = express.Router();
const fs = require("fs");

//get list of warehouse items from data
router.get("/gallery", (req, res) => {
    res.status(200).json(galleryList);
});


router.get("/gallery/:galleryId", (req, res) => {
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


