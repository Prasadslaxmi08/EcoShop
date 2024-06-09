const ReviewsRecommendations = require('../models/ReviewsRecommendations');

// Get all reviews and recommendations
exports.getAllReviewsRecommendations = async (req, res) => {
  try {
    const reviewsRecommendations = await ReviewsRecommendations.find();
    res.json(reviewsRecommendations);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create a new reviews and recommendations entry
exports.createReviewsRecommendations = async (req, res) => {
  try {
    const newReviewsRecommendations = new ReviewsRecommendations(req.body);
    const reviewsRecommendations = await newReviewsRecommendations.save();
    res.json(reviewsRecommendations);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get a reviews and recommendations entry by ID
exports.getReviewsRecommendationsById = async (req, res) => {
  try {
    const reviewsRecommendations = await ReviewsRecommendations.findById(req.params.id);
    if (!reviewsRecommendations) {
      return res.status(404).json({ msg: 'Reviews and recommendations not found' });
    }
    res.json(reviewsRecommendations);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a reviews and recommendations entry
exports.updateReviewsRecommendations = async (req, res) => {
  try {
    const updatedReviewsRecommendations = await ReviewsRecommendations.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReviewsRecommendations) {
      return res.status(404).json({ msg: 'Reviews and recommendations not found' });
    }
    res.json(updatedReviewsRecommendations);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a reviews and recommendations entry
exports.deleteReviewsRecommendations = async (req, res) => {
  try {
    const deletedReviewsRecommendations = await ReviewsRecommendations.findByIdAndDelete(req.params.id);
    if (!deletedReviewsRecommendations) {
      return res.status(404).json({ msg: 'Reviews and recommendations not found' });
    }
    res.json({ msg: 'Reviews and recommendations deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
