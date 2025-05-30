import express from "express";
const app = express();

import employeeRouter from "#routes/employees";

// body-parsing middleware
app.use(express.json());

// routing middleware
app.use("/employees", employeeRouter);

// catch-all error-handling middleware ???
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!");
});



// routes

// GET - localhost:3000/
app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

export default app;



// GET - localhost:3000/employees
// app.route("/employees").get((req, res) => {
//   res.send(employees);
// });

// GET - localhost:3000/employees/random
// app.route("/employees/random").get((req, res) => {
//   const randomIndex = Math.floor(Math.random() * employees.length);
//   res.send(employees[randomIndex]);
// });

// GET - localhost:3000/employees/?
// app.route("/employees/:id").get((req, res) => {
//   const { id } = req.params;
//   const employee = employees.find((e) => e.id === +id);

//   if (!employee) return res.status(404).send("Employee not found");

//   res.send(employee);
// });
