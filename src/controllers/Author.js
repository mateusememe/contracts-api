import { getAuthors, getAuthorById, insertAuthor, updateAuthorById, deleteAuthorById } from "../models/authorModel";

export const showAuthors = (req, res) => {
  getAuthors((err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const showAuthorsById = (req, res) => {
  getAuthorsById(req.params.id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const createAuthor = (req, res) => {
  const data = req.body;
  insertAuthor(data, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const updateAuthor = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateAuthorById(data, id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const deleteAuthor = (req, res) => {
  const id = req.params.id;
  deleteAuthorById(id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

