// require packages
const express = require('express');
var app = express();

const bodyParser = require('body-parser');
const request = require('request');
require('dotenv').config();

// for getting data from database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

// middleware and routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./controllers'));

// start listening
app.listen(process.env.PORT, function() {
  console.log('App listening on Port ' + process.env.PORT + '!');
});
