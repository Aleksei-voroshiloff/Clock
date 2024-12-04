/* eslint-disable consistent-return */
const express = require('express');
const { Clock } = require('../../db/models/');
const clockRouter = express.Router();
const fs = require('fs/promises');
const sharp = require('sharp');
const upload = require('../middlewares/multer');
const { verifyAccessToken } = require('../middlewares/veryfyTokens');

clockRouter
  .get('/', async (req, res) => {
    try {
      const clocks = await Clock.findAll();
      res.json(clocks);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера' });
      console.log(error);
    }
  })
  .post(verifyAccessToken, upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Нет файла' });
      }
      const name = `${Date.now()}.webp`;
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      await fs.writeFile(`./public/img/${name}`, outputBuffer);

      const { title, description } = req.body;
      const userId = res.locals.user.id;

      const newClock = await Clock.create({ title, description, img: name, userId });
      res.json(newClock);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
module.exports = clockRouter;