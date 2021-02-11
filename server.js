//test node.js
// console.log("hello")

//1-import express
const express = require("express");

//2- init express
const app = express();

function logger(req, res, next) {
  // console.log("method:", req.method);
  // console.log("path:", req.url);
  console.table({ method: req.method, path: req.url });
  if (10<5) {
    next();
  } else {
    res.send("Oups, the request is blocked");
  }
}

app.use(logger)

//3- create your endpoints
app.get("/", (req, res) => {
  res.send("Welcome to WS-Express");
});


// 5- Get the html files using sendFile

// app.get("/", (req, res) => {
// res.sendFile("/public/index.html"); //==> error: __ dirname is missing
// res.sendFile(__dirname + "/public/index.html");
// res.sendFile(__dirname + "/public/contact.html");
// });

// app.use(express.static(__dirname + "/public"));


//4- run server
const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port http://localhost:${port}`);
});
