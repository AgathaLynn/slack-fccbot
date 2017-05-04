/*
FUNCTIONS TO FORMAT MESSAGE WITH LIST OF PROJECTS
*/
function categoryMessage(data) {
  var text = `Are you looking for one of the ${data.category} challenges?`;

  // construct attachment
  var attachment = {};
  attachment.fallback = categoryText(data);
  attachment.color = '#006400';
  attachment.callback_id = "challenge_selection";
  var action = {
    name: 'challenges_list',
    text: 'Select a challenge...',
    type: 'select',
    options: []
  };
  for (let i = 0; i < data.challenges.length; i++) {
    action.options.push({
      'text': data.challenges[i],
      'value': data.challenges[i]
    });
  }
  attachment.actions = [action];

  return {
    text: text,
    attachments: [attachment]
  };
}

function categoryText(data) {
  var text = `Are you looking for one of these ${data.category} challenges?\n`;
  text += createList(data.challenges);

  return text;
}

/*
FUNCTIONS TO FORMAT MESSAGES WITH USER STORIES
*/
// given message object, formats replay for slack
function formatMessage(message) {
  var text = `Here's what I found on the ${message.name} challenge:`;
  var attachment = {};
  attachment.fallback = formatText(message);
  attachment.color = "#006400";
  attachment.title = message.name;
  attachment.text = "\n";
  attachment.text += "User Stories:\n" + createList(message.stories);
  if (message.hints.length) {
    attachment.text += "\n\nHints:\n" + createList(message.hints);
  }
  if (message.notes.length) {
    attachment.text += "\n\nNotes:\n" + createList(message.notes);
  }

  return {
    "text": text,
    "attachments" : [
      attachment
    ]
  };
}

// given message object, formats "text-only" replay for slack
function formatText(message) {
  var msg = {};
  msg.text = `*${message.name} Challenge*\n`;
  msg.text += "User Stories:\n" + createList(message.stories);
  if (message.hints.length) {
    msg.text += "\n\nHints:\n" + createList(message.hints);
  }
  if (message.notes.length) {
    msg.text += "\n\nNotes:\n" + createList(message.notes);
  }

  return msg;
}

// given array of items, creates numbered list (string)
function createList(items) {
  var lines = [];
  for (let i = 0; i < items.length; i++) {
    lines.push(`${i + 1}. ${items[i]}`);
  }
  return lines.join('\n');
}

module.exports.userStories = formatMessage;
module.exports.challengesInCategory = categoryMessage;
