const express = require("express");
const router = express.Router();
const fs = require("fs");

router.delete("/:contactId", (req, res) => {
  let targetContactId = req.params.ContactId;

  const fullData = fs.readFileSync("./data/contacts.json");
  const parsedData = JSON.parse(fullData);

  const targetContactIndex = parsedData.findIndex(contact => contact.id === targetContactId);
  parsedData.splice(targetContactIndex, 1);
  fs.writeFileSync("./data/contacts.json", JSON.stringify(parsedData, null, 2));
  res.status(200).json(parsedData);
})

module.exports = router;
