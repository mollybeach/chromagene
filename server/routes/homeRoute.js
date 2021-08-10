const express = require("express");
const router = express.Router();
const homeData = require("../data/homeData.json");
const fs = require("fs");

router.get("homeApi", (req, res) => {
  res.status(200).json(homeData);
});


module.exports = router;

