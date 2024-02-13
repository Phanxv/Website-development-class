var http= require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 var url = req.url;
 if(url === '/home'){
    res.write('<h1>/home</h1>')
    res.end();
 }
 else if(url === '/product'){
    res.write('<h1>/product</h1>')
    res.end();
 }
 else if(url === '/detail'){
    res.write('<h1>/detail</h1>')
    res.end();
 }
 else{
    res.write('<h1>/Hello World</h1>')
    res.end();
 }
}).listen(9080);