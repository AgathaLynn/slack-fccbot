var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
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
        res.send("Oops. Error.");
      }
      else {
        res.send("Congratulations! You have successfully installed fccbot to " + body.team_name + "!");
      }
    });
  }
});

module.exports = router;
