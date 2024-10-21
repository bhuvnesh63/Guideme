  const Users = require('../models/userModel');

  // Create a new user
  const createUser = async (req, res) => {
    try {
      const { name, email, clerkId } = req.body;

      // Validate required fields
      if (!name || !email || !clerkId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create and save the user
      const user = new Users({ name, email, clerkId });
      const savedUser = await user.save();

      // Send back the created user
      res.status(201).json({ data: savedUser });
    } catch (error) {
      console.error('Error creating user:', error);

      // Handle unique constraint error
      if (error.code === 11000) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Handle other server errors
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = { createUser };
