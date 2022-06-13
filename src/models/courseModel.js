const db = require('../config/database');

export const getCourses = (result) => { 
  // Pegar todos os cursos
  db.query("SELECT * FROM curso", (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results);
  });
}

export const getCourseById = (id, result) => { 
  // Pegar um os curso de id especifico
  db.query("SELECT * FROM curso WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const insertCourse = (data, result) => { 
  // Inserir um curso
  db.query("INSERT INTO curso SET ?", [data], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results);
  });
}

export const updateCourseById = (data, id, result) => { 
  // Atualizar um curso de id especifico
  let sql = "UPDATE curso SET nome = ?, centro_custo = ?, nivel_curso_cod = ? WHERE cod = ?";
  db.query(sql, [data.nome, data.centro_custo, data.nivel_curso_cod, id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const deleteCourseById = (id, result) => { 
  // Remover um curso de id especifico
  db.query("DELETE FROM curso WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}