const LoyaltyProgram = require('../models/LoyaltyProgram');

// Get all loyalty programs
exports.getAllLoyaltyPrograms = async (req, res) => {
  try {
    const loyaltyPrograms = await LoyaltyProgram.find();
    res.json(loyaltyPrograms);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create a new loyalty program
exports.createLoyaltyProgram = async (req, res) => {
  try {
    const newLoyaltyProgram = new LoyaltyProgram(req.body);
    const loyaltyProgram = await newLoyaltyProgram.save();
    res.json(loyaltyProgram);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get a loyalty program by ID
exports.getLoyaltyProgramById = async (req, res) => {
  try {
    const loyaltyProgram = await LoyaltyProgram.findById(req.params.id);
    if (!loyaltyProgram) {
      return res.status(404).json({ msg: 'Loyalty program not found' });
    }
    res.json(loyaltyProgram);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a loyalty program
exports.updateLoyaltyProgram = async (req, res) => {
  try {
    const updatedLoyaltyProgram = await LoyaltyProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLoyaltyProgram) {
      return res.status(404).json({ msg: 'Loyalty program not found' });
    }
    res.json(updatedLoyaltyProgram);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a loyalty program
exports.deleteLoyaltyProgram = async (req, res) => {
  try {
    const deletedLoyaltyProgram = await LoyaltyProgram.findByIdAndDelete(req.params.id);
    if (!deletedLoyaltyProgram) {
      return res.status(404).json({ msg: 'Loyalty program not found' });
    }
    res.json({ msg: 'Loyalty program deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
