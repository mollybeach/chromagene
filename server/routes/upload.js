const express = require("express");
const router = express.Router();
const fs = require("fs");
let bigData = require("../data/upload.json");
/*********************POST UPLOAD**************/

readUpdateFile = (file) => {
    const fileToRead = fs.readFileSync(file);
    const parsedData = JSON.parse(fileToRead);
    return parsedData;
}

router.post("/upload", (req, res) => {
    const { id, uploadName, uploadAddress, uploadCity, uploadCountry} = req.body;
    let newUploadItem = {
        id: id,
        name: uploadName,
        address: uploadAddress,
        city: uploadCity,
        country: uploadCountry,
    }
    const validateForm = () => {
        if ((req.body.uploadName === "") ||
            (req.body.uploadAddress === "") ||
            (req.body.uploadCity === "") ||
            (req.body.uploadCountry === "")
        ) {
            res.status(400).send("Please fill all required fields");
        } else {
            let refreshedData = bigData = [newUploadItem, ...bigData];
            refreshedData = JSON.stringify(refreshedData, null, 2);
            fs.writeFileSync('./data/upload.json', refreshedData);
            res.status(200).send(newUploadItem);
            console.log(newUploadItem);
        }
    };
    validateForm();
});

module.exports = router;
