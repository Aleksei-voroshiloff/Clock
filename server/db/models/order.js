'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Clock }) {
      this.belongsTo(Clock, { foreignKey: 'clockId' });
    }
  }
  Order.init(
    {
      clientName: DataTypes.STRING,
      clientEmail: DataTypes.STRING,
      clientPhone: DataTypes.STRING,
      clockId: DataTypes.INTEGER,
      imgId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
