import ViteExpress from "vite-express";
import mysql from "mysql2/promise";

const { env } = await ViteExpress.getViteConfig();
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "sakila",
  user: "root",
  password: env.VITE_MYSQLPASSWORD,
  //   connectionLimit: 5,
});

export default pool;

// // This explicitly opens a single connection and uses it all the time.
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   database: "sakila",
//   user: "fms",
//   password: "fmspass", // import.meta.env.VITE_MYSQLPASSWORD,
// });

// connection.connect((err) => {
//   try {
//     if (err) {
//       throw err;
//     }

//     console.log("Connected to SQL");
//   } catch (error) {
//     console.log(`can't connect to SQL: ${error}`);
//   }
// });
//
// [ ... Do some work with the connection ...]
//
// // Don't forget to release the single connection when done.
// connection.end();
// export default connection;
