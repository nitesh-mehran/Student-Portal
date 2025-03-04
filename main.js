const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const regRoutes = require('./routes/regRoutes')
const adminRoutes = require('./routes/adminRoutes')
const session = require('express-session')

mongoose.connect("mongodb://localhost:27017/form");

const port = 3000;

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); 
app.set("view engine", "ejs");
app.use(studentRoutes);
app.use(regRoutes);
app.use(adminRoutes); 
app.use(session({
    secret: 'Anu2019',
    resave: false,
    saveUninitialized: false
  }))

app.listen(port, console.log("server running on port 3000"));
