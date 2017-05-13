var format = require('./format.js');

// attachment with drop-down menu to select challenge
function challengeSelector(challenges) {

  // build action
  var action = {
    name: 'challenges_list',
    text: 'Select a challenge...',
    type: 'select',
    options: []
  };
  for (let i = 0; i < challenges.length; i++) {
    action.options.push({
      'text': challenges[i],
      'value': challenges[i]
    });
  }

  // build attachment
  var attachment = {
    fallback: format.unorderedList('', challenges),
    color: '#006400',
    callback_id: 'select-challenge',
    actions: [action]
  };

  // return
  return attachment;
}

// attachment containing general info about challenge
function generalInfo(challenge) {
  var text = `
  The "${challenge.name}" challenge is one of the ${challenge.category}.
  You can view more information about this challenge at ${challenge.link}.
  `;

  return {
    fallback: text,
    color: '#006400',
    title: "More Info",
    text: text
  };
}


// attachment containing user stories
function userStories(name, requirements) {
  var attachment = {
    fallback: format.userStories(requirements),
    color: '#006400',
    title: name + ": Requirements",
    text: format.userStories(requirements)
  };

  return attachment;
}

module.exports.challengeSelector = challengeSelector;
module.exports.userStories = userStories;
module.exports.generalInfo = generalInfo;
