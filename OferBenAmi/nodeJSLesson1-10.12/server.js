// const http = require('http');
import http from 'http';
const myArr  = [1,2,3,4, `all`, `the`, `right`];
console.log("hello BackEnd!??!!?!?!?!?");

myArr.forEach(Element =>{
    console.log(`Hello number: ${Element}`);
});

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('hello world! Ofer');
}).listen(3000);
