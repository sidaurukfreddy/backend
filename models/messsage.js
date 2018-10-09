'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messsage = sequelize.define('Messsage', {
    SenderId: DataTypes.INTEGER,
    ReceiverId: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {});
  Messsage.associate = function(models) {
    // associations can be defined here
  };
  return Messsage;
};