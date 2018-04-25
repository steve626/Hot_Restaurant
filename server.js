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


app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables/active", function(req, res) {
    return res.json(activeReservations);
});

app.get("/api/tables/waiting", function(req, res) {
    return res.json(waitList);
});

