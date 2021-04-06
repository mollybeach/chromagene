const express = require("express");
const router = express.Router();
const my23List = require("../data/my23.json");
const fs = require("fs");



router.get("/my23", (req, res) => {
        res.status(200).json(my23List);
  });


module.exports = router;

