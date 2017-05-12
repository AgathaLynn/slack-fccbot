// require packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// for formatting reponses
var data = require('./data.js');
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

  // declare response variable
  var response;

  // if user provides no info, let's help them along
  if (req.body.text === '') {
    response = format.welcome(req.body.user_name);
  }

  // otherwise, let's see if they sent a challenge name
  else {
    let challenge = data.findChallenge(req.body.text);

    // if we find a challenge, respond with info or apology
    if (challenge) {
      let challenge_info = data.findChallengeInfo(challenge);
      response = format.userStories(challenge_info);
    }

    // if not, let's look for a category & respond appropriately
    else {
      let category = data.findChallengesByCategory(req.body.text);
      response = format.categorySelector(category);
    }
  }

  // okay... let's send back our response
  res.json(response);
});

// handles response to "select challenge from category" drop-down menu
app.post('/select-challenge', function(req, res) {

  // get user selected challenge from user response
  var request_info = JSON.parse(req.body.payload);
  var selection = request_info.actions[0].selected_options[0].value;

  // respond with challenge info
  Challenge.findOne({name: selection}, function(err, challenge) {
    if (err) {
      console.log(err);
      res.json(format.userStories());
    }
    else {
      res.json(format.userStories(challenge));
    }
  });
});
