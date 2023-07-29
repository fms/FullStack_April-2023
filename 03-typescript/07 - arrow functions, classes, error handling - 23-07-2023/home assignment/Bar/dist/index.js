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
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(board, rookWidth, rookHeight) {
        var _this = _super.call(this, board.width, board.height) || this;
        _this.rookWidth = rookWidth;
        _this.rookHeight = rookHeight;
        return _this;
    }
    // canMove(newWidth: number, newHeight: number) {
    //     return newWidth >= 1 && newWidth <= this.width && newHeight >= 1 && newHeight <= this.height
    // }
    // move(newWidth: number, newHeight: number) {
    //     if (this.canMove(newWidth, newHeight)) {
    //         this.rookWidth = newWidth
    //         this.rookHeight = newHeight
    //     }
    //     else {
    //         console.log("You can't move there");
    //     }
    // }
    Rook.prototype.getLocation = function () {
        console.log("(Rook location: " + this.rookWidth + "," + this.rookHeight + ")");
    };
    Rook.prototype.goRight = function (steps) {
        if ((this.rookWidth += steps) <= board.width) {
            return this.rookWidth;
        }
        else {
            this.rookWidth -= steps;
            console.log("You can't move there");
        }
        // let newWidth = this.rookWidth + steps;
        // this.move(newWidth, this.rookHeight)
    };
    Rook.prototype.goLeft = function (steps) {
        if ((this.rookWidth -= steps) > 0) {
            return this.rookWidth;
        }
        else {
            this.rookWidth += steps;
            console.log("You can't move there");
        }
    };
    Rook.prototype.goUp = function (steps) {
        if ((this.rookHeight += steps) <= board.height) {
            return this.rookHeight;
        }
        else {
            this.rookHeight -= steps;
            console.log("You can't move there");
        }
    };
    Rook.prototype.goDown = function (steps) {
        if ((this.rookHeight -= steps) > 0) {
            return this.rookHeight;
        }
        else {
            this.rookHeight += steps;
            console.log("You can't move there");
        }
    };
    return Rook;
}(Board));
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(board, bishopWidth, bishopHeight) {
        var _this = _super.call(this, board.height, board.width) || this;
        _this.bishopHeight = bishopHeight;
        _this.bishopWidth = bishopWidth;
        return _this;
    }
    Bishop.prototype.getLocation = function () {
        console.log("(Bishop location: (" + this.bishopHeight + "," + this.bishopWidth + ")");
    };
    Bishop.prototype.goRightUp = function (steps) {
        if (((this.bishopHeight += steps) <= board.height) && (this.bishopWidth += steps) <= board.width) {
            return this.bishopHeight && this.bishopWidth;
        }
        else {
            this.bishopHeight -= steps;
            console.log("You can't move there");
        }
    };
    Bishop.prototype.goLeftUp = function (steps) {
        if (((this.bishopHeight += steps) <= board.height) && (this.bishopWidth -= steps) > 0) {
            return this.bishopHeight && this.bishopWidth;
        }
        else {
            this.bishopHeight -= steps;
            console.log("You can't move there");
        }
    };
    Bishop.prototype.goRightDown = function (steps) {
        if ((this.bishopHeight -= steps) > 0 && (this.bishopWidth += steps) <= board.width) {
            return this.bishopHeight && this.bishopWidth;
        }
        else {
            this.bishopHeight += steps;
            console.log("You can't move there");
        }
    };
    Bishop.prototype.goLeftDown = function (steps) {
        if (((this.bishopHeight -= steps) > 0) && (this.bishopWidth -= steps) > 0) {
            return this.bishopHeight && this.bishopWidth;
        }
        else {
            this.bishopHeight += steps;
            console.log("You can't move there");
        }
    };
    return Bishop;
}(Board));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(board, bishopWidth, bishopHeight) {
        var _this = _super.call(this, board.height, board.width) || this;
        _this.queenHeight = bishopHeight;
        _this.queenWidth = bishopWidth;
        return _this;
    }
    Queen.prototype.getLocation = function () {
        console.log("(Queen location: (" + this.queenHeight + "," + this.queenWidth + ")");
    };
    Queen.prototype.goRightUp = function (steps) {
        if (((this.queenHeight += steps) <= board.height) && (this.queenWidth += steps) <= board.width) {
            return this.queenHeight && this.queenWidth;
        }
        else {
            this.queenHeight -= steps;
            console.log("You can't move there");
        }
    };
    Queen.prototype.goLeftUp = function (steps) {
        if (((this.queenHeight += steps) <= board.height) && (this.queenWidth -= steps) > 0) {
            return this.queenHeight && this.queenWidth;
        }
        else {
            this.queenHeight -= steps;
            console.log("You can't move there");
        }
    };
    Queen.prototype.goRightDown = function (steps) {
        if ((this.queenHeight -= steps) > 0 && (this.queenWidth += steps) <= board.width) {
            return this.queenHeight && this.queenWidth;
        }
        else {
            this.queenHeight += steps;
            console.log("You can't move there");
        }
    };
    Queen.prototype.goLeftDown = function (steps) {
        if (((this.queenHeight -= steps) > 0) && (this.queenWidth -= steps) > 0) {
            return this.queenHeight && this.queenWidth;
        }
        else {
            this.queenHeight += steps;
            console.log("You can't move there");
        }
    };
    Queen.prototype.goRight = function (steps) {
        if ((this.queenWidth += steps) <= board.width) {
            return this.queenWidth;
        }
        else {
            this.queenWidth -= steps;
            console.log("You can't move there");
        }
    };
    Queen.prototype.goLeft = function (steps) {
        if ((this.queenWidth -= steps) > 0) {
            return this.queenWidth;
        }
        else {
            this.queenWidth += steps;
            console.log("You can't move there");
        }
    };
    Queen.prototype.goUp = function (steps) {
        if ((this.queenHeight += steps) <= board.height) {
            return this.queenHeight;
        }
        else {
            this.queenHeight -= steps;
            console.log("You can't move there");
        }
    };
    Queen.prototype.goDown = function (steps) {
        if ((this.queenHeight -= steps) > 0) {
            return this.queenHeight;
        }
        else {
            this.queenHeight += steps;
            console.log("You can't move there");
        }
    };
    return Queen;
}(Board));
var board = new Board(90, 90);
var rook = new Rook(board, 10, 10);
var bishop = new Bishop(board, 1, 1);
var queen = new Queen(board, 5, 5);
// rook.goUp(10)
// rook.getLocation()
// bishop.goLeftUp(90)
// bishop.goRightUp(90)
// bishop.goRightDown(90)
// bishop.goLeftDown(90)
// bishop.getLocation()
queen.goRight(4);
queen.goRightUp(4);
queen.getLocation();
