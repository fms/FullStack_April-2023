// -------------------------------
//             Easy
// -------------------------------
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
    }
    Board.prototype.Below = function () {
        console.log('--------------------------------------');
    };
    return Board;
}());
var Rook = /** @class */ (function () {
    function Rook(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    }
    Rook.prototype.getLocation = function () {
        return "The location is: [" + this.x + "," + this.y + "]";
    };
    Rook.prototype.goRight = function (steps) {
        if (this.x + steps <= this.board.width) {
            this.x += steps;
            return "You moved right " + steps + " steps,\nThe new location is: [" + this.x + "," + this.y + "]";
        }
        else {
            return "You can't move right " + steps + " steps, the new location is outside the board.";
        }
    };
    Rook.prototype.goLeft = function (steps) {
        if (this.x - steps >= 0) {
            this.x -= steps;
            return "You moved left, The new location is: [" + this.x + ", " + this.y + "]";
        }
        else {
            return "Cannot move left, The new location is outside the board";
        }
    };
    Rook.prototype.goUp = function (steps) {
        if (this.y + steps <= this.board.height) {
            this.y += steps;
            return "You moved up, The new location is: [" + this.x + ", " + this.y + "]";
        }
        else {
            return "Cannot move up, The new location is outside the board";
        }
    };
    Rook.prototype.goDown = function (steps) {
        if (this.y - steps >= 0) {
            this.y -= steps;
            return "You moved down,\nThe new location is: [" + this.x + "," + this.y + "]";
        }
        else {
            return "Cannot move down, The new location is outside the board";
        }
    };
    return Rook;
}());
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bishop.prototype.goRightUp = function (steps) {
        if (this.y + steps <= this.board.height && this.x + steps <= this.board.width) {
            this.x += steps;
            this.y += steps;
            return "You moved Right-Up,\nThe new location is: [" + this.x + "," + this.y + "]";
        }
        else {
            return "Cannot move Right-Up, The new location is outside the board";
        }
    };
    Bishop.prototype.goLeftUp = function (steps) {
        if (this.y + steps <= this.board.height && this.x - steps >= 0) {
            this.x -= steps;
            this.y += steps;
            return "You moved Left-Up,\nThe new location is: [" + this.x + "," + this.y + "]";
        }
        else {
            return "Cannot move Left-Up, The new location is outside the board";
        }
    };
    Bishop.prototype.goRightDown = function (steps) {
        if (this.y - steps <= this.board.height && this.x + steps <= this.board.width) {
            this.x += steps;
            this.y -= steps;
            return "You moved Right-Down,\nThe new location is: [" + this.x + "," + this.y + "]";
        }
        else {
            return "Cannot move Right-Down, The new location is outside the board";
        }
    };
    Bishop.prototype.goLeftDown = function (steps) {
        if (this.y - steps <= this.board.height && this.x - steps >= 0) {
            this.x -= steps;
            this.y -= steps;
            return "You moved Left-Down,\nThe new location is: [" + this.x + "," + this.y + "]";
        }
        else {
            return "Cannot move Left-Down, The new location is outside the board";
        }
    };
    return Bishop;
}(Rook));
var board = new Board(5, 5);
board.Below();
console.log('Board');
board.Below();
console.log(board);
board.Below();
console.log('Rook');
board.Below();
var rook = new Rook(board, 1, 1);
console.log(rook);
console.log(rook.getLocation());
console.log(rook.goRight(1));
console.log(rook.goLeft(1));
console.log(rook.goUp(1));
console.log(rook.goDown(1));
board.Below();
console.log('Bishop');
board.Below();
var bishop = new Bishop(board, 1, 1);
console.log(bishop.getLocation());
console.log(bishop.goRightUp(1));
console.log(bishop.goRightDown(1));
console.log(bishop.goLeftUp(1));
console.log(bishop.goLeftDown(1));
// -------------------------------
//             Medium
// -------------------------------
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Queen;
}(Bishop));
var Operations;
(function (Operations) {
    Operations[Operations["right"] = 0] = "right";
    Operations[Operations["left"] = 1] = "left";
    Operations[Operations["down"] = 2] = "down";
    Operations[Operations["up"] = 3] = "up";
    Operations[Operations["rightUp"] = 4] = "rightUp";
    Operations[Operations["rightDown"] = 5] = "rightDown";
    Operations[Operations["leftUp"] = 6] = "leftUp";
    Operations[Operations["leftDown"] = 7] = "leftDown";
})(Operations || (Operations = {}));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.isOnBoard = function (x, y) {
        return x >= 1 && x <= this.board.width && y >= 1 && y <= this.board.height;
    };
    King.prototype.moveTo = function (op) {
        var txt = '';
        switch (op) {
            case Operations.right:
                txt += 'Right';
                this.move(1, 0);
                break;
            case Operations.left:
                txt += 'Left';
                this.move(-1, 0);
                break;
            case Operations.down:
                txt += 'Down';
                this.move(0, -1);
                break;
            case Operations.up:
                txt += 'Up';
                this.move(0, 1);
                break;
            case Operations.rightUp:
                txt += 'Right Up';
                this.move(1, 1);
                break;
            case Operations.rightDown:
                txt += 'Right Down';
                this.move(1, -1);
                break;
            case Operations.leftUp:
                txt += 'Left Up';
                this.move(-1, 1);
                break;
            case Operations.leftDown:
                txt += 'Left Down';
                this.move(-1, -1);
                break;
        }
        console.log("You moved " + txt + " to [" + this.x + "," + this.y + "]");
    };
    King.prototype.move = function (newx, newy) {
        var newX = this.x + newx;
        var newY = this.y + newy;
        if (this.isOnBoard(newX, newY)) {
            this.x = newX;
            this.y = newY;
        }
        else {
            console.log("Cannot move. The new location is outside the board.");
        }
    };
    return King;
}(Queen));
board.Below();
console.log('King');
board.Below();
var king = new King(board, 5, 5);
console.log(king.getLocation()); // מצב תחילי של המלך
king.moveTo(Operations.left);
king.moveTo(Operations.leftDown);
king.moveTo(Operations.rightUp);
king.moveTo(Operations.rightUp);
console.log(king.getLocation()); // המצב החדש של המלך
