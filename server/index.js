require('dotenv').config();    
const express = require('express');                                               
const cors = require("cors");                               
const home = require("./routes/home");                        
const gallery = require("./routes/gallery");                  
const uploadfile= require("./routes/uploadfile");             
const contact = require("./routes/contactRoute");             
const my23 = require("./routes/my23");   

let server = express();                                        
let path = require('path');                                 
let port = process.env.REACT_APP_PORT;   
let host = process.env.REACT_APP_HOST;
console.log(process.env.REACT_APP_API_URL);


//server.use(static(path.join(__dirname, 'client/build')));    
                                                       
server.use(cors());                                   
server.use(express.json());                         
server.use("/", home);                                
server.use("/", gallery);                             
server.use("/", uploadfile);                          
server.use("/", contact);                             
server.use("/", my23);                                                                         
                                                   

server.use(express.static(__dirname));

server.listen(process.env.PORT);


server.listen(port, host, () => console.log(`Server running at http://${host}:${port}/`));
