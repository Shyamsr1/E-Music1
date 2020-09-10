
// Import Node and 3rd party modules
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const checkAuth = require("./check-auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/Userdata");
const router = express.Router();


var bodyparser = require('body-parser');
var app = new express();

app.use(express.json());

// Import local modules
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");


    app.use(express.json());
    app.use(cors());
    
    app.use(bodyparser.json())
    
    app.use("/user", userRoutes);
    app.use("/admin", adminRoutes);


const port = process.env.PORT || 3000;
app.listen(port,() =>console.log(`Listening to port ${port}`));