const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  local_location: {
    type: String,
    required: true
  }
});

const RecommendationSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  recommended_products: {
    type: [String],
    required: true
  }
});

const ReviewsRecommendationsSchema = new mongoose.Schema({
  reviews: {
    type: [ReviewSchema],
    required: true
  },
  recommendations: {
    type: [RecommendationSchema],
    required: true
  }
});

const ReviewsRecommendations = mongoose.model('ReviewsRecommendations', ReviewsRecommendationsSchema);

module.exports = ReviewsRecommendations;
