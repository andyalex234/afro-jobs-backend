const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Create a company
router.post('/', companyController.createCompany);

// Get all companies
router.get('/', companyController.getAllCompanies);

// Get a company by ID
router.get('/:id', companyController.getCompanyById);

// Update a company by ID
router.put('/:id', companyController.updateCompanyById);

// Delete a company by ID
router.delete('/:id', companyController.deleteCompanyById);

module.exports = router;
