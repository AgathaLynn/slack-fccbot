/*
FUNCTIONS TO FORMAT RESPONSES SENT TO USER
*/

/////
// Welcome message (for when no query provided)
/////

function welcome(name) {
  var greetings = [
    `:wave: Hello, ${name}!
    I'm fccBot, at your service.`,
    `Hi, ${name}, you called? :telephone_receiver:`,
  ];

  var greeting = greetings[Math.floor(Math.random() * greetings.length)];
  var text = `${greeting}
  If you're looking for information about one of the freeCodeCamp challenges, I'm here to help. Just let me know the name of the challenge, or what certificate you're working towards.

  Like this: */fccbot front-end development*
  `;

  return {text};
}

/////
// USER STORY RESPONSES (to deliver info on challenges)
/////
function userStories(challenge, message) {

  // if no info, apologize
  if (!challenge) {
    return apology1();
  }

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
// DROPDOWN MENU OF CHALLENGES IN CERTIFICATE
/////

function categorySelector(data, message) {

  // if no challenges, apologize
  if (!data) {
    return apology2();
  }
  var [category, challenges] = data;
  challenges = challenges.map(x => x.name);

  // build text of message
  var text = `Are you looking for one the ${category} challenges?`;
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
  for (let i = 0; i < challenges.length; i++) {
    action.options.push({
      'text': challenges[i],
      'value': challenges[i]
    });
  }

  // build attachment
  var attachment = {
    fallback: formatUnorderedList(challenges),
    color: '#006400',
    callback_id: 'select-challenge',
    actions: [action]
  };

  // return object
  return {
    text: text,
    attachments: [attachment]
  };
}

/////
// APOLOGY (helper) FUNCTIONS
/////

// apology - not implemented
function apology1() {
  return {text: "Sorry - I can't find any information for that challenge."};
}

// apology - haven't a clue
function apology2() {
  return {text: "Sorry. Couldn't find that. If you tell me what certificate you're working towards, I might be able to help. Try '/fccbot [certificate name]'.'"};
}

/////
// BUILDING BLOCK (helper) FUNCTIONS
/////

function formatUserStories(challenge) {
  var rows = [];

  // add user stories
  rows.push("User Stories:\n" + formatUnorderedList(challenge.requirements.stories));

  // add hints, notes, updates
  if (challenge.requirements.hints.length) {
    rows.push("\nHints:\n" + formatUnorderedList(challenge.requirements.hints));
  }
  if (challenge.requirements.notes.length) {
    rows.push("\nNotes:\n" + formatUnorderedList(challenge.requirements.notes));
  }
  if (challenge.requirements.updates.length) {
    rows.push("\nUpdates: \n" + formatUnorderedList(challenge.requirements.updates));
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

module.exports.welcome = welcome;
module.exports.userStories = userStories;
module.exports.categorySelector = categorySelector;
