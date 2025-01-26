
require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port:process.env.DATABASE_PORT,
  dialect: "mysql",
};