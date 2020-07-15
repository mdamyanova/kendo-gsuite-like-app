var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/contacts", function (req, res) {
  res.sendFile(path.join(__dirname + "/contacts.html"));
});

app.get("/calendar", function (req, res) {
  res.sendFile(path.join(__dirname + "/calendar.html"));
});

app.listen(8000);

console.log("Running at Port 8000");
