
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

// given array of items, creates numbered list (string)
function createList(items) {
  var lines = [];
  for (let i = 0; i < items.length; i++) {
    lines.push(`${i + 1}. ${items[i]}`);
  }
  return lines.join('\n');
}

module.exports = formatMessage;
