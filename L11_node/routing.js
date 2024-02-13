const http = require('http');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Delta_006",
  database: "classicmodels"
});

http.createServer(function (req, res) {
    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const url = req.url;
    
    if (url === '/home') {
        con.connect(function(err) { 
            if (err) throw err; 
             let sql ="select * from employees";
             res.write('<table>');
             res.write('<tr>');
             res.write('<th>employee Number</th>');
             res.write('<th>last Name</th>');
             res.write('<th>first Name</th>');
             res.write('<th>extension</th>');
             res.write('<th>email</th>');
             res.write('<th>office Code</th>');
             res.write('<th>reports To</th>');
             res.write('<th>job Title</th>');
             res.write('</tr>'); 
             con.query (sql, function (err, result) {
                  if (err) throw err;
                  for (const e of result) {
                    res.write('<tr>');
                    res.write('<td>' + e.employeeNumber + '</td>');
                    res.write('<td>' + e.lastName + '</td>');
                    res.write('<td>' + e.firstName + '</td>');
                    res.write('<td>' + e.extension + '</td>');
                    res.write('<td>' + e.email + '</td>');
                    res.write('<td>' + e.officeCode + '</td>');
                    res.write('<td>' + e.reportsTo + '</td>');
                    res.write('<td>' + e.jobTitle + '</td>');
                    res.write('</tr>');
                  }
                  res.write('</table>');
                  res.end();
              });
        });   
    }
    else if (url === '/contact') {
        con.connect(function(err) { 
            if (err) throw err; 
             let sql ="select * from customers";
             res.write('<table>');
             res.write('<tr>');
             res.write('<th>Customer Number</th>');
             res.write('<th>Customer Name</th>');
             res.write('<th>Phone</th>');
             res.write('<th>City</th>');
             res.write('<th>State</th>');
             res.write('<th>Postal Code</th>');
             res.write('<th>Country</th>');
             res.write('</tr>'); 
             con.query (sql, function (err, result) {
                  if (err) throw err;
                  for (const e of result) {
                    res.write('<tr>');
                    res.write('<td>' + e.customerNumber + '</td>');
                    res.write('<td>' + e.customerName + '</td>');
                    res.write('<td>' + e.phone + '</td>');
                    res.write('<td>' + e.city + '</td>');
                    res.write('<td>' + e.state + '</td>');
                    res.write('<td>' + e.postalCode + '</td>');
                    res.write('<td>' + e.country + '</td>');
                    res.write('</tr>');
                  }
                  res.write('</table>');
                  res.end();
              });
        });
    }
    else if (url === '/product'){
        con.connect(function(err) { 
            if (err) throw err; 
             let sql ="select * from products";
             res.write('<table>');
             res.write('<tr>');
             res.write('<th>Product Code</th>');
             res.write('<th>Product Name</th>');
             res.write('<th>Product Line</th>');
             res.write('<th>Product Scale</th>');
             res.write('<th>Quantity</th>');
             res.write('</tr>'); 
             con.query (sql, function (err, result) {
                  if (err) throw err;
                  for (const e of result) {
                    res.write('<tr>');
                    res.write('<td>' + e.productCode + '</td>');
                    res.write('<td>' + e.productName + '</td>');
                    res.write('<td>' + e.productLine + '</td>');
                    res.write('<td>' + e.productScale + '</td>');
                    res.write('<td>' + e.quantityInStock + '</td>');
                    res.write('</tr>');
                  }
                  res.write('</table>');
                  res.end();
              });
        });
    }
}).listen(3000, function () {
    // The server object listens on port 3000
    console.log("server start at port 3000");
});