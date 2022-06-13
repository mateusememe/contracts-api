import db from '../config/database.js';

export const getAuthors = (result) => { 
  // Pegar todos os autores
  db.query("SELECT * FROM autor", (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else{
      result(null, results);
    }
  });
}

export const getAuthorById = (id, result) => { 
  // Pegar um os autor de id especifico
  db.query("SELECT * FROM autor WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const insertAuthor = (data, result) => { 
  // Inserir um autor
  db.query("INSERT INTO autor SET ?", [data], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results);
  });
}

export const updateAuthorById = (data, id, result) => { 
  // Atualizar um autor de id especifico
  let sql = "UPDATE autor SET nome = ?, data_nascimento = ?, sexo = ?, estado_civil = ?, formacao = ?, rg = ?, rg_emissor = ?, cpf = ?, profissao = ?, lattes = ?, nacionalidade = ?, matricula = ?, funcionario_cod WHERE cod = ?";
  db.query(sql, [data.nome, data.data_nascimento, data.sexo, data.estado_civil, data.formacao, data.rg, data.rg_emissor, data.cpf, data.profissao, id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}

export const deleteAuthorById = (id, result) => { 
  // Remover um autor de id especifico
  db.query("DELETE FROM autor WHERE cod = ?", [id], (err, results) => {
    if(err){
      console.error(`### ERROR => "${err}"`);
      result(err, null);
    }
    else
      result(null, results[0]);
  });
}