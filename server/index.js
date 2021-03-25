const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const homeRoute = require("./routes/homeRoute");
const contactRoute = require("./routes/contactRoute");
const galleryRoute = require("./routes/galleryRoute");
const createContactactRoute = require("./routes/createContactRoute");
const editContactactRoute = require("./routes/editContactactRoute");
const deleteContactactRoute = require("./routes/deleteContactactRoute");
const creategalleryRoute = require("./routes/createGalleryRoute");
const deletegalleryRoute = require("./routes/deletegalleryRoute");
const editgalleryRoute = require("./routes/editgalleryRoute");
const singleContactactDetails = require('./routes/singleContactactDetails');

app.use(cors());
app.use(express.json());
app.use("/", homeRoute);
app.use("/", contactRoute);
app.use("/", galleryRoute);
app.use("/", createContactactRoute);
app.use("/", editContactactRoute);
app.use("/", deleteContactactRoute);
app.use("/", creategalleryRoute);
app.use("/", deletegalleryRoute);
app.use("/", editgalleryRoute);
app.use("/",singleContactactDetails);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});