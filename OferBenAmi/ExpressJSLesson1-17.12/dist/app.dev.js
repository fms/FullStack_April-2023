"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 3001;
app.listen(PORT, function () {
  console.log("running express server on port ".concat(PORT));
});
app.get('groceries', function (req, res) {
  res.send([{
    item: 'milk',
    quantity: 2
  }, {
    item: 'cereal',
    quantity: 4
  }, {
    item: 'apple',
    quantity: 8
  }]);
});