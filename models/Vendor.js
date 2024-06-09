const mongoose = require('mongoose');

const ContactInfoSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  local_location: {
    type: String,
    required: true
  },
  products: {
    type: [String],
    required: true
  },
  contact_info: {
    type: ContactInfoSchema,
    required: true
  }
});

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;
