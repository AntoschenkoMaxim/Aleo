const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Quest = sequelize.define("quest", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  method: { type: DataTypes.STRING },
  discord: { type: DataTypes.STRING },
  questNumber: { type: DataTypes.INTEGER },
});

module.exports = { Quest };
