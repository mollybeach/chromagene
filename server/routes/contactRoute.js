const express = require("express");
const router = express.Router();
const fs = require("fs");
let contactData = require("../data/contactData.json");

/*********************POST UPLOAD**************/

readUpdateFile = (file) => {
    const fileToRead = fs.readFileSync(file);
    const parsedData = JSON.parse(fileToRead);
    return parsedData;
}

router.post("/contactApi", (req, res) => {
    const { contactId, contactName, contactAddress, contactCity, contactCountry} = req.body;
    let newUploadItem = {
        id: contactId,
        name: contactName,
        address: contactAddress,
        city: contactCity,
        country: contactCountry,
    }
    const validateForm = () => {
        if ((req.body.contactName === "") ||
            (req.body.contactAddress === "") ||
            (req.body.contactCity === "") ||
            (req.body.contactCountry === "")
        ) {
            res.status(400).send("Please fill all required fields");
        } else {
            let refreshedData = contactData = [newUploadItem, ...contactData];
            refreshedData = JSON.stringify(refreshedData, null, 2);
            fs.writeFileSync('./data/contactData.json', refreshedData);
            res.status(200).send(newUploadItem);
            console.log(newUploadItem);
        }
    };
    validateForm();
});

router.get("/contactApi", (req, res) => {
    res.status(200).json(contactData);
});



module.exports = router;
