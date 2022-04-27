require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const ordersRoutes = require('./routes/orderRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api', ordersRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));