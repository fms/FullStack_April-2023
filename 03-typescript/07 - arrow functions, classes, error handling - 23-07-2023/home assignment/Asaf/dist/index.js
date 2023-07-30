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
        this.xValue = width;
        this.yValue = height;
    }
    return Board;
}());
var Rook = /** @class */ (function () {
    function Rook(board, startX, startY) {
        if (board.xValue >= startX >= 1 && board.yValue >= startY >= 1) {
            this.currentX = startX;
            this.currentY = startY;
        }
        else {
            console.log("Out of board borders.");
            this.currentX = NaN;
            this.currentY = NaN;
        }
    }
    Rook.prototype.getLocation = function () {
        console.log("The rook's location is " + this.currentX + " on the X axis and " + this.currentY + " on the Y axis.");
    };
    // borderCheck(){
    //     if 
    // }
    Rook.prototype.goRight = function (steps) {
        this.currentX += steps;
        this.getLocation();
    };
    Rook.prototype.goLeft = function (steps) {
        this.currentX -= steps;
        this.getLocation();
    };
    Rook.prototype.goUp = function (steps) {
        this.currentY += steps;
        this.getLocation();
    };
    Rook.prototype.goDown = function (steps) {
        this.currentY -= steps;
        this.getLocation();
    };
    return Rook;
}());
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(board, startX, startY) {
        return _super.call(this, board, startX, startY) || this;
    }
    Bishop.prototype.goRightUp = function (steps) {
        this.currentX += steps;
        this.goUp(steps);
    };
    Bishop.prototype.goLeftUp = function (steps) {
        this.currentX -= steps;
        this.goUp(steps);
    };
    Bishop.prototype.goRightDown = function (steps) {
        this.currentX += steps;
        this.goDown(steps);
    };
    Bishop.prototype.goLeftDown = function (steps) {
        this.currentX -= steps;
        this.goDown(steps);
    };
    return Bishop;
}(Rook));
// let board1 = new Board(500, 500);
// let rook1 = new Rook(board1, 250, 250);
// let bishop1 = new Bishop(board1, 200, 200);
