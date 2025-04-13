const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
connection.getConnection()
    .then((conn) => {
      console.log('Conectado com sucesso ao MySQL database');
      conn.release();
    })
    .catch((err) => {
      console.error('Erro ao conectar no MySQL database:', err);
    });

module.exports = connection;