const express = require("express");
const router = express.Router();
const homeList = require("../data/home.json");
const fs = require("fs");



router.get("/home", (req, res) => {
        res.status(200).json(homeList);
  });


module.exports = router;

