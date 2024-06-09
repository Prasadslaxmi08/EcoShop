const express = require('express');
const router = express.Router();
const userLocationController = require('../controllers/userLocationController');

// Define routes
router.get('/', userLocationController.getAllUserLocations);
router.post('/', userLocationController.createUserLocation);
router.get('/:id', userLocationController.getUserLocationById);
router.put('/:id', userLocationController.updateUserLocation);
router.delete('/:id', userLocationController.deleteUserLocation);

module.exports = router;
