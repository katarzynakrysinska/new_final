const express = require('express');
const router = express.Router();
const { getOrders, addOrders } = require('../controller/orderControllers');

router.get('/orders', getOrders);
router.post('/orders', addOrders);


module.exports = router;