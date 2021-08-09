const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const cors = require("cors");
const home = require("./routes/home");
const gallery = require("./routes/gallery");
const uploadfile= require("./routes/uploadfile");
const contact = require("./routes/contactRoute");
const my23 = require("./routes/my23");


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/", home);
app.use("/", gallery);
app.use("/", uploadfile);
app.use("/", contact);
app.use("/", my23);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});