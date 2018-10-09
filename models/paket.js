'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paket = sequelize.define('Paket', {
    Userid: DataTypes.INTEGER,
    level: DataTypes.STRING,
    maxBid: DataTypes.INTEGER
  }, {});
  Paket.associate = function(models) {
    // associations can be defined here
  };
  return Paket;
};