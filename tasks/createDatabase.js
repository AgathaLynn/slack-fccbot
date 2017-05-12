/*
Program to populate database with fcc challenge data
- this assumes that the collection is already empty/non-existent: DELETE FIRST
- address of database is hardcoded into the program: CHECK THAT IT IS CORRECT
*/


// requirements
var mongoose = require('mongoose');
var Challenge = require('../models/challengeSchema.js');

// set up mongodb
var url = 'mongodb://localhost:27017/fccbot';
mongoose.connect(url);

// put data in database
for (let i = 0; i < data.length; i++) {
  let challenge = new Challenge(data[i]);
  challenge.save(function(err, obj) {
    if (err) {
      console.log("error at " + i + ":");
      console.log(err);
    }
    else {
      console.log(`${i}th item added`);
    }
  });
}

var data = [
  // front end certification
  {
    name: 'Build a Tribute Page',
    category: 'Basic Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/NNvBQW/.',
    requirements: {
      stories: [
        'I can view a tribute page with an image and text.',
        'I can click on a link that will take me to an external website with further information on the topic.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-tribute-page'
  },
  {
    name: 'Build a Personal Portfolio Webpage',
    category: 'Basic Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/YqLyXB/.',
    requirements: {
      stories: [
        'I can access all of the portfolio webpage\'s content just by scrolling.',
        'I can click different buttons that will take me to the portfolio creator\'s different social media pages',
        'I can see thumbnail images of different projects the portfolio creator has built (if you haven\'t built any websites before, use placeholders.)',
        'I navigate to different sections of the webpage by clicking buttons in the navigation.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-personal-portfolio-webpage'
  },
  {
    name: 'Build a Random Quote Machine',
    category: 'Intermediate Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/ONjoLe/.',
    requirements: {
      stories: [
        'I can click a button to show me a new random quote.',
        'I can press a button to tweet out a quote.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-random-quote-machine'
  },
  {
    name: 'Show the Local Weather',
    category: 'Intermediate Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: http://codepen.io/FreeCodeCamp/full/bELRjV.',
    requirements: {
      stories: [
        'I can see the weather in my current location',
        'I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.',
        'I can push a button to toggle between Fahrenheit and Celsius'
      ],
      hints: [],
      notes: [
        'Many internet browsers now require an HTTP Secure (https://) connection to obtain a user\'s locale via HTML5 Geolocation. For this reason, you will need to choose one of two paths to complete this project: ...'
      ],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/show-the-local-weather'
  },
  {
    name: 'Build a Wikipedia Viewer',
    category: 'Intermediate Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/wGqEga/.',
    requirements: {
      stories: [
        'I can search Wikipedia entries in a search box and see the resulting Wikipedia entries',
        'I can click a button to see a random Wikipedia entry.'
      ],
      hints: [
        'Here\'s a URL you can use to get a random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random.',
        'Here\'s an entry on using Wikipedia\'s API: https://www.mediawiki.org/wiki/API:Main_page.',
        'Use this link to experiment with Wikipedia\'s API: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm.'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer'
  },
  {
    name: 'Use the Twitchtv JSON API',
    category: 'Intermediate Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.',
    requirements: {
      stories: [
        'I can see whether Free Code Camp is currently streaming on Twitch.tv.',
        'I can click the status output and be sent directly to the Free Code Camp\'s Twitch.tv channel.',
        'If a Twitch user is currently streaminng, I can see additional details about what they are streaming.',
        'I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.'
      ],
      hints: [
        'See an example call to Twitch.tv\'s JSONP API at http://forum.freecodecamp.com/t/use-the-twitchtv-json-api/19541.',
        'The relevant documentation about this API call is here: https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel.',
        'Here\'s an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]'
      ],
      notes: [],
      updates: [
        'Due to a change in conditions on API usage explained here Twitch.tv now requires an API key, but we\'ve built a workaround. Use https://wind-bow.gomix.me/twitch-api instead of twitch\'s API base URL (i.e. https://api.twitch.tv/kraken ) and you\'ll still be able to get account information, without needing to sign up for an API key.'
      ]
    },
    link: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api'
  },
  {
    name: 'Build a JavaScript Calculator',
    category: 'Advanced Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/rLJZrA/.',
    requirements: {
      stories: [
        'I can add, subtract, multiply and divide two numbers.',
        'I can clear the input field with a clear button',
        'I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator'
  },
  {
    name: 'Build a Pomodoro Clock',
    category: 'Advanced Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/aNyxXR/.',
    requirements: {
      stories: [
        'I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.',
        'I can reset the clock for my next pomodoro',
        'I can customize the length of each pomodoro.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-pomodoro-clock'
  },
  {
    name: 'Build a Tic Tac Toe Game',
    category: 'Advanced Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/KzXQgy/.',
    requirements: {
      stories: [
        'I can play a game of Tic Tac Toe with the computer',
        'My game will reset as soon as it\'s over so I can play again.',
        'I can choose whether I want to play as X or O.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game'
  },
  {
    name: 'Build a Simon Game',
    category: 'Advanced Front End Development Projects',
    certificate: 'Front End Development Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/obYBjE.',
    requirements: {
      stories: [
        'I am presented with a random series of button presses.',
        'Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.',
        'I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.',
        'If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.',
        'I can see how many steps are in the current series of button presses.',
        'If I want to restart, I can hit a button to do so, and the game will return to a single step.',
        'I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.',
        'I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.'
      ],
      hints: [
        'Here are mp3s you can use for each button: https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3.'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-simon-game'
  },
  // data visualization certification
  {
    name: 'Build a Markdown Previewer',
    category: 'React Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/JXrLLE/.',
    requirements: {
      stories: [
        'I can type GitHub-flavored Markdown into a text area.',
        'I can see a preview of the output of my markdown that is updated as I type'
      ],
      hints: [
        'You don\'t need to interpret Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked'
      ],
      notes: [
        'If you want to use the React JSX syntax, you need to enable \'Babel\' as a preprocessor'
      ],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-markdown-previewer'
  },
  {
    name: 'Build a Camper Leaderboard',
    category: 'React Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/eZGMjp/.',
    requirements: {
      stories: [
        'I can see a table of the Free Code Camp campers who\'ve earned the most brownie points in the past 30 days.',
        'I can see how many brownie points they\'ve earned in the past 30 days, and how many they\'ve earned total.',
        'I can toggle between sorting the list by how many brownie points they\'ve earned in the past 30 days and by how many brownie points they\'ve earned total.'
      ],
      hints: [
        'To get the top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.',
        'To get the top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-camper-leaderboard'
  },
  {
    name: 'Build a Recipe Box',
    category: 'React Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/xVXWag/.',
    requirements: {
      stories: [
        'I can create recipes that have names and ingredients.',
        'I can see an index view where the names of all the recipes are visible.',
        'I can click into any of those recipes to view it.',
        'I can edit these recipes.',
        'I can delete these recipes.',
        'All new recipes I add are saved in my browser\'s local storage. If I refresh the page, these recipes will still be there.'
      ],
      hints: [
        'You should prefix your local storage keys on CodePen, i.e. _username_recipes'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-recipe-box'
  },
  {
    name: 'Build the Game of Life',
    category: 'React Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/reGdqx/.',
    requirements: {
      stories: [
        'When I first arrive at the game, it will randomly generate a board and start playing.',
        'I can start and stop the board.',
        'I can set up the board.',
        'I can clear the board.',
        'When I press start, the game will play out.',
        'Each time the board changes, I can see how many generations have gone by.'
      ],
      hints: [
        'Here\'s an explanation of Conway\'s Game of Life from John Conway himself: https://www.youtube.com/watch?v=E8kUJL04ELA',
        'Here\'s an overview of Conway\'s Game of Life with rules for your reference: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-the-game-of-life'
  },
  {
    name: 'Build a Roguelike Dungeon Crawler Game',
    category: 'React Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/PNJRyd/.',
    requirements: {
      stories: [
        'I have health, a level, and a weapon. I can pick up a better weapon. I can pick up health items.',
        'All the items and enemies on the map are arranged at random.',
        'I can move throughout a map, discovering items.',
        'I can move anywhere within the map\'s boundaries, but I can\'t move through an enemy until I\'ve beaten it.',
        'Much of the map is hidden. When I take a step, all spaces that are within a certain number of spaces from me are revealed.',
        'When I beat an enemy, the enemy goes away and I get XP, which eventually increases my level.',
        'When I fight an enemy, we take turns damaging each other until one of us loses. I do damage based off of my level and my weapon. The enemy does damage based off of its level. Damage is somewhat random within a range.',
        'When I find and beat the boss, I win.',
        'The game should be challenging, but theoretically winnable.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-roguelike-dungeon-crawler-game'
  },
  {
    name: 'Visualize Data with a Bar Chart',
    category: 'Data Visualization Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/vGjLVZ.',
    requirements: {
      stories: [
        'I can see US Gross Domestic Product by quarter, over time.',
        'I can mouse over a bar and see a tooltip with the GDP amount and exact year and month that bar represents.'
      ],
      hints: [
        'Here\'s a dataset you can use to build this: https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart'
  },
  {
    name: 'Visualize Data with a Scatterplot Graph',
    category: 'Data Visualization Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/ONxvaa/.',
    requirements: {
      stories: [
        'I can see performance time visualized in a scatterplot graph.',
        'I can mouse over a plot to see a tooltip with additional details.'
      ],
      hints: [
        'Here\'s a dataset you can use to build this: https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-scatterplot-graph'
  },
  {
    name: 'Visualize Data with a Heat Map',
    category: 'Data Visualization Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/aNLYPp/.',
    requirements: {
      stories: [
        'I can view a heat map with data represented both on the Y and X axis.',
        'Each cell is colored based on its relationship to other data.',
        'I can mouse over a cell in the heat map to get more exact information.'
      ],
      hints: [
        'Here\'s a dataset you can use to build this: https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map'
  },
  {
    name: 'Show National Contiguity with a Force Directed Graph',
    category: 'Data Visualization Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/xVopBo.',
    requirements: {
      stories: [
        'I can see a Force-directed Graph that shows which countries share borders.',
        'I can see each country\'s flag on its node.',
      ],
      hints: [
        'Here\'s a dataset you can use to build this: https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json',
        'You can create a spritesheet of national flags at https://www.flag-sprites.com.'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/show-national-contiguity-with-a-force-directed-graph'
  },
  {
    name: 'Map Data Across the Globe',
    category: 'Data Visualization Projects',
    certificate: 'Data Visualization Certification',
    objective: 'Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/mVEJag.',
    requirements: {
      stories: [
        'I can see where all Meteorites landed on a world map.',
        'I can tell the relative size of the meteorite, just by looking at the way it\'s represented on the map.',
        'I can mouse over the meteorite\'s data point for additional data.'
      ],
      hints: [
        'Here\'s a dataset you can use to build this: https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/map-data-across-the-globe'
  },
  // back end development certification
  {
    name: 'Timestamp Microservice',
    category: 'API Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: https://timestamp-ms.herokuapp.com/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).',
        'If it does, it returns both the Unix timestamp and the natural language form of that date.',
        'If it does not contain a date or Unix timestamp, it returns null for those properties.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/timestamp-microservice'
  },
  {
    name: 'Request Header Parser Microservice',
    category: 'API Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: https://cryptic-ridge-9197.herokuapp.com/api/whoami/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'I can get the IP address, language and operating system for my browser.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/request-header-parser-microservice'
  },
  {
    name: 'URL Shortener Microservice',
    category: 'API Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: https://little-url.herokuapp.com/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.',
        'If I pass an invalid URL that doesn\'t follow the valid http://www.example.com format, the JSON response will contain an error instead.',
        'When I visit that shortened URL, it will redirect me to my original link.'
      ],
      hints: [
        'Checkout this wiki article for tips on integrating MongoDB on Heroku: https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Using-MongoDB-And-Deploying-To-Heroku/'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/url-shortener-microservice'
  },
  {
    name: 'Image Search Abstraction Layer',
    category: 'API Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that allows you to search for images like this: https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10 and browse recent search queries like this: https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/. Then deploy it to Heroku.',
    requirements: {
      stories: [
        'I can get the image URLs, alt text and page urls for a set of images relating to a given search string.',
        'I can paginate through the responses by adding a ?offset=2 parameter to the URL.',
        'I can get a list of the most recently submitted search strings.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/image-search-abstraction-layer'
  },
  {
    name: 'File Metadata Microservice',
    category: 'API Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: https://aryanj-file-size.herokuapp.com/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'I can submit a FormData object that includes a file upload.',
        'When I submit something, I will receive the file size in bytes within the JSON response'
      ],
      hints: [
        'You may want to use this package: https://www.npmjs.com/package/multer'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/file-metadata-microservice'
  },
  {
    name: 'Build a Voting App',
    category: 'Dynamic Web Application Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: https://fcc-voting-arthow4n.herokuapp.com/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'As an authenticated user, I can keep my polls and come back later to access them.',
        'As an authenticated user, I can share my polls with my friends.',
        'As an authenticated user, I can see the aggregate results of my polls.',
        'As an authenticated user, I can delete polls that I decide I don\'t want anymore.',
        'As an authenticated user, I can create a poll with any number of possible items.',
        'As an unauthenticated or authenticated user, I can see and vote on everyone\'s polls.',
        'As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)',
        'As an authenticated user, if I don\'t like the options on a poll, I can create a new option.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-voting-app'
  },
  {
    name: 'Build a Nightlife Coordination App',
    category: 'Dynamic Web Application Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: http://whatsgoinontonight.herokuapp.com/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'As an unauthenticated user, I can view all bars in my area.',
        'As an authenticated user, I can add myself to a bar to indicate I am going there tonight.',
        'As an authenticated user, I can remove myself from a bar if I no longer want to go there.',
        'As an unauthenticated user, when I login I should not have to search again.'
      ],
      hints: [
        'Try using the Yelp API to find venues in the cities your users search for. If you use Yelp\'s API, be sure to mention so in your app.'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-nightlife-coordination-app'
  },
  {
    name: 'Chart the Stock Market',
    category: 'Dynamic Web Application Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: http://watchstocks.herokuapp.com/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'I can view a graph displaying the recent trend lines for each added stock.',
        'I can add new stocks by their symbol name.',
        'I can remove stocks.',
        'I can see changes in real-time when any other user adds or removes a stock. For this you will need to use Web Sockets.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/chart-the-stock-market'
  },
  {
    name: 'Manage a Book Trading Club',
    category: 'Dynamic Web Application Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: http://bookjump.herokuapp.com/ and deploy it to Heroku.',
    requirements: {
      stories: [
        'I can view all books posted by every user.',
        'I can add a new book.',
        'I can update my settings to store my full name, city, and state.',
        'I can propose a trade and wait for the other user to accept the trade.'
      ],
      hints: [],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/manage-a-book-trading-club'
  },
  {
    name: 'Build a Pinterest Clone',
    category: 'Dynamic Web Application Projects',
    certificate: 'Back End Development Certification',
    objective: 'Build a full stack JavaScript app that is functionally similar to this: https://midnight-dust.hyperdev.space and deploy it to Heroku.',
    requirements: {
      stories: [
        'As an unauthenticated user, I can login with Twitter.',
        'As an authenticated user, I can link to images.',
        'As an authenticated user, I can delete images that I\'ve linked to.',
        'As an authenticated user, I can see a Pinterest-style wall of all the images I\'ve linked to.',
        'As an unauthenticated user, I can browse other users\' walls of images.',
        'As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image. (can use jQuery broken image detection)'
      ],
      hints: [
        'Masonry.js is a library that allows for Pinterest-style image grids.'
      ],
      notes: [],
      updates: []
    },
    link: 'https://www.freecodecamp.com/challenges/build-a-pinterest-clone '
  }
];
