

// format user stories
function formatUserStories(content) {
  var rows = [];

  // add user stories
  rows.push(formatUnorderedList("User Stories:\n", content.stories));

  // add hints, notes, updates
  if (content.hints.length) {
    rows.push(formatUnorderedList("\nHints:\n", content.hints));
  }
  if (content.notes.length) {
    rows.push(formatUnorderedList("\nNotes:\n", content.notes));
  }
  if (content.updates.length) {
    rows.push(formatUnorderedList("\nUpdates: \n", content.updates));
  }

  // return text
  return rows.join('\n');
}

// format lists
function formatOrderedList(title, arr) {
  var items = [];
  if (title) {
    items.push(title);
  }
  for (let i = 0; i < arr.length; i++) {
    items.push(`${i + 1}. ${arr[i]}`);
  }
  return items.join('\n');
}

function formatUnorderedList(title, arr) {
  var items = [];
  if (title) {
    items.push(title);
  }
  for (let i = 0; i < arr.length; i++) {
    items.push(`:white_small_square: ${arr[i]}`);
  }
  return items.join('\n');
}

module.exports.userStories = formatUserStories;
module.exports.orderedList = formatOrderedList;
module.exports.unorderedList = formatUnorderedList;
