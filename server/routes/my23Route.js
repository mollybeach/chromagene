const express = require("express");
const router = express.Router();
const cors = require('cors')  
const my23Data = require("../data/my23Data.json");
const fs = require("fs");

router.get("/my23Api", (req, res) => {
    res.status(200).json(my23Data);
});


module.exports = router;

