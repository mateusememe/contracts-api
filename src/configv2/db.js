const mysql = require('mysql2/promise');

module.exports = new 
class Database {
  constructor() {
    this.err = "";
  }
  async conecta() {
    const config = {
      connectionLimit: 10,
      host           : 'localhost',
      port           : 3306,
      user           : 'root',
      password       : 'root',
      database       : 'gecesys',
    }
    try {
        this.connection = await new mysql.createPool(config);
        return true;
    }
    catch (ex) {
        return false;
    }
  }
  //para SELECT
  async consulta(sql, values) {
    try {
        const [rows, fields] = await this.connection.execute(sql, values);
        return {
            status: true,
            data: rows
        }
    }
    catch (ex) {
        return {
            status: false,
            err: ex.code,
            message: ex.message,
            data: []
        };
    }
  }
  //para insert, update e delete
  async manipula(sql, values) {
    try {
        const [rows, fields] = await this.connection.execute(sql, values);
        if (rows.affectedRows > 0) //qtde de linhas afetadas
            return {
                status: true,
                lastId: rows.insertId
                //data: rows
            }
        return {
            status: false,
            err: "NOT_ROWS"
        };
    }
    catch (ex) {
        return {
            status: false,
            err: ex.code,
            message: ex.message
        }
    }
  }
}