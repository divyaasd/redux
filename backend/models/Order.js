const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
    totalAmount: Number,
    status: { type: String, default: 'Pending' }
  });
  module.exports = mongoose.model('Order', OrderSchema);
  