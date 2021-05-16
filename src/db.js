// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'dbuser',
//   password : 's3kreee7'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

const mysql = require("mysql");
const { promisify } = require("util");

const { database, localDatabase } = require("./keys");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST")
      console.error("Database connection was closed.");
    if (err.code === "ER_CON_COUNT_ERROR")
      console.error("Database has to many connections");
    if (err.code === "ECONNREFUSED")
      console.error("Database connection was refused");
  }

  if (connection) connection.release();
  
  console.log("DB is Connected");

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;
