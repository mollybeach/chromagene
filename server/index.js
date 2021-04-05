const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const home = require("./routes/home");
const gallery = require("./routes/gallery");
//const upload= require("./routes/upload");
const uploadfile= require("./routes/uploadfile");
const contact = require("./routes/contactRoute");
/*
const dnaRoute = require("./routes/dnaRoute");
const dnaRoute = require("./routes/dnaRoute");
const galleryRoute = require("./routes/galleryRoute");
*/


app.use(cors());
app.use(express.json());
app.use("/", home);
app.use("/", gallery);
//app.use("/", upload);
app.use("/", uploadfile);
app.use("/", contact);
//app.use("/", upload);
//app.use("/", dnaRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});