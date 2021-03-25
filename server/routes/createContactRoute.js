const express = require("express");
const router = express.Router();
const fs = require("fs");
const emailValidator = require("email-validator");
const PhoneNumber = require('awesome-phonenumber');
let contactData = require("../data/contacts.json");

readContactFile = (file) => {
  const fileToRead = fs.readFileSync(file);
  const parsedData = JSON.parse(fileToRead);
  return parsedData;
}

router.post("/contact/add", (req, res) => {
  const { id, name, address, city, country } = req.body;
  const { position, phone, email } = req.body.contact;  
  console.log("ID", req.body);
  const newContact = {
    id: id,
    name: name,
    address: address,
    city: city,
    country: country,
    contact: {
      contactName: req.body.contact.name,
      position: position,
      phone: phone,
      email: email
    }
  }
  const pn = new PhoneNumber(phone);
  const emailValue = emailValidator.validate(email);
  const pnValue = pn.isPossible();

  if (!id || !name || !address || !city || !country || !req.body.contact.name || !position || !phone || !email || pnValue === false || emailValue === false) {
    res.status(400).send("Missing required form information. Please fill in all fields.");
    return;
  }

  let updatedContactData = contactData = [newContact, ...contactData];
  updatedContactData = JSON.stringify(updatedContactData, null, 2);
  fs.writeFileSync("./data/contacts.json", updatedContactData);
  res.status(200).json(newContact);
});

module.exports = router;
