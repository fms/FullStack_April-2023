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
        this.width = width;
        this.height = height;
        this.chessPieces = [];
        this.width = width;
        this.height = height;
    }
    Board.prototype.isInBoard = function (x, y) {
        if (x < 1 || this.width < x) {
            return false;
        }
        return 1 <= y && y <= this.height;
    };
    Board.prototype.checkOverlap = function (x, y) {
        if (this.chessPieces.length > 0) {
            for (var _ = 0; _ < this.chessPieces.length; _++) {
                if (x == this.chessPieces[_].currentX && y == this.chessPieces[_].currentY) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    };
    Board.prototype.placePiece = function (piece, x, y) {
        piece.currentX = x;
        piece.currentY = y;
        this.chessPieces.push(piece);
    };
    Board.prototype.boardLayout = function () {
        var _this = this;
        this.chessPieces.forEach(function (piece) { return console.log(_this.chessPieces[_this.chessPieces.indexOf(piece)].constructor.name.slice(0, 1) + " (" + piece.currentX + ", " + piece.currentY + ")"); });
    };
    return Board;
}());
var ChessPiece = /** @class */ (function () {
    function ChessPiece(board, startX, startY) {
        this.board = board;
        this.supportsAxis = false;
        this.supportsDiag = false;
        this.isKing = false;
        if (board.isInBoard(startX, startY)) {
            if (board.checkOverlap(startX, startY)) {
                board.placePiece(this, startX, startY);
            }
            else {
                console.log("There is allready a piece in that spot.");
                board.chessPieces.pop();
            }
        }
        else {
            console.log("Piece was placed out of board borders.");
        }
    }
    ChessPiece.prototype.getLocation = function () {
        console.log("This piece coordinates are (" + this.currentX + ", " + this.currentY + ")");
    };
    ChessPiece.prototype.move = function (stepsX, stepsY) {
        if (this.isKing && (Math.abs(stepsX) > 1 || Math.abs(stepsY) > 1)) {
            console.log("The King can't move more than 1 step.");
        }
        else {
            if (this.board.isInBoard(this.currentX + stepsX, this.currentY + stepsY)) {
                this.currentX += stepsX;
                this.currentY += stepsY;
                this.getLocation();
            }
            else {
                return console.log("Move not valid.");
            }
        }
    };
    ChessPiece.prototype.moveOnAxis = function (stepsX, stepsY) {
        if (this.supportsAxis) {
            this.move(stepsX, stepsY);
        }
        else {
            console.log("Can't move like that!");
        }
    };
    ChessPiece.prototype.moveOnDiag = function (stepsX, stepsY) {
        if (this.supportsAxis) {
            this.move(stepsX, stepsY);
        }
        else {
            console.log("Can't move like that!");
        }
    };
    ChessPiece.prototype.goRight = function (steps) {
        this.moveOnAxis(steps, 0);
    };
    ChessPiece.prototype.goLeft = function (steps) {
        this.moveOnAxis(-steps, 0);
    };
    ChessPiece.prototype.goUp = function (steps) {
        this.moveOnAxis(0, steps);
    };
    ChessPiece.prototype.goDown = function (steps) {
        this.moveOnAxis(0, -steps);
    };
    ChessPiece.prototype.goRightUp = function (stepsX, stepsY) {
        this.moveOnDiag(stepsX, stepsY);
    };
    ChessPiece.prototype.goLeftUp = function (stepsX, stepsY) {
        this.moveOnDiag(-stepsX, stepsY);
    };
    ChessPiece.prototype.goRightDown = function (stepsX, stepsY) {
        this.moveOnDiag(stepsX, -stepsY);
    };
    ChessPiece.prototype.goLeftDown = function (stepsX, stepsY) {
        this.moveOnDiag(-stepsX, -stepsY);
    };
    return ChessPiece;
}());
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(board, x, y) {
        var _this = _super.call(this, board, x, y) || this;
        _this.supportsAxis = true;
        return _this;
    }
    return Rook;
}(ChessPiece));
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(board, x, y) {
        var _this = _super.call(this, board, x, y) || this;
        _this.supportsDiag = true;
        return _this;
    }
    ;
    return Bishop;
}(ChessPiece));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(board, x, y) {
        var _this = _super.call(this, board, x, y) || this;
        _this.supportsDiag = true;
        _this.supportsAxis = true;
        return _this;
    }
    return Queen;
}(ChessPiece));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(board, x, y) {
        var _this = _super.call(this, board, x, y) || this;
        _this.supportsDiag = true;
        _this.supportsAxis = true;
        _this.isKing = true;
        return _this;
    }
    return King;
}(ChessPiece));
