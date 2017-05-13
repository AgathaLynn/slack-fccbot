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

// attachment containing user stories
function userStories(name, requirements) {
  var attachment = {
    fallback: format.userStories(requirements),
    color: '#006400',
    title: name,
    text: format.userStories(requirements)
  };

  return attachment;
}

module.exports.challengeSelector = challengeSelector;
module.exports.userStories = userStories;
