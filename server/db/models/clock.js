'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clock extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'clockId' });
    }
  }
  Clock.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Clock',
    },
  );
  return Clock;
};
