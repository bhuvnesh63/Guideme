const mongoose = require('mongoose');

// Create User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Users', userSchema);
