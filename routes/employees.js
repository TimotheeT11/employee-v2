import express from "express";
const employeeRouter = express.Router();

import { employees, addNewEmployee } from "#db/employees";

// GET - localhost:3000/employees
employeeRouter.route("/").get((req, res) => {
  res.send(employees);
});

// POST - localhost:3000/employees
employeeRouter.route("/").post((req, res, next) => {
  if (req.body && req.body.name) {
    res.status(201).json(addNewEmployee(req.body.name));
  } else {
    res.status(400).send("Your request needs a body and name field");
  }
});

// GET - localhost:3000/employees/random
employeeRouter.route("/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

// GET - localhost:3000/employees/?
employeeRouter.route("/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);

  if (!employee) return res.status(404).send("Employee not found");

  res.send(employee);
});

export default employeeRouter;
