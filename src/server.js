const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./src/config/config');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Routes
const jobRoutes = require('./src/routes/jobRoutes');
const internshipRoutes = require('./src/routes/internshipRoutes');
const companyRoutes = require('./src/routes/companyRoutes');
const talentRoutes = require('./src/routes/talentRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use('/api/jobs', jobRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/talents', talentRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
