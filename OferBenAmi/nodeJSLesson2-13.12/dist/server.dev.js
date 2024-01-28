"use strict";

var _http = _interopRequireDefault(require("http"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {myDateTime} from './date'
var portNum = 3000;

_http["default"].createServer(function (req, res) {
  _fs["default"].readFile('index.html', function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    return res.end();
  });
}).listen(portNum);