require ("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer')
var fs = require('fs');
var path = require('path');
app.set("view engine", "ejs");


const guiderRoutes = require('./routes/guider');


// ADD THIS
app.use(express.static('public'));
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/guide', guiderRoutes);

//all routes import 
const item = require("./routes/itemRoute");

const category = require("./routes/categoryRoute")
const material = require("./routes/materialRoute")
const router = require("./routes/orderRoute")
const user= require("./routes/userRoutes")

app.use(router);
app.use("/api/v1",user)
app.use("/api/v1", item);
app.use("/api/v1", category);
app.use("/api/v1", material);






module.exports = app;