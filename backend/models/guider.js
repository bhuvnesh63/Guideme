const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  addharNumber: {
    type: Number, // Match the frontend field
    required: true,
  },
  profile: {
    type: String, // To store profile photo
  },
});

module.exports = mongoose.model('Guider', guideSchema);
