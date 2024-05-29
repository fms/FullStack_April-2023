import mysql from "mysql2/promise";
import ViteExpress from 'vite-express';

const { env }:any = await ViteExpress.getViteConfig();
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "sakila",
  user: "root",
  password: env.VITE_MYSQLPASS
});




export default pool;
