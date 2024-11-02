const express = require('express');
const { addItemToCart, removeItemFromCart, getCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/add', auth, addItemToCart);          // Add item to cart
router.delete('/remove/:id', auth, removeItemFromCart); // Remove item from cart
router.get('/', auth, getCart);                    // Get user's cart

module.exports = router;
