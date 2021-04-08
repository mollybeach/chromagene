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
        return res.status(500).send({ msg: "file wasnot found" })
    }
    const newFile = req.files.file;
    newFile.mv(`${__dirname}/publicDna/${newFile.name}`, function (err) {
        if (error) {
            console.log(error)
            return res.status(500).send({ msg: "Error found" });
        }
        return res.send({name: newFile.name, path: `/${newFile.name}`});
    });
})

module.exports = router;