import { showAuthors, createAuthor, showAuthorsById, deleteAuthor, updateAuthor } from '../controllers/Author.js';
import { showCourses, createCourse, showCoursesById, deleteCourse, updateCourse } from '../controllers/Course.js';
import { showEmployees, createEmployee, showEmployeesById, deleteEmployee, updateEmployee } from '../controllers/Employee.js';
import { showSubjects, createSubject, showSubjectsById, deleteSubject, updateSubject } from '../controllers/Subject.js';
import express from 'express'
// init express router
const router = express.Router();


/* ########### Authors Section #############*/

// Get All Authors 
router.get('/authors', showAuthors);

// Get Single Author
router.get('/authors/:id', showAuthorsById);

// Create Single Author
router.post('/authors', createAuthor);

// Update Single Author
router.put('/authors/:id', updateAuthor);

// Update Single Author
router.delete('/authors/:id', deleteAuthor);


/* ########### Courses Section #############*/

// Get All Courses 
router.get('/courses', showCourses);

// Get Single Course
router.get('/courses/:id', showCoursesById);

// Create Single Course
router.post('/courses', createCourse);

// Update Single Course
router.put('/courses/:id', updateCourse);

// Update Single Course
router.delete('/courses/:id', deleteCourse);


/* ########### Employees Section #############*/

// Get All Employees 
router.get('/employees', showEmployees);

// Get Single Employee
router.get('/employees/:id', showEmployeesById);

// Create Single Employee
router.post('/employees', createEmployee);

// Update Single Employee
router.put('/employees/:id', updateEmployee);

// Update Single Employee
router.delete('/employees/:id', deleteEmployee);


/* ########### Subjects Section #############*/

// Get All Subjects 
router.get('/subjects', showSubjects);

// Get Single Subject
router.get('/subjects/:id', showSubjectsById);

// Create Single Subject
router.post('/subjects', createSubject);

// Update Single Subject
router.put('/subjects/:id', updateSubject);

// Update Single Subject
router.delete('/subjects/:id', deleteSubject);

export default router;