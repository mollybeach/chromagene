const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const warehouseRoute = require("./routes/contact");
const inventoryRoute = require("./routes/gallery");
const createWarehouseRoute = require("./routes/createContactRoute");
const editWarehouseRoute = require("./routes/editContactRoute");
const deleteWarehouseRoute = require("./routes/deleteWarehouseRoute");
const createInventoryRoute = require("./routes/createGalleryRoute");
const deleteInventoryRoute = require("./routes/deleteInventoryRoute");
const editInventoryRoute = require("./routes/editInventoryRoute");
const singleWarehouseDetails = require('./routes/singleWarehouseDetails');

app.use(cors());
app.use(express.json());

app.use("/", warehouseRoute);
app.use("/", inventoryRoute);
app.use("/", createWarehouseRoute);
app.use("/", editWarehouseRoute);
app.use("/", deleteWarehouseRoute);
app.use("/", createInventoryRoute);
app.use("/", deleteInventoryRoute);
app.use("/", editInventoryRoute);
app.use("/",singleWarehouseDetails);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});