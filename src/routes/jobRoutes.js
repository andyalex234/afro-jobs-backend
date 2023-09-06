const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a job
router.post('/', authMiddleware.authenticateToken, jobController.createJob);

// Get all jobs
router.get('/', jobController.getAllJobs);

// Get a job by ID
router.get('/:id', jobController.getJobById);

// Update a job by ID
router.put('/:id', jobController.updateJobById);

// Delete a job by ID
router.delete('/:id', jobController.deleteJobById);

module.exports = router;
