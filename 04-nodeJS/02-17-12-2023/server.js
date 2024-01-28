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
  console.log(q.pathname)

  // check q.pathname
  // different filename
  // content-type
  // status
  let filename ='';
  let contentType = '';
  switch (q.pathname) {
    case "/":
      filename = 'index.html';
      contentType = 'text/html';
      res.statusCode = 200;
      break;
    case "/bamba":
      filename = 'bamba.html';
      contentType = 'text/html';
      res.statusCode = 200;
      break;
    case "/style.css":
      filename = 'style.css';
      contentType = 'text/css';
      res.statusCode = 200;
      break;
    case "/script.js":
      filename = 'script.js';
      contentType = 'text/javascript';
      res.statusCode = 200;
      break;
    case "/treat":
      res.setHeader("Location", "/bamba");
      res.statusCode = 301;
      res.end();
      break;
    default:
      filename = 'notFound.html';
      contentType = 'text/html';
      res.statusCode = 404;
      break;
  }
  fs.readFile(filename, (err, data) => {
    if (err)
    {
      console.log(err);
      res.end();
    }
    else {
      res.setHeader("Content-Type", contentType);
      res.write(data);
      res.end();
    }
  })
}).listen(PORT);