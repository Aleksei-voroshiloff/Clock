const app = require('./app');
require('dotenv').config();
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Настройка хранилища для загрузок
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../img'); // Папка для сохранения загруженных файлов
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Уникальное имя файла
  },
});

// Инициализация multer
const upload = multer({ storage });

// Настройка Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'admin@gmail.com',
    pass: '12345',
  },
});

// Обработка POST-запроса для формы
app.post('/api/contact', upload.single('sketch'), (req, res) => {
  const { name, email } = req.body;

  // Отправка подтверждения на почту
  const mailOptions = {
    from: 'admin@gmail.com',
    to: email,
    subject: 'Подтверждение получения вашего заказа',
    text: `Здравствуйте, ${name}!\n\nВаш заказ был успешно получен. Спасибо!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Форма успешно отправлена!');
  });
});

// Запуск сервера

app.listen(PORT, () => {
  console.log('Server has started on port', PORT);
});
