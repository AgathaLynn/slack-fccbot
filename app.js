// require packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// for formatting reponses
var data = require('./controllers/data.js');
var format = require('./responses.js');

// for getting data from database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fccbot');
var Challenge = require('./models/challengeSchema.js');

// for getting environmental variables
require('dotenv').config();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// for authentication
app.get('/oauth', function(req, res) {
  console.log(req.query);
  if (!req.query.code) {
    res.status(500);
    res.send({"error": "looks like we're not getting code"});
    console.log("error: looks like we're not getting code");
  }
  else {
    request({
      url: "https://slack.com/api/oauth.access",
      qs: {code: req.query.code, client_id: process.env.CLIENT_ID, client_secret: process.env.CLIENT_SECRET},
      method: "GET",
    }, function(error, response, body) {
      if (error) {
        console.log(error);
      }
      else {
        res.json(body);
      }
    });
  }
});

// for interacting with user
app.post('/fccbot', function(req, res) {

  // if user provides no info, let's help them along
  if (req.body.text === '') {
    res.json(format.welcome(req.body.user_name));
  }

  // otherwise, let's see if they sent a challenge name
  else {
    data.challengeInfo(req.body.text)
    .then(
      function fulfilled(info) {
        if (info) {
          response = format.userStories(info);
        }
        else {
          return data.challengesInCertificate(req.body.text)
          .then(
            function fulfilled(info) {
              response = format.categorySelector(info);
            }
          );
        }
      }
    )
    .then(
      function fulfilled() {
        res.json(response);
      },
      function rejected(reason) {
        console.log("argggghhhhhhhhhh");
        console.log(reason);
        res.json({text: 'sorry - i broke something'});
      }
    );
  }
});

// handles response to "select challenge from category" drop-down menu
app.post('/select-challenge', function(req, res) {

  // get user selected challenge from user response
  var request_info = JSON.parse(req.body.payload);
  var selection = request_info.actions[0].selected_options[0].value;

  // respond with challenge info
  data.challengeInfo(selection)
  .then(
    function fulfilled(info) {
      res.json(format.userStories(info));
    },
    function rejected(reason) {
      console.log(reason);
      res.json(format.userStories());
    }
  );
});
