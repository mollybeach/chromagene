const express = require("express");
const router = express.Router();
const fs = require("fs");
const cors = require("cors");
const dataPath = "../data/upload.json";
//const bigData = JSON.parse(fs.readFileSync(dataPath));

let bigData = require("../data/upload.json");
/*********************POST Upload**************
router.post("/upload", (req, res) => {
     bigData.push({
        id: req.body.uploadId,
        uploadName: req.body.uploadName,
        uploadAddress: req.body.uploadAddress,
        uploadCity: req.body.uploadCity,
        uploadCountry: req.body.uploadCountry,
      });
      
      //let id = req.params.id;
      //let topUser = bigData.find((item) => item.id === id);
      //console.log(topUser.comments.values().get);
      //topUser.unshift(newUploadItem);
      res.json(bigData);
      fs.writeFileSync(dataPath, JSON.stringify(bigData, null, 2));
      //res.send(newUploadItem);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;

*/
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
