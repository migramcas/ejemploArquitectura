import { createPool } from "mysql2/promise"; //gestiona mejor la conexion que  createConnection
import dotenv from "dotenv";
dotenv.config();

export default createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  decimalNumbers: true, //cuando se retorne un numero como 200.00 se retorna  como un numero y no como string
});
