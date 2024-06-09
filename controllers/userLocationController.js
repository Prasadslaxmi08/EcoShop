const UserLocation = require('../models/UserLocation');

// Get all user locations
exports.getAllUserLocations = async (req, res) => {
  try {
    const userLocations = await UserLocation.find();
    res.json(userLocations);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create a new user location
exports.createUserLocation = async (req, res) => {
  try {
    const newUserLocation = new UserLocation(req.body);
    const userLocation = await newUserLocation.save();
    res.json(userLocation);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get a user location by ID
exports.getUserLocationById = async (req, res) => {
  try {
    const userLocation = await UserLocation.findById(req.params.id);
    if (!userLocation) {
      return res.status(404).json({ msg: 'User location not found' });
    }
    res.json(userLocation);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a user location
exports.updateUserLocation = async (req, res) => {
  try {
    const updatedUserLocation = await UserLocation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUserLocation) {
      return res.status(404).json({ msg: 'User location not found' });
    }
    res.json(updatedUserLocation);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a user location
exports.deleteUserLocation = async (req, res) => {
  try {
    const deletedUserLocation = await UserLocation.findByIdAndDelete(req.params.id);
    if (!deletedUserLocation) {
      return res.status(404).json({ msg: 'User location not found' });
    }
    res.json({ msg: 'User location deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
