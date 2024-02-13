var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'content-length':'123','content-type':'text/html','connection':'keep-alive','host':'localhost','accept':'*/*' });
  res.write('Welcome to TNI!!!');
  res.end();
}).listen(8080);
