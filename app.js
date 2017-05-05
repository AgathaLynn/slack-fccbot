// require packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// for formatting reponses
var data = require('./data.js');
var format = require('./responses.js');
var info = require('./sample-challenge-info.js')(); // just markdown previewer

require('dotenv').config();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start listening
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// for testing
app.get('/', function(req, res) {
  res.send("Working! Path Hit: " + req.url);
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

// now we're in business
app.post('/fccbot', function(req, res) {

  // get information about request
  console.log(req.body.text);
  var challenge = data.findChallenge(req.body.text);
  if (challenge) {
    info.name = challenge;
    // right now I'm just replying info on the markdown previewer.
    // we'll get rid of the "info" variable and include real information
    res.json(format.userStories(info));
  }
  else {
    // lets try to find the category
    var category = data.findChallengesByCategory(req.body.text);
    if (category) {
      res.json(format.categorySelector(category));
    }
    else {
      res.json({text: "Sorry. Couldn't find that. If you tell me what certificate your working towards, I might be able to help. Try '/fccbot [certificate name]'.'"}); // we can try to replace this with something helpful
    }
  }
});

// handles response to "select challenge from category" drop-down menu
app.post('/select-challenge', function(req, res) {
  var request_info = JSON.parse(req.body.payload);
  var selection = request_info.actions[0].selected_options[0].value;

  res.json(format.userStories(info));
});
