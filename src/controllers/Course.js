import { getCourses, getCourseById, insertCourse, updateCourseById, deleteCourseById } from "../models/CourseModel";

export const showCourses = (req, res) => {
  getCourses((err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const showCoursesById = (req, res) => {
  getCourseById(req.params.id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const createCourse = (req, res) => {
  const data = req.body;
  insertCourse(data, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const updateCourse = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCourseById(data, id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const deleteCourse = (req, res) => {
  const id = req.params.id;
  deleteCourseById(id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

