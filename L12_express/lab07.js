var fs = require('fs');
const express = require('express'); 
var fs = require('path');

var app = express();


app.use('/static', express.static('public'));

app.use('/image', express.static('image'));

app.listen(3000, function(err){ 
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ 3000) 
    else 
        console.log("Error occurred, server can't start", err); 
    } 
);

