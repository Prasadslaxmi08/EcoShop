const express = require('express');
const router = express.Router();
const loyaltyProgramController = require('../controllers/loyaltyProgramController');

// Define routes
router.get('/', loyaltyProgramController.getAllLoyaltyPrograms);
router.post('/', loyaltyProgramController.createLoyaltyProgram);
router.get('/:id', loyaltyProgramController.getLoyaltyProgramById);
router.put('/:id', loyaltyProgramController.updateLoyaltyProgram);
router.delete('/:id', loyaltyProgramController.deleteLoyaltyProgram);

module.exports = router;
