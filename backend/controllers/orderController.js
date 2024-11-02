const User = require('../models/User');
const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  const { items, totalAmount } = req.body;

  try {
    const order = new Order({
      userId: req.user.id,
      items,
      totalAmount
    });

    await order.save();

    const user = await User.findById(req.user.id);
    user.orders.push(order._id);
    await user.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Get user's orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};
