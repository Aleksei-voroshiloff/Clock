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



module.exports = orderRouter;
