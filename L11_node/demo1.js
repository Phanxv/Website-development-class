let http = require('http');
import { upperCase, localeUpperCase } from "upper-case";

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(localeUpperCase("string", "tr"));
    res.end();
}).listen(8080);