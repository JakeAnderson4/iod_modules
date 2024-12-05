'use strict';
const mongoose = require('mongoose');
require("dotenv").config();
let dbConnect = require("./dbConnect");
// Use 127.0.0.1 instead of localhost if connection fails
const uri = process.env.DB_URI || "mongodb://localhost:27017/";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(error => console.log('MongoDB Error: ' + error.message));

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//export
module.exports = mongoose;
//