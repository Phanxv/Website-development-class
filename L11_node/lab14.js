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
     let sql ="DELETE FROM employees WHERE employeeNumber = 1703";
     con.query (sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
      });
 });