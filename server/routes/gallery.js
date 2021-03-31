const express = require("express");
const galleryList = require("../data/home.json");
const router = express.Router();
const fs = require("fs");


router.get("/gallery", (req, res) => {
    res.status(200).json(galleryList);
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