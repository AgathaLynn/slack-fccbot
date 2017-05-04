// require packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

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
    res.send({"error": "looks like we're not getting ocde"});
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
  // we need some outside code
  var data = require('./data.js');
  var format = require('./message-formatter.js');
  var info = require('./sample-challenge-info.js')(); // just markdown previewer

  // get information about request
  console.log(req.body.text);
  var challenge = data.findChallenge(req.body.text);

  if (challenge) {
    info.name = challenge;
    // right now I'm just replying info on the markdown previewer. Yeah, that's lame
    res.json(format(info));
  }
  else {
    // I'll want to eventually give something useful. Right now just sayin' sorry
    res.json({text: "Sorry. Couldn't find that."});
  }
});
