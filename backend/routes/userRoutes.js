const express = require('express');
const { createUser } = require('../controllers/userController');
const router = express.Router();

// Define POST route for creating a user
router.route("/user/new").post(createUser);
module.exports = router;
