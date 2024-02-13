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
     let sql ="insert into employees values (1703, 'John', 'Smith', 'x2313', 'john@gmail.com', 4, 1056, 'Sales Rep')";
     con.query (sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
      });
 }); 