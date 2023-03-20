const { Sequelize } = require("sequelize");
import * as pg from "pg";

module.exports = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
