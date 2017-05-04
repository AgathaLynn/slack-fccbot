var challenge_names = [
  {name: 'Build a Tribute Page', certificate: 'Front End Development Certification'},
  {name: 'Build a Personal Portfolio Webpage', certificate: 'Front End Development Certification'},
  {name: 'Build a Random Quote Machine', certificate: 'Front End Development Certification'},
  {name: 'Show the Local Weather', certificate: 'Front End Development Certification'},
  {name: 'Build a Wikipedia Viewer', certificate: 'Front End Development Certification'},
  {name: 'Use the Twitch.tv JSON API', certificate: 'Front End Development Certification'},
  {name: 'Build a JavaScript Calculator', certificate: 'Front End Development Certification'},
  {name: 'Build a Pomodoro Clock', certificate: 'Front End Development Certification'},
  {name: 'Build a Tic Tac Toe Game', certificate: 'Front End Development Certification'},
  {name: 'Build a Simon Game', certificate: 'Front End Development Certification'},
  {name: 'Build a Markdown Previewer', certificate: 'Data Visualization Certification'},
  {name: 'Build a Camper Leaderboard', certificate: 'Data Visualization Certification'},
  {name: 'Build a Recipe Box', certificate: 'Data Visualization Certification'},
  {name: 'Build the Game of Life', certificate: 'Data Visualization Certification'},
  {name: 'Build a Roguelike Dungeon Crawler Game', certificate: 'Data Visualization Certification'},
  {name: 'Visualize Data with a Bar Chart', certificate: 'Data Visualization Certification'},
  {name: 'Visualize Data with a Scatterplot Graph', certificate: 'Data Visualization Certification'},
  {name: 'Visualize Data with a Heat Map', certificate: 'Data Visualization Certification'},
  {name: 'Show National Contiguity with a Force Directed Graph', certificate: 'Data Visualization Certification'},
  {name: 'Map Data Across the Globe', certificate: 'Data Visualization Certification'},
  {name: 'Timestamp Microservice', certificate: 'Back End Development Certification'},
  {name: 'Request Header Parser Microservice', certificate: 'Back End Development Certification'},
  {name: 'URL Shortener Microservice', certificate: 'Back End Development Certification'},
  {name: 'Image Search Abstraction Layer', certificate: 'Back End Development Certification'},
  {name: 'File Metadata Microservice', certificate: 'Back End Development Certification'},
  {name: 'Build a Voting App', certificate: 'Back End Development Certification'},
  {name: 'Build a Nightlife Coordination App', certificate: 'Back End Development Certification'},
  {name: 'Chart the Stock Market', certificate: 'Back End Development Certification'},
  {name: 'Manage a Book Trading Club', certificate: 'Back End Development Certification'},
  {name: 'Build a Pinterest Clone', certificate: 'Back End Development Certification'}
];

/*
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
*/

function findChallengesByCategory(text) {
  var category = findCategory(text);
  var challenges;

  if (category) {
    challenges = challenge_names.filter(function(challenge) {
      return challenge.certificate === category;
    })
    .map(function(challenge) {
      return challenge.name;
    });

    return {
      category: category,
      challenges: challenges
    };
  }
  else {
    return false;
  }
}

function findCategory(text) {
  text = text.toLowerCase().replace(/\W/gi, "");

  var categories = [
    'Front End Development Certification',
    'Back End Development Certification',
    'Data Visualization Certification'
  ];

  var matches = categories.filter(function(category) {
    return category.toLowerCase().replace(/\W/gi, "").indexOf(text) > -1;
  });

  if (matches.length === 1) {
    return matches[0];
  }
  else {
    return false;
  }
}

function findChallenge(text) {
  text = text.toLowerCase();
  var matches = challenge_names
  .filter(function(challenge) {
    return challenge.name.toLowerCase().indexOf(text) > -1;
  });

  if (matches.length === 1) {
    return matches[0].name;
  }
  else {
    return false;
  }
}

module.exports.findChallenge = findChallenge;
module.exports.findChallengesByCategory = findChallengesByCategory;
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
