"use strict";

var _fs = require("fs");

var asyncFunction = function asyncFunction() {
  var result;
  return regeneratorRuntime.async(function asyncFunction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log("before async");
          _context.next = 4;
          return regeneratorRuntime.awrap(addTwo(1, 2));

        case 4:
          result = _context.sent;
          console.log("after async");
          console.log(result);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var promiseFunction = function promiseFunction() {
  console.log("before");
  var newPromise = new Promise(function (resolve, reject) {
    resolve(addTwo(2, 2));
  }).then(function (result) {
    console.log(result);
  })["catch"](function (err) {
    console.log(err);
  });
  console.log("after");
};

function addTwo(a, b) {
  var i, x;
  return regeneratorRuntime.async(function addTwo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          for (i = 0; i <= 10000000000; i++) {
            x = 1 + 1;
          }

          return _context2.abrupt("return", a + b);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var writeToFile = function writeToFile() {
  var text = (0, _fs.readFileSync)("./gili.txt");
  (0, _fs.writeFileSync)("./gili.txt", text + "test");
};

var createAFolder = function createAFolder(folderName, relativePath) {
  (0, _fs.mkdirSync)("".concat(relativePath, "/").concat(folderName));
  console.log("created folder");
}; // createAFolder("gili", "./")
// writeToFile();
// promiseFunction();
// asyncFunction();