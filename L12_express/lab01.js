const express = require('express'); 
const app = express(); 
const PORT = 3000; 

app.listen (PORT, function(err){ 
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 
