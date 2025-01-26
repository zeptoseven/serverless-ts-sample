import { Sequelize } from "sequelize-typescript";
import mysql2 from 'mysql2';

const sequelize = new Sequelize({
    dialect: "mysql",
    dialectModule: mysql2,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "3306"),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

export default sequelize;
