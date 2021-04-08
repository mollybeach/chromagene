const express = require("express");
const galleryList = require("../data/chromosome.json");
const router = express.Router();
const fs = require("fs");

router.get("/gallery", (req, res) => {
   res.status(200).json(galleryList);
});

module.exports = router;