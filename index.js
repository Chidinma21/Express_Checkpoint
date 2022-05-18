var express = require("express");
// import bodyParser from "body-parser";
var current = new Date();
const app = express();

// set view engine to EJS
app.set("view engine", "ejs");

// set the views folder
app.set("views", "./views");

const myLogger = function (req, res, next) {
  console.log("A new request received at " + current.toLocaleString());
};

app.get("/", (req, res) => {
  res.render("Home");
  myLogger();
});

app.get("/contactUs", (req, res) => {
  res.render("ContactUs");
  myLogger();
});

app.get("/ourServices", (req, res) => {
  res.render("OurServices");
  myLogger();
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
