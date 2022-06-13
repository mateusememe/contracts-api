import { getSubjects, getSubjectById, insertSubject, updateSubjectById, deleteSubjectById } from "../models/subjectModel";


export const showSubjects = (req, res) => {
  getSubjects((err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const showSubjectsById = (req, res) => {
  getSubjectById(req.params.id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const createSubject = (req, res) => {
  const data = req.body;
  insertSubject(data, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const updateSubject = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateSubjectById(data, id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const deleteSubject = (req, res) => {
  const id = req.params.id;
  deleteSubjectById(id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

