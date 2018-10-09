'use strict';
module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    UserConfirm: DataTypes.INTEGER,
    UserAccepted: DataTypes.INTEGER,
    match: DataTypes.INTEGER
  }, {});
  Match.associate = function(models) {
    // associations can be defined here
  };
  return Match;
};