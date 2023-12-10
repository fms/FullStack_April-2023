"use strict";

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const http = require('http');
var myArr = [1, 2, 3, 4, "all", "the", "right"];
console.log("hello BackEnd!??!!?!?!?!?");
myArr.forEach(function (Element) {
  console.log("Hello number: ".concat(Element));
});

_http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('hello world! Ofer');
}).listen(3000);