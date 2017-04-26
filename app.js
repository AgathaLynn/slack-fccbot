const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


app.post("/test", function(req, res){
    console.log(req.body);
    res.send("test is working");
})
