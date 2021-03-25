const express = require('express');
const router = express.Router();
const fs = require('fs');



router.get('/contacts/:id',(req,res)=>{
    const contactsArr = fs.readFileSync("./data/contacts.json");
    const parsedData = JSON.parse(contactsArr)
    const selectedWareId = req.params.id;
  
    const singleContact = parsedData.find(ware=> ware.id === selectedWareId)

   const gallerytArr = fs.readFileSync("./data/gallery.json");
   const parsedInvArr = JSON.parse(gallerytArr);
   const wareInvenArr =  parsedInvArr.filter(invobj => invobj.contactID===selectedWareId);

   const fullDetails = {...singleContact,galleryt:wareInvenArr}
   res.json(fullDetails)
})


module.exports = router;