var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var challengeSchema = new Schema({
  name: String,
  category: String,
  certificate: String,
  objective: String,
  requirements: {
    stories: [],
    hints: [],
    notes: [],
    updates: []
  },
  link: String
});

module.exports = mongoose.model('Challenge', challengeSchema);
