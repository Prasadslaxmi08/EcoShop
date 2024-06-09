const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

// Define routes
router.get('/', vendorController.getAllVendors);
router.post('/', vendorController.createVendor);
router.get('/:id', vendorController.getVendorById);
router.put('/:id', vendorController.updateVendor);
router.delete('/:id', vendorController.deleteVendor);

module.exports = router;
