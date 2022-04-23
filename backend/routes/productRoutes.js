const express = require('express');

const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productControllers');

// GET ALL PRODUCTS FROM DB
router.get('/', getAllProducts);

// GET ONE PRODUCT BY ID FROM DB
router.get('/:id', getProductById);

module.exports = router;