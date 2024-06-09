const express = require('express');
const router = express.Router();
const reviewsRecommendationsController = require('../controllers/reviewsRecommendationsController');

// Define routes
router.get('/', reviewsRecommendationsController.getAllReviewsRecommendations);
router.post('/', reviewsRecommendationsController.createReviewsRecommendations);
router.get('/:id', reviewsRecommendationsController.getReviewsRecommendationsById);
router.put('/:id', reviewsRecommendationsController.updateReviewsRecommendations);
router.delete('/:id', reviewsRecommendationsController.deleteReviewsRecommendations);

module.exports = router;
