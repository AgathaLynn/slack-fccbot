const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

require('dotenv').config();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res) {
  res.send("Working! Path Hit: " + req.url);
});

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


app.post("/test", function(req, res){
    console.log(req.body);
    res.send("test is working");
});

app.post('/fccbot', function(req, res) {
  res.send("Request received. Har-har-har.");
});
