const Vendor = require('../models/Vendor');

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create a new vendor
exports.createVendor = async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    const vendor = await newVendor.save();
    res.json(vendor);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get a vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ msg: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a vendor
exports.updateVendor = async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVendor) {
      return res.status(404).json({ msg: 'Vendor not found' });
    }
    res.json(updatedVendor);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a vendor
exports.deleteVendor = async (req, res) => {
  try {
    const deletedVendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!deletedVendor) {
      return res.status(404).json({ msg: 'Vendor not found' });
    }
    res.json({ msg: 'Vendor deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
