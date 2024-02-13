var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123@#456",
  database: "classicmodels"
});
con.connect(function(err) { 
    if (err) throw err; 
     console.log("Connected!");
     let sql ="select firstName, lastName, email from employees";
     con.query (sql, function (err, result) {
          if (err) throw err;
          console.log(result);
      });
 }); 