const express = require("express");
const router = express.Router();
const fs = require("fs");

router.delete("/:contactId", (req, res) => {
  let targetcontactId = req.params.contactId;

  const fullData = fs.readFileSync("./data/contacts.json");
  const parsedData = JSON.parse(fullData);

  const targetcontactIndex = parsedData.findIndex(contact => contact.id === targetcontactId);
  parsedData.splice(targetcontactIndex, 1);
  fs.writeFileSync("./data/contacts.json", JSON.stringify(parsedData, null, 2));
  res.status(200).json(parsedData);
})

module.exports = router;
