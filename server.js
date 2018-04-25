//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var activeReservations = [];
var waitList =[];



app.post("/api/reservations", function(req, res) {
    
    var newRes = req.body;

    reservations.push(newRes);

    res.json(newRes);

});


app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});