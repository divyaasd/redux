const express = require('express');
const { register, login, getUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);                // Register a new user
router.post('/login', login);                      // Log in a user
router.get('/me', auth, getUser);                  // Get logged-in user data

module.exports = router;
