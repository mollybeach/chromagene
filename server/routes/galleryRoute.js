const express = require("express");
const galleryData = require("../data/galleryData.json");
const router = express.Router();
const fs = require("fs");

router.get("/galleryApi", (req, res) => {
   res.status(200).json(galleryData);
});

module.exports = router;