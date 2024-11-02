// routes/orders.js
const express = require('express');
const router = express.Router();
const { fetchOrders, createOrder } = require('../controllers/orderController');

// GET /api/orders - Fetch orders
router.get('/', fetchOrders);

// POST /api/orders - Create order
router.post('/', createOrder);

module.exports = router;
