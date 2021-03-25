const express = require("express");
const contactList = require("../data/contacts.json");
const router = express.Router();
const fs = require("fs");


//get list of contact items from data
router.get("/contacts", (req, res) => {
        res.status(200).json(contactList);
  });


  router.get("/contact/:contactId", (req, res) => {
    let targetcontactId = req.params.contactId;
    let contact = contactList.find(item => {
    return targetcontactId === item.id;
    });
    if(contact){
        res.status(200).json(contact);
    } else {
        res.status(400).send({ error: "Item does not exist" });
      }

})
/*
const express = require("express");
const router = express.Router();
const fs = require("fs");



router.get('/contacts',(req,res)=>{
    const contactArr = fs.readFileSync("./data/contacts.json");
    const parsedData = JSON.parse(contactArr);
    res.status(201).json(parsedData)
})

*/
module.exports = router;

