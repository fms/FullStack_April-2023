"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board =
/*#__PURE__*/
function () {
  function Board(boardWidth, boardHeight) {
    _classCallCheck(this, Board);

    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
  }

  _createClass(Board, [{
    key: "setBoard",
    value: function setBoard(x, y) {
      this.boardHeight = y;
      this.boardWidth = x;
    }
  }, {
    key: "getBoardSize",
    value: function getBoardSize() {
      return "H: ".concat(this.boardHeight.toFixed(0), " , W: ").concat(this.boardWidth.toFixed(0));
    }
  }, {
    key: "getBoardWidth",
    value: function getBoardWidth() {
      return this.boardWidth;
    }
  }, {
    key: "getBoardHeight",
    value: function getBoardHeight() {
      return this.boardHeight;
    }
  }]);

  return Board;
}();

var ChessPiece =
/*#__PURE__*/
function () {
  function ChessPiece(board, x, y) {
    _classCallCheck(this, ChessPiece);

    this.board = board;
    this.x = x;
    this.y = y;
  }

  _createClass(ChessPiece, [{
    key: "checkBoarder",
    value: function checkBoarder(steps, xAxis) {
      if (steps <= 0) return false;

      if (xAxis) {
        return steps <= this.board.getBoardWidth();
      }

      return steps <= this.board.getBoardHeight();
    }
  }, {
    key: "borderMoveError",
    value: function borderMoveError() {
      console.log("Border Error: invalid move.");
    }
  }, {
    key: "pieceError",
    value: function pieceError(piece) {
      console.log("Piece move Error: invalid move ".concat(piece, "."));
    }
  }, {
    key: "setX",
    value: function setX(x) {
      this.x = x;
      console.log("moved X -> " + this.getLocation());
    }
  }, {
    key: "setY",
    value: function setY(y) {
      this.y = y;
      console.log("moved Y ->" + this.getLocation());
    }
  }, {
    key: "setXY",
    value: function setXY(x, y) {
      this.y = y;
      this.x = x;
      console.log("moved XY ->" + this.getLocation());
    }
  }, {
    key: "right",
    value: function right(steps) {
      this.checkBoarder(steps + this.x, true) ? this.setX(steps + this.x) : this.borderMoveError();
    }
  }, {
    key: "left",
    value: function left(steps) {
      this.checkBoarder(this.x - steps, true) ? this.setX(this.x - steps) : this.borderMoveError();
    }
  }, {
    key: "up",
    value: function up(steps) {
      this.checkBoarder(steps + this.y, false) ? this.setY(steps + this.y) : this.borderMoveError();
    }
  }, {
    key: "down",
    value: function down(steps) {
      this.checkBoarder(this.y - steps, false) ? this.setY(this.y - steps) : this.borderMoveError();
    }
  }, {
    key: "diagonal",
    value: function diagonal(x, y) {
      x < 0 ? this.left(x) : this.right(-x);
      y < 0 ? this.down(y) : this.up(-y);
    }
  }, {
    key: "getLocation",
    value: function getLocation() {
      return "x: ".concat(this.x, " , y: ").concat(this.y);
    }
  }]);

  return ChessPiece;
}();

var Rook =
/*#__PURE__*/
function (_ChessPiece) {
  _inherits(Rook, _ChessPiece);

  function Rook(board, x, y) {
    _classCallCheck(this, Rook);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rook).call(this, board, x, y));
  }

  _createClass(Rook, [{
    key: "goRight",
    value: function goRight(steps) {
      _get(_getPrototypeOf(Rook.prototype), "right", this).call(this, steps);
    }
  }, {
    key: "goLeft",
    value: function goLeft(steps) {
      _get(_getPrototypeOf(Rook.prototype), "left", this).call(this, steps);
    }
  }, {
    key: "goUp",
    value: function goUp(steps) {
      _get(_getPrototypeOf(Rook.prototype), "up", this).call(this, steps);
    }
  }, {
    key: "goDown",
    value: function goDown(steps) {
      _get(_getPrototypeOf(Rook.prototype), "down", this).call(this, steps);
    }
  }]);

  return Rook;
}(ChessPiece);

var Bishop =
/*#__PURE__*/
function (_ChessPiece2) {
  _inherits(Bishop, _ChessPiece2);

  function Bishop(board, x, y) {
    _classCallCheck(this, Bishop);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bishop).call(this, board, x, y));
  }

  _createClass(Bishop, [{
    key: "goRightUp",
    value: function goRightUp(steps) {
      _get(_getPrototypeOf(Bishop.prototype), "diagonal", this).call(this, steps, steps);
    }
  }, {
    key: "goLeftUp",
    value: function goLeftUp(steps) {
      _get(_getPrototypeOf(Bishop.prototype), "diagonal", this).call(this, -steps, steps);
    }
  }, {
    key: "goRightDown",
    value: function goRightDown(steps) {
      _get(_getPrototypeOf(Bishop.prototype), "diagonal", this).call(this, steps, -steps);
    }
  }, {
    key: "goLeftDown",
    value: function goLeftDown(steps) {
      _get(_getPrototypeOf(Bishop.prototype), "diagonal", this).call(this, -steps, -steps);
    }
  }]);

  return Bishop;
}(ChessPiece);

var b1 = new Board(10, 10);
console.log(b1.getBoardSize());
var r1 = new Rook(b1, 5, 5);
console.log("rq: " + r1.getLocation());
r1.goUp(1);
r1.goLeft(3);
r1.goRight(1);
r1.goRight(7);
r1.goRight(1);
r1.goLeft(10);
r1.goLeft(5);
r1.goUp(4);
r1.goDown(9);
r1.goDown(9);
var bis1 = new Bishop(b1, 4, 4);
console.log("bis1: " + bis1.getLocation());
bis1.goLeftDown(4);
bis1.goLeftDown(3);
bis1.goLeftUp(1);
bis1.goRightUp(9);
bis1.goLeftDown(5);
bis1.goRightDown(5);
bis1.goRightDown(4);