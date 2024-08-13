import { Sequelize } from "sequelize";

const db = new Sequelize("auth_dbPool", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
