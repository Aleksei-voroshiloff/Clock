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
      const clocks = await Clock.findAll({order:[['id', 'DESC']]});
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

  clockRouter
  .route('/:id')
  .put(verifyAccessToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description} = req.body;

			const clock = await Clock.findByPk(id);
			if (!clock) return res.status(404).json({ message: 'Часы не найдены' });

			if (clock.userId !== res.locals.user.id) {
				return res.status(403).json({ message: 'Нет доступа' });
			}

      await Clock.update({ title, description}, { where: { id } });
      const upClock = await Clock.findByPk(id);
      res.json(upClock);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .delete(verifyAccessToken, async (req, res) => {
    try {
      const { id } = req.params;

			const clock = await Clock.findByPk(id);
      if (!clock) return res.status(404).json({ message: 'Часы не найдены' });

			if (clock.userId !== res.locals.user.id) {
        return res.status(403).json({ message: 'Нет доступа' });
      }

      await Clock.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const oneClock = await Clock.findOne({ where: { id } });
      res.json(oneClock);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
module.exports = clockRouter;