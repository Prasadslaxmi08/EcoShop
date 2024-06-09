const mongoose = require('mongoose');

const LocalLocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brands: {
    type: [String],
    required: true
  }
});

const UserLocationSchema = new mongoose.Schema({
  user_location: {
    type: String,
    required: true
  },
  local_locations: {
    type: [LocalLocationSchema],
    required: true
  }
});

const UserLocation = mongoose.model('UserLocation', UserLocationSchema);

module.exports = UserLocation;
