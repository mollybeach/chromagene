const express = require("express");
const homeList = require("../data/home.json");
const router = express.Router();
const fs = require("fs");


//get list of home items from data
router.get("/home", (req, res) => {
        res.status(200).json(homeList);
  });


  router.get("/home/:homeId", (req, res) => {
    let targethomeId = req.params.homeId;
    let home = homeList.find(item => {
    return targethomeId === item.id;
    });
    if(home){
        res.status(200).json(home);
    } else {
        res.status(400).send({ error: "Item does not exist" });
      }

})
/*
const express = require("express");
const router = express.Router();
const fs = require("fs");



router.get('/homes',(req,res)=>{
    const homeArr = fs.readFileSync("./data/homes.json");
    const parsedData = JSON.parse(homeArr);
    res.status(201).json(parsedData)
})

*/
module.exports = router;

