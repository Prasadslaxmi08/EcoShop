const mongoose = require('mongoose');

const EnvironmentalImpactSchema = new mongoose.Schema({
  carbon_footprint: {
    type: String,
    required: true
  },
  water_usage: {
    type: String,
    required: true
  }
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  vendor: {
    type: String,
    required: true
  },
  local_location: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  environmental_impact: {
    type: EnvironmentalImpactSchema,
    required: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
