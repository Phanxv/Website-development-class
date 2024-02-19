const express = require('express'); 
var bodyParser = require('body-parser');
var app = express();

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.use('/form', express.static('form'));

app.post('/data', function(req, res){
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.send("<b>Fname : " + req.body.fname + ", Lname : " + req.body.lname + "</b>");
 });

app.listen(3000, function(err){ 
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ 3000) 
    else 
        console.log("Error occurred, server can't start", err); 
    } 
);

