var express = require('express');
var router = express.Router();
var data = require('../models/access.js');
var format = require('../views/message/responses.js');

router.post('/', function(req, res) {

  // turn payload into an object, please
  var request_info = JSON.parse(req.body.payload);
/*
  // check verification token
  if (request_info.token !== process.env.VERIFICATION_TOKEN) {
    console.log('tokens don\'t match');
    return;
  }
*/
  // check what action we're responding to
  var action = request_info.callback_id;
  if (action === "select-challenge") {
    selectChallenge(request_info, res);
  }
  else if (action === "select-certificate") {
    selectCertificate(request_info, res);
  }
});

function selectChallenge(request_info, res) {
  // get user selected challenge from user response
  var selection = request_info.actions[0].selected_options[0].value;

  // respond with challenge info
  data.challengeInfo(selection)
  .then(
    function fulfilled(info) {
      res.json(format.challengeInfo(info));
    },
    function rejected(reason) {
      console.log(reason);
      res.json(format.challengeInfo());
    }
  );
}

function selectCertificate(request_info, res) {
  // get certificate name
  var selection = request_info.actions[0].value;
  // respond with dropdown menu to select challenge
  data.challengesInCertificate(selection)
  .then(
    function fulfilled(info) {
      return format.sectionInfo(info);
    }
  )
  .then(
    function fulfilled(response) {
      res.json(response);
    },
    function rejected(reason) {
      console.log(reason);
      res.json({text: 'sorry - i broke something'});
    }
  );
}

module.exports = router;
