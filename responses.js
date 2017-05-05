/*
FUNCTIONS TO FORMAT RESPONSES SENT TO USER
*/

/////
// USER STORY RESPONSES
/////
function userStories(challenge, message) {

  //build text of message
  var text = `Here's what I found on the "${challenge.name}" challenge:`;
  if (message) {
    text = message + "\n" + text;
  }

  // build attachment
  var attachment = {
    fallback: formatUserStories(challenge),
    color: "#006400", // taken from FCC website
    title: challenge.name,
    text: formatUserStories(challenge)
  };

  // return object
  return {
    text: text,
    attachments: [
      attachment
    ]
  };
}

/////
// DROPDOWN MENU OF CHALLENGES IN CATEGORY
/////

function categorySelector(data, message) {

  // build text of message
  var text = `Are you looking for one the ${data.category} challenges?`;
  if (message) {
    text = message + "\n" + text;
  }

  // build drop-down menu
  var action = {
    name: 'challenges_list',
    text: 'Select a challenge...',
    type: 'select',
    options: []
  };
  for (let i = 0; i < data.category.length; i++) {
    action.options.push({
      'text': data.challenges[i],
      'value': data.challenges[i]
    });
  }

  // build attachment
  var attachment = {
    fallback: formatUnorderedList(data.challenges),
    color: '#006400',
    callback_id: 'challenge-selection',
    actions: [action]
  };

  // return object
  return {
    text: text,
    attachments: [attachment]
  };
}


/////
// BUILDING BLOCK FUNCTIONS
/////

function formatUserStories(challenge) {
  var rows = [];

  // add user stories
  rows.push("User Stories:\n" + formatUnorderedList(challenge.stories));

  // add hints and notes
  if (challenge.hints.length) {
    rows.push("\nHints:\n" + formatUnorderedList(challenge.hints));
  }
  if (challenge.notes.length) {
    rows.push("\nNotes:\n" + formatUnorderedList(challenge.notes));
  }

  // return text
  return rows.join('\n');
}

function formatOrderedList(arr) {
  var items = [];
  for (let i = 0; i < arr.length; i++) {
    items.push(`${i + 1}. ${arr[i]}`);
  }
  return items.join('\n');
}

function formatUnorderedList(arr) {
  var items = [];
  for (let i = 0; i < arr.length; i++) {
    items.push(`:white_small_square: ${arr[i]}`);
  }
  return items.join('\n');
}

/////
// EXPORT STUFF
/////

module.exports.userStories = userStories;
module.exports.categorySelector = categorySelector;
