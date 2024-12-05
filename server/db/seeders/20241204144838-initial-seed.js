'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Хеширование пароля администратора
    const hashedPassword = await bcrypt.hash('12345', 10);

    // Сиды для таблицы Clock
    await queryInterface.bulkInsert('Clocks', [
      {
        title: 'Часы Omega Seamaster',
        description: 'Элегантные водонепроницаемые часы.',
        img: './img/Снимок1.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Часы Rolex Submariner',
        description: 'Классические часы для дайвинга.',
        img: './img/Снимок2.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Часы Casio G-Shock',
        description: 'Ударопрочные часы для активного отдыха.',
        img: './img/Снимок3.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Сиды для таблицы Admin
    await queryInterface.bulkInsert('Admins', [
      {
        email: 'admin@gmail.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Сиды для таблицы Order
    await queryInterface.bulkInsert('Orders', [
      {
        clientName: 'Иван Иванов',
        clientEmail: 'ivan@gmail.com',
        clientPhone: '+79001234567',
        clockId: 1, // ID часов
        imgId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clientName: 'Петр Петров',
        clientEmail: 'petr@gmail.com',
        clientPhone: '+79007654321',
        clockId: 2,
        imgId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders',  {});
    await queryInterface.bulkDelete('Admins',  {});
    await queryInterface.bulkDelete('Clocks',  {});
  },
};
