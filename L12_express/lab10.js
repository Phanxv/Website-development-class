const express = require('express'); 
var bodyParser = require('body-parser');
var app = express();
var db = require('./database.js');
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.use('/register', express.static('register'));
app.use('/home', express.static('home'));

app.post('/register', function(req, res){
    let fname = req.body.fname;
    let lname = req.body.lname;
    let age = req.body.age;
    let gender = req.body.gender; 
    let country = req.body.country; 
    let username = req.body.username; 
    let password = req.body.password;

    let sql ="INSERT INTO users (fname, lname, age, gender, country, username, password) ";
    sql += "VALUES ('" + fname + "','" + lname + "'," + age + ",'" + gender + "','" + country +"','" + username + "','"+ password + "')"; 
    db.query (sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows);
        if(result.affectedRows > 0){
            res.redirect('/home');
        }else{
            res.redirect('/register');
        }
    });
 });

 app.get('/data', function(req, res){
    res.set('Content-Type', 'text/html');
    res.status(200);
    let sql ="SELECT employeeNumber,firstName,lastName,extension,email  FROM employees ORDER BY employeeNumber ASC";
    db.query (sql, function (err, result) {
          if (err) throw err;
          let str = "<table>";
          str += "<tr>";
          str += "<th>employeeNumber</th>";
          str += "<th>firstName</th>";
          str += "<th>lastName</th>";
          str += "<th>extension</th>";
          str += "<th>email</th>";
          str += "</tr>";
          for(e of result){
            str += "<tr>";
            str += "<td>" + e.employeeNumber + "</td>";
            str += "<td>" + e.firstName + "</td>";
            str += "<td>" + e.lastName + "</td>";
            str += "<td>" + e.extension + "</td>";
            str += "<td>" + e.email + "</td>";
            str += "</tr>";
          }
          str += "</table>";
          res.send(str);
      });
 });
 
app.listen(3000, function(err){ 
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ 3000) 
    else 
        console.log("Error occurred, server can't start", err); 
    } 
);