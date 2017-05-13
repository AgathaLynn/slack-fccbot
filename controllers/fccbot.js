var express = require('express');
var router = express.Router();
var format = require('../scripts/message/responses.js');
var data = require('../models/access.js');

router.post('/', function(req, res) {

  // check verification token
  if (req.body.token !== process.env.VERIFICATION_TOKEN) {
    console.log('tokens don\'t match');
    return;
  }

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
          response = format.challengeInfo(info);
        }
        else {
          return data.challengesInCertificate(req.body.text)
          .then(
            function fulfilled(info) {
              response = format.sectionInfo(info);
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

module.exports = router;
