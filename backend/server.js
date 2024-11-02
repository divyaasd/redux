const express = require('express');
const connectDB = require('./config/db');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();
// server.js or app.js
const express = require('express');
const ordersRoutes = require('./routes/orders');


app.use(cors());
app.use(express.json());

app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

