import mysql from 'mysql2';

const db = mysql.createPool({
  host           : 'localhost',
  port           : 3307,
  user           : 'root',
  password       : 'root',
  database       : 'gecesys'
})

export default db;