var http = require('http');
var dt = require('./calc');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>5 + 6 : " + dt.add(5,6) + "</h1>");
  res.write("<h1>10- 5 : " + dt.sub(10,5) + "</h1>");
  res.write("<h1>2 * 3 : " + dt.mult(2,3) + "</h1>");
  res.write("<h1>10 / 2 : " + dt.div(10,2) + "</h1>");
  res.end();
}).listen(8080);