
const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  // Add more fields as needed
});

module.exports = mongoose.model('Internship', internshipSchema);
