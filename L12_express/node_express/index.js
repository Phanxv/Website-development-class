const express = require('express'); 
var bodyParser = require('body-parser');
var app = express();
var db = require('./database.js');
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.use('/home', express.static('home'))
app.use('/register', express.static('register'))

app.get('/review', function(req, res){
    res.set('Content-Type', 'text/html');
    res.status(200);
    let sql ="SELECT productCode, productName, productVendor, quantityInStock, buyPrice FROM products ORDER BY productCode ASC";
    db.query (sql, function (err, result) {
          if (err) throw err;
          let str = "<table>";
          str += "<tr>";
          str += "<th>Product Code</th>";
          str += "<th>Product Name</th>";
          str += "<th>Product Vendor</th>";
          str += "<th>QUantity</th>";
          str += "<th>Buy Price</th>";
          str += "</tr>";
          for(e of result){
            str += "<tr>";
            str += "<td>" + e.productCode + "</td>";
            str += "<td>" + e.productName + "</td>";
            str += "<td>" + e.productVendor + "</td>";
            str += "<td>" + e.quantityInStock + "</td>";
            str += "<td>" + e.buyPrice + "</td>";
            str += "</tr>";
          }
          str += "</table>";
          res.send(str);
      });
 });

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

app.listen(3000, function(err){ 
    if(!err) 
        console.log("Server is Successfully Running, and App is listening on port "+ 3000) 
    else 
        console.log("Error occurred, server can't start", err); 
    } 
);