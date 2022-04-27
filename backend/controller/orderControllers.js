const Order = require('../models/Order');


const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const addOrders = async (req, res) => {
  try {
    const {
      cart,
      totalPrice,
      name,
      surname,
      address,
      email,
    } = req.body;
         
    const newOrder = new Order({
      cart: cart,
      totalPrice,
      name: name,
      surname: surname,
      address: address,
      email: email,
    });
    const finalOrder = await newOrder.save();
    res.json(finalOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getOrders, 
  addOrders,
};