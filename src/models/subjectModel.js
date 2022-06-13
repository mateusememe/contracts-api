const db = require('../config/database');

export const getSubjects = (result) => { 
  // Pegar todos os disciplinas
  db.query("SELECT * FROM disciplina", (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results);
  });
}

export const getSubjectById = (id, result) => { 
  // Pegar uma disciplina de id especifico
  db.query("SELECT * FROM disciplina WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const insertSubject = (data, result) => { 
  // Inserir um disciplina
  db.query("INSERT INTO disciplina SET ?", [data], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results);
  });
}

export const updateSubjectById = (data, id, result) => { 
  // Atualizar uma disciplina de id especifico
  let sql = "UPDATE disciplina SET nome = ?, ano = ?, termo = ?, cargahoraria = ?, status = ?, curso_cod = ? WHERE cod = ?";
  db.query(sql, [data.nome, data.ano, data.termo, data.cargahoraria, data.status, data.curso_cod, id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const deleteSubjectById = (id, result) => { 
  // Remover uma disciplina de id especifico
  db.query("DELETE FROM disciplina WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}