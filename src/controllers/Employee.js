import { insertEmployee, deleteEmployeeById, getEmployeeById, getEmployees, updateEmployeeById } from "../models/employeeModel.js";


export const showEmployees = (req, res) => {
  getEmployees((err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const showEmployeesById = (req, res) => {
  getEmployeeById(req.params.id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const createEmployee = (req, res) => {
  const data = req.body;
  insertEmployee(data, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const updateEmployee = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateEmployeeById(data, id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

export const deleteEmployee = (req, res) => {
  const id = req.params.id;
  deleteEmployeeById(id, (err, results) => {
    (err) ? res.send(err) : res.json(results);
  });
}

