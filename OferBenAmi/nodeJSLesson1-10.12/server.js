// const http = require('http');
import http from 'http';

const portNum = 3000
console.log("hello BackEnd!??!!?!?!?!?");


http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('hello world! Ofer');
}).listen(portNum);
