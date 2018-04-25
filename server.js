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



app.post("/api/activeReservations", function(req, res) {
    
    var newRes = req.body;

    if (activeReservations.length <= 4) {    

    activeReservations.push(newRes);

    res.json(newRes);
    } else {

        waitList.push(newRes);

        res.json(newRes);
    }

});


app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});
