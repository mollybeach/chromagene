const express = require("express");
const router = express.Router();
const fs = require("fs");

readGalleryFile = () =>{
  const fullData = fs.readFileSync("./data/gallery.json");
  const parsedData = JSON.parse(fullData);
  return parsedData;
} 

removeGalleryObj = (targetGalleryId) =>{
  const parsedData = readgalleryFile();
  const targetGalleryIndex = parsedData.findIndex(item => item.id === targeGalleryId);
  parsedData.splice(targetGalleryIndex, 1);
  return parsedData;
}

deleteGalleryItem = (targetgalleryId) =>{
  const newGalleryData = removeGalleryObj(targetgalleryId);
  fs.writeFileSync("./data/inventories.json", JSON.stringify(newGalleryData,null,2));
  return newGalleryData;
}

router.delete("/gallery/:galleryId", (req, res) => {
  let targetGalleryId = req.params.galleryId;
  deleteGalleryItem(targetGalleryId);
  let newGalleryData = deleteGalleryItem(targetGalleryId); 
  res.status(200).json(newGalleryData);
  });
  
module.exports = router;