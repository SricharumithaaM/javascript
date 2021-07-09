const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});
s;

app.post("/", function (req, res) {
  var age = Number(req.body.n1) / 15;
  res.send("your age in Dog years is :" + age + " dog years");
});

app.listen(port);
