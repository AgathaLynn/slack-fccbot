var Challenge = require('./../models/challengeSchema.js');

function challengeInfo(name) {
  return Challenge.findOne({name: name}).exec();
}

function challengesInCertificate(name) {
  return certificates()
  .then(
    function(results) {
      return looseMatch(name, results);
    }
  )
  .then(
    function fulfilled(match) {
      return match ? Challenge.find({certificate: match}, 'name').exec() : null;
    }
  );
}

function challengesInCategory(name) {
  return categories()
  .then(
    function(results) {
      return looseMatch(name, results);
    }
  )
  .then(
    function fulfilled(match) {
      return match ? Challenge.find({category: match}, 'name').exec() : null;
    }
  );
}

function categories() {
  return Challenge.find({}, 'category').exec()
  .then(
    function fulfilled(data) {
      return data.map(x => x.category);
    }
  );
}

function certificates() {
  return Challenge.find({}, 'certificate').exec()
  .then(
    function fulfilled(data) {
      return data.map(x => x.certificate);
    }
  );
}


/* Helper function */
function looseMatch(text, arr) {
  text = text.toLowerCase().replace(/\W/gi, "");

  var matches = arr.filter(function(item) {
    return item.toLowerCase().replace(/\W/gi, "").indexOf(text) > -1;
  });

  var uniqueMatches = [];
  for (var i = 0; i < matches.length; i++) {
    if (uniqueMatches.indexOf(matches[i]) === -1) {
      uniqueMatches.push(matches[i]);
    }
  }

  if (uniqueMatches.length === 1) {
    return matches[0];
  }
  else {
    return false;
  }
}

module.exports.challengeInfo = challengeInfo;
module.exports.challengesInCategory = challengesInCategory;
module.exports.challengesInCertificate = challengesInCertificate;
