'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      clientEmail: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      clientPhone: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      clockId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clocks',
          key: 'id',
        },
        onDelete: 'CASCADE',
        unique: true,
      },
      imgId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clocks',
          key: 'id',
        },
        onDelete: 'CASCADE',
        unique: true,
      },
      description: {
        type: Sequelize.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  },
};
