// returns a sample message object - just for practice
// should add link?
function getInfo() {
  var challenge = {};
  challenge.name = "Markdown Previewer";
  challenge.category = "React Projects";
  challenge.stories = [
    "I can type GitHub-flavored Markdown into a text area.",
    "I can see a preview of the output of my markdown that is updated as I type."
  ];
  challenge.hints = [
    "You don't need to interpret Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked",
  ];
  challenge.notes = [
    "If you want to use the React JSX syntax, you need to enable 'Babel' as a preprocessor"
  ];

  return challenge;
}

module.exports = getInfo;
