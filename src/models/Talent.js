const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Talent', talentSchema);
