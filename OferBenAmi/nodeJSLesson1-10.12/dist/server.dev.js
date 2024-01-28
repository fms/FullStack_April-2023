"use strict";

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const http = require('http');
var portNum = 3000;
console.log("hello BackEnd!??!!?!?!?!?");

_http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('hello world! Ofer');
}).listen(portNum);