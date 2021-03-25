const express = require("express");
const router = express.Router();
const fs = require("fs");

 readGalleryFile = () =>{
    const fullData = fs.readFileSync("./data/inventories.json");
    const parsedData = JSON.parse(fullData);
    return parsedData;
 }

 updateSelectedGallery = (editId, updateData) =>{
    const parsedData = readGalleryFile();
    parsedData.splice(parsedData.findIndex(item => item.id === editId), 1, updateData);
    return parsedData;
}

updateGalleryFile = (editId, updateData) =>{
    const newGalleryFile = updateSelectedGallery(editId, updateData);
    fs.writeFileSync("./data/gallery.json", JSON.stringify(newGalleryFile,null,2));
 }

 validateData = (updateData) =>{

    if(!updateData.id || !updateData.contactID || !updateData.contactName || !updateData.itemName || !updateData.description || !updateData.category || !updateData.status || updateData.quantity === undefined){
        return false;
    } else {
       return true;
    }
 }


router.put("/gallery/:galleryId", (req, res)=>{
    const updateData = req.body;
    const editId = req.params.galleryId;

    validateData(updateData) ? (updateGalleryFile(editId,updateData), res.status(200).json("gallery Item updated successful")): res.status(400).send("Please make sure all fields are filled out properly and resubmit")
})

module.exports = router;