const express = require('express');
const cors = require('cors')
const router = express();
const fileUpload = require('express-fileupload');
router.use(express.static('publicDna')); 
router.use(cors()); 
router.use(fileUpload());
/***************MIDDLE WARE TO MOVE FILE TO PUBLIC DNA FOLDER**************/
router.post('/uploadfile', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;
    myFile.mv(`${__dirname}/publicDna/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

module.exports = router;