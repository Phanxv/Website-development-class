var express = require('express');
var app = express();

 app.get('/regex/:id([0-9]{5})', function(req, res) {
    res.send('/regex/:id: ' + req.params.id);
 });

 app.get('*', function(req, res) {
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(3000, function(err){ 
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ 3000) 
    else 
        console.log("Error occurred, server can't start", err); 
    } 
);