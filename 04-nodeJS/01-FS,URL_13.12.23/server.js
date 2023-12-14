// const http = require('http');
// const date = require('./date');
import http from 'http';
import fs from 'fs';
import date from './date.js';
import url from 'url';

const PORT = 3000

http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // console.log(date)
  // res.write(date.myDateTime()+ "<br/>")
  const q = url.parse(req.url, true);
  console.log(q)

  if(q.pathname == "/"){
    fs.readFile('index.html', function(err, data) {
      if(err){
        console.log(err)
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      // res.write(req.url +"<br/>");
      res.write(data);
      return res.end();
    });
  }else if(q.pathname == "/bamba.html"){
    fs.readFile('bamba.html', function(err, data) {
      if(err){
        console.log(err)
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      // res.write(req.url +"<br/>");
      res.write(data);
      return res.end();
    });
  }else if(q.pathname == "/style.css"){
    fs.readFile('style.css', function(err, data) {
      if(err){
        console.log(err)
      }
      // res.writeHead(200, {'Content-Type': 'text/stylesheet'});
      res.writeHead(200, {'Content-Type': 'text/css'});
      // res.write(req.url +"<br/>");
      res.write(data);
      return res.end();
    });
  }else if(q.pathname == "/script.js"){
    fs.readFile('script.js', function(err, data) {
      if(err){
        console.log(err)
      }
      // res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.writeHead(200, {'Content-Type': 'text/js'});
      // res.write(req.url +"<br/>");
      res.write(data);
      return res.end();
    });
  }


}).listen(PORT);