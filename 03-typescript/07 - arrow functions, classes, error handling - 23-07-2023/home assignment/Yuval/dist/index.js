var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Board = /** @class */ (function () {
    function Board(width, height) {
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
    }
    return Board;
}());
var board = new Board(10, 10);
var ChesePiece = /** @class */ (function () {
    function ChesePiece(board, width, height) {
        this.board = board;
        this.width = width;
        this.height = height;
    }
    ChesePiece.prototype.getLocation = function () {
        console.log("This piece's coordinates are (" + this.width + "," + this.height + ")");
    };
    ChesePiece.prototype.space = function () {
        console.log("");
    };
    return ChesePiece;
}());
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(board, width, height) {
        return _super.call(this, board, width, height) || this;
    }
    Rook.prototype.goRight = function (steps) {
        try {
            switch (this.width + steps <= this.board.width) {
                case true:
                    this.width += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRight on rook: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Rook.prototype.goLeft = function (steps) {
        try {
            switch (this.width - steps >= 1) {
                case true:
                    this.width -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeft on rook: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Rook.prototype.goUp = function (steps) {
        try {
            switch (this.height + steps <= this.board.height) {
                case true:
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goUp on rook: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Rook.prototype.goDown = function (steps) {
        try {
            switch (this.height - steps >= 1) {
                case true:
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goDown on rook: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    return Rook;
}(ChesePiece));
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(board, width, height) {
        return _super.call(this, board, width, height) || this;
    }
    Bishop.prototype.goRightUp = function (steps) {
        try {
            switch (this.width + steps <= this.board.width && this.height + steps <= this.board.height) {
                case true:
                    this.width += steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRightUp on bishop: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Bishop.prototype.goLeftUp = function (steps) {
        try {
            switch (this.width - steps >= 1 && this.height + steps <= this.board.height) {
                case true:
                    this.width -= steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeftUp on bishop: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Bishop.prototype.goRightDown = function (steps) {
        try {
            switch (this.width + steps <= this.board.width && this.height - steps >= 1) {
                case true:
                    this.width += steps;
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRightDown on bishop: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Bishop.prototype.goLeftDown = function (steps) {
        try {
            switch (this.width - steps >= 1 && this.height - steps >= 1) {
                case true:
                    this.width -= steps;
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeftDown on bishop: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    return Bishop;
}(ChesePiece));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(board, width, height) {
        return _super.call(this, board, width, height) || this;
    }
    Queen.prototype.goRight = function (steps) {
        try {
            switch (this.width + steps <= this.board.width) {
                case true:
                    this.width += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRight on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Queen.prototype.goLeft = function (steps) {
        try {
            switch (this.width - steps >= 1) {
                case true:
                    this.width -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeft on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Queen.prototype.goUp = function (steps) {
        try {
            switch (this.height + steps <= this.board.height) {
                case true:
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goUp on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Queen.prototype.goDown = function (steps) {
        try {
            switch (this.height - steps >= 1) {
                case true:
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goDown on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Queen.prototype.goRightUp = function (steps) {
        try {
            switch (this.width + steps <= this.board.width && this.height + steps <= this.board.height) {
                case true:
                    this.width += steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRightUp on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Queen.prototype.goLeftUp = function (steps) {
        try {
            switch (this.width - steps >= 1 && this.height + steps <= this.board.height) {
                case true:
                    this.width -= steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeftUp on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Queen.prototype.goRightDown = function (steps) {
        try {
            switch (this.width + steps <= this.board.width && this.height - steps >= 1) {
                case true:
                    this.width += steps;
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRightDown on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    Queen.prototype.goLeftDown = function (steps) {
        try {
            switch (this.width - steps >= 1 && this.height - steps >= 1) {
                case true:
                    this.width -= steps;
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeftDown on queen: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    return Queen;
}(ChesePiece));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(board, width, height) {
        return _super.call(this, board, width, height) || this;
    }
    King.prototype.goRight = function () {
        try {
            switch (this.width + 1 <= this.board.width) {
                case true:
                    this.width++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRight on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    King.prototype.goLeft = function () {
        try {
            switch (this.width - 1 >= 1) {
                case true:
                    this.width--;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeft on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    King.prototype.goUp = function () {
        try {
            switch (this.height + 1 <= this.board.height) {
                case true:
                    this.height++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goUp on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    King.prototype.goDown = function () {
        try {
            switch (this.height - 1 >= 1) {
                case true:
                    this.height--;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goDown on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    King.prototype.goRightUp = function () {
        try {
            switch (this.width + 1 <= this.board.width && this.height + 1 <= this.board.height) {
                case true:
                    this.width++;
                    this.height++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRightUp on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    King.prototype.goLeftUp = function () {
        try {
            switch (this.width - 1 >= 1 && this.height + 1 <= this.board.height) {
                case true:
                    this.width--;
                    this.height++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeftUp on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    King.prototype.goRightDown = function () {
        try {
            switch (this.width + 1 <= this.board.width && this.height - 1 >= 1) {
                case true:
                    this.width++;
                    this.height--;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goRightDown on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    King.prototype.goLeftDown = function () {
        try {
            switch (this.width - 1 >= 1 && this.height - 1 >= 1) {
                case true:
                    this.width--;
                    this.height--;
                    ;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log("Tried goLeftDown on king: " + out.message);
            }
            else {
                console.log("caught error: " + out);
            }
        }
    };
    return King;
}(ChesePiece));
var rook = new Rook(board, 3, 3);
rook.getLocation();
rook.goRight(1);
rook.space();
var bishop = new Bishop(board, 9, 5);
bishop.getLocation();
bishop.goLeftUp(4);
bishop.space();
var queen = new Queen(board, 3, 7);
queen.getLocation();
queen.goDown(3);
queen.goRightDown(2);
queen.space();
var king = new King(board, 5, 5);
king.getLocation();
king.goRight();
king.goRight();
king.goRight();
king.goRight();
king.goRight();
king.goRight();
