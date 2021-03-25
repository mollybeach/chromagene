const express = require("express");
const galleryList = require("../data/gallery.json");
const router = express.Router();
const fs = require("fs");

router.get("/inventories", (req, res) => {
        res.status(200).json(galleryList);
  });

router.get("/gallery/:galleryId", (req, res) => {
    let targetgalleryId = req.params.galleryId;
    let gallery = galleryList.find(item => {
    return targetgalleryId === item.id;
    });
    if(gallery){
        res.status(200).json(gallery);
    } else {
        res.status(400).send({ error: "Item does not exist" });
      }

})

module.exports = router;