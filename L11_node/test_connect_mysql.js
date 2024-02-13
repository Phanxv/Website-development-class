var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Delta_006",
    database : "classicmodels"
});

con.connect(function(err) { 
    if (err) throw err; 
        console.log("Connected!");

        let sql ="select * from employees";

        con.query (sql, function (err, result) {
            if (err) throw err;
            for(e of result){
                console.log(e.firstName + "\t\t" + e.lastName);
            }
        });
 }); 