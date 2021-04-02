const express = require("express");
const router = express.Router();
const fs = require("fs");
let bigData = require("../data/contactData.json");
/*********************POST UPLOAD**************/

readUpdateFile = (file) => {
    const fileToRead = fs.readFileSync(file);
    const parsedData = JSON.parse(fileToRead);
    return parsedData;
}

router.post("/contact", (req, res) => {
    const { id, contactName, contactAddress, contactCity, contactCountry} = req.body;
    let newUploadItem = {
        id: id,
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
            let refreshedData = bigData = [newUploadItem, ...bigData];
            refreshedData = JSON.stringify(refreshedData, null, 2);
            fs.writeFileSync('./data/contactData.json', refreshedData);
            res.status(200).send(newUploadItem);
            console.log(newUploadItem);
        }
    };
    validateForm();
});

module.exports = router;
