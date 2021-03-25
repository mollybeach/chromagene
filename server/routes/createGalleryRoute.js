const express = require("express");
const router = express.Router();
const fs = require("fs");
let galleryData = require("../data/gallery.json");

readcontactFile = (file) => {
    const fileToRead = fs.readFileSync(file);
    const parsedData = JSON.parse(fileToRead);
    return parsedData;
}

router.post("/gallery/add", (req, res) => {
    const { id, contactID, itemName, description, quantity, status, category, contactName } = req.body;
    let newgalleryItem = {
        id: id,
        contactID: contactID,
        itemName: itemName,
        description: description,
        category: category,
        quantity: quantity,
        status: status,
        contactName: contactName
    }

    const validateForm = () => {
        if ((req.body.itemName === "") ||
            (req.body.description === "") ||
            (req.body.category === "") ||
            (req.body.quantity === "") ||
            (req.body.contactName === "")
        ) {
            res.status(400).send("Please fill all required fields");
        } else {
            let updatedGalleryData = galleryData = [newGalleryItem, ...galleryData];
            updatedGalleryData = JSON.stringify(updatedGalleryData, null, 2);
            fs.writeFileSync("./data/inventories.json", updatedGalleryData);

            res.status(200).send(newGalleryItem);
        }
    };

    validateForm();
});

module.exports = router;
