const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res){
  console.log(req.body);
  var sum = Number(req.body.num1) + Number(req.body.num2);
  res.send("The sum is " + sum + ".");
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post("/bmicalculator", function(req, res){
  console.log(req.body);
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight / (height * height) * 703;
  var calculation = bmi.toFixed(2);
  res.send("Your BMI is " + calculation + ".");
});

app.listen(port, function(){
  console.log("Starting server on port " + port + "....");
});
