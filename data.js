function findChallenge(text) {
  text = text.toLowerCase();
  var challenge_names = [
    'Build a Tribute Page',
    'Build a Personal Portfolio Webpage',
    'Build a Random Quote Machine',
    'Show the Local Weather',
    'Build a Wikipedia Viewer',
    'Use the Twitch.tv JSON API',
    'Build a JavaScript Calculator',
    'Build a Pomodoro Clock',
    'Build a Tic Tac Toe Game',
    'Build a Simon Game',
    'Build a Markdown Previewer',
    'Build a Camper Leaderboard',
    'Build a Recipe Box',
    'Build the Game of Life',
    'Build a Roguelike Dungeon Crawler Game',
    'Visualize Data with a Bar Chart',
    'Visualize Data with a Scatterplot Graph',
    'Visualize Data with a Heat Map',
    'Show National Contiguity with a Force Directed Graph',
    'Map Data Across the Globe',
    'Timestamp Microservice',
    'Request Header Parser Microservice',
    'URL Shortener Microservice',
    'Image Search Abstraction Layer',
    'File Metadata Microservice',
    'Build a Voting App',
    'Build a Nightlife Coordination App',
    'Chart the Stock Market',
    'Manage a Book Trading Club',
    'Build a Pinterest Clone'
  ];
  var matches = challenge_names
  .filter(function(name) {
    return name.toLowerCase().indexOf(text) > -1;
  });

  if (matches.length === 1) {
    return matches[0];
  }
  else {
    return false;
  }
}

module.exports.findChallenge = findChallenge;
/*
var test_queries = [
  'header parser',
  'pomodoro clock',
  'tribute page',
  'tic tac toe game',
  'microservice',
  'recipe box'
];

for (var i = 0; i < test_queries.length; i++) {
  console.log(test_queries[i] + ": " + findChallenge(test_queries[i]));
}
*/
