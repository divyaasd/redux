const User = require('../models/User');
const Product = require('../models/Product');

// Add item to cart
exports.addItemToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const user = await User.findById(req.user.id);
    const existingItem = user.cart.find(item => item.productId.toString() === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart' });
  }
};

// Remove item from cart
exports.removeItemFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(req.user.id);
    user.cart = user.cart.filter(item => item.productId.toString() !== id);

    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing item from cart' });
  }
};

// Get user's cart
exports.getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('cart.productId');
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart' });
  }
};
