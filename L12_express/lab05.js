var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});

app.get('/:name/:id', function(req, res){
    res.send('/:name/:id : ' + req.params.id + ' and name: ' + req.params.name);
 });

 app.get('/things/:name/:id', function(req, res) {
    res.send('/things/:name/:id: ' + req.params.id + ' and name: ' + req.params.name);
 });

app.listen(3000, function(err){ 
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ 3000) 
    else 
        console.log("Error occurred, server can't start", err); 
    } 
);