const express = require("express");

const app = express();
// app.get("/", (req, res) => {
//   res.send("Welcome to App.js");
// });

//1- parse the data
app.use(express.json());

let users = [
  { name: "Skander", age: 25, id: 1 },
  { name: "Hichem", age: 35, id: 2 },
  { name: "Rchid", age: 10, id: 3 },
];
console.log(users);

//Get all users
// Get "/api/users"
//@desc: get list of users
app.get("/api/users", (req, res) => {
  users.length < 10
    ? res.status(200).json(users)
    : res.status(400).json({ msg: "users is not find" });
});

//Add new user
//Post "/api/users"
//@desc: Add new user
app.post("/api/users", (req, res) => {
  let newUser = { ...req.body, id: Math.random() };
  users.push(newUser);
  res.status(200).json({
    msg: "User added with success",
    users,
  });
});

//Delete user
//Delete '/api/users/:id'
//@Desc: delete user with id
app.delete("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  users = users.filter((el) => el.id !== id);
  res.status(200).json({
    msg: "User has been deleted",
    users,
  });
});

//Update user
//Update '/api/users/:id'
//@Desc: update user with id
app.put("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  users = users.map((el) => (el.id === id ? { ...el, ...req.body } : el));
  res.status(200).json({
    msg: "User has been updated",
    users,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port http://localhost:${port}`);
});
