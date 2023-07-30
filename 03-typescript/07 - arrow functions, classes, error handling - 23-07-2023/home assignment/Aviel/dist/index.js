//             only Easy level 
var Board = /** @class */ (function () {
    function Board(width, height) {
        this.width = width;
        this.height = height;
    }
    return Board;
}());
var Rook = /** @class */ (function () {
    function Rook(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    }
    Rook.prototype.getLocation = function () {
        return "The location_range is: [" + this.x + "," + this.y + "\n]";
    };
    Rook.prototype.goRight = function (steps) {
        var x1 = this.x;
        if (this.x + steps <= this.board.width) {
            this.x += steps;
            return "Because you moved right " + steps + " steps on the x axis, the calc is " + x1 + " + " + steps + "\nand The new location is: [" + this.x + "," + this.y + "]";
        }
        else {
            return "You can't move right " + steps + " steps, the new location is outside the board.";
        }
    };
    Rook.prototype.goLeft = function (steps) {
        var x1 = this.x;
        if (this.x - steps >= 0) {
            this.x -= steps;
            return "Because you moved left " + steps + " steps on the x axis , the calc is " + x1 + " - " + steps + "\nThe new location is: [" + this.x + ", " + this.y + "]";
        }
        else {
            return "Cannot move left, The new location is outside the board";
        }
    };
    Rook.prototype.goUp = function (steps) {
        var y1 = this.y;
        if (this.y + steps <= this.board.height) {
            this.y += steps;
            return "Because you moved up " + steps + " steps on the y axis , the calc is " + y1 + " + " + steps + "\n The new location is: [" + this.x + ", " + this.y + "]";
        }
        else {
            return "Cannot move up, The new location is outside the board";
        }
    };
    Rook.prototype.goDown = function (steps) {
        var y1 = this.y;
        if (this.y - steps >= 0) {
            this.y -= steps;
            return "Because you moved up " + steps + " steps on the y axis , the calc is " + y1 + " - " + steps + "\n The new location is: [" + this.x + ", " + this.y + "]";
        }
        else {
            return "Cannot move down " + steps + " steps, The new location is outside the board";
        }
    };
    return Rook;
}());
var board = new Board(7, 9); // x , y this is the maximum range of the board
var rook = new Rook(board, 4, 2); //  The location_range
console.log(rook);
console.log(rook.getLocation());
console.log(rook.goRight(3)); //steps is 3
console.log(rook.goLeft(2));
console.log(rook.goUp(4));
console.log(rook.goDown(1));
