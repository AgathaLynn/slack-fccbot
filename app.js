// require packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// for getting data from database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fccbot');

// for getting environmental variables
require('dotenv').config();
var app = express();

// middleware and routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./controllers'));

// start listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
