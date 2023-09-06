const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Company', companySchema);
