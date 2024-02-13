var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123@#456",
    database: "classicmodels"
});
con.connect(function (err) {
    if (err) throw err;
    let values = [
        [1704, 'John', 'Smith', 'x2314', 'john1@gmail.com', 4, 1056, 'Sales Rep'],
        [1705, 'John', 'Smith', 'x2315', 'john2@gmail.com', 4, 1056, 'Sales Rep'],
        [1706, 'John', 'Smith', 'x2316', 'john3@gmail.com', 4, 1056, 'Sales Rep'],
        [1707, 'John', 'Smith', 'x2317', 'john4@gmail.com', 4, 1056, 'Sales Rep']
    ];
    let sql = "insert into employees (employeeNumber,lastName,firstName,extension,email,officeCode,reportsTo,jobTitle) values ?";
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});
