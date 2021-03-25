const express = require("express");
const router = express.Router();
const fs = require("fs");
const emailValidator = require("email-validator");
const PhoneNumber = require('awesome-phonenumber');

router.put("/contacts/:contactId", (req, res)=>{
    const updateData = req.body;
    const editId = req.params.contactId;

    const pn = new PhoneNumber( updateData.contact.phone);
    const email = updateData.contact.email;
    const emailValue = emailValidator.validate(email);
    const pnValue = pn.isPossible();

   if(!updateData.id || !updateData.name || !updateData.address || !updateData.city || !updateData.country || !updateData.contact.name || !updateData.contact.position || !updateData.contact.phone || !updateData.contact.email || pnValue === false || emailValue === false){
    res.status(400).send("Please make sure all fields are filled out properly and resubmit");
   } else {
        const fullData = fs.readFileSync("./data/contacts.json");
        const parsedData = JSON.parse(fullData);
        parsedData.splice(parsedData.findIndex(contact => contact.id === editId), 1, updateData);
        fs.writeFileSync("./data/contacts.json", JSON.stringify(parsedData,null,2));
        res.status(200).json("contact updated successful");
   }
})

module.exports = router;