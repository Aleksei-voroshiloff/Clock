/* eslint-disable no-console */
const express = require('express');
const { Order } = require('../../db/models/');
const orderRouter = express.Router();


orderRouter.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
    console.log(error);
  }
})
// .post(async (req, res) => {
//   try {
//     const { clientName, clientEmail, clientPhone, imgId } = req.body;
//     const newToy = await Order.create({ clientName, clientEmail, clientPhone, imgId });
//     res.json(newToy);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Ошибка сервера' });
//   }
// });


module.exports = orderRouter;
