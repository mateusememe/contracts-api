const db = require('../config/database');

export const getEmployees = (result) => { 
  // Pegar todos os funcionarios
  db.query("SELECT * FROM funcionario", (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results);
  });
}

export const getEmployeeById = (id, result) => { 
  // Pegar um funcionario de id especifico
  db.query("SELECT * FROM funcionario WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const insertEmployee = (data, result) => { 
  // Inserir um funcionario
  db.query("INSERT INTO funcionario SET ?", [data], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results);
  });
}

export const updateEmployeeById = (data, id, result) => { 
  // Atualizar um funcionario de id especifico
  let sql = "UPDATE funcionario SET nome = ?, email = ?, login = ?, senha = ?, status = ?, permissao = ?, data = ? WHERE cod = ?";
  db.query(sql, [data.nome, data.email, data.login, data.senha, data.status, data.permissao, data.data, id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const deleteEmployeeById = (id, result) => { 
  // Remover um funcionario de id especifico
  db.query("DELETE FROM funcionario WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}