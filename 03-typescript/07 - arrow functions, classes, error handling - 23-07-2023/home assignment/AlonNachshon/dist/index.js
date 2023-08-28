"use strict";
class Board {
    constructor(boardWidth, boardHeight) {
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
    }
    setBoard(x, y) {
        this.boardHeight = y;
        this.boardWidth = x;
    }
    getBoardSize() {
        return `H: ${this.boardHeight.toFixed(0)} , W: ${this.boardWidth.toFixed(0)}`;
    }
    getBoardWidth() {
        return this.boardWidth;
    }
    getBoardHeight() {
        return this.boardHeight;
    }
}
class ChessPiece {
    constructor(board, x, y) {
        this.board = board;
        this.x = x;
        this.y = y;
    }
    checkBoarder(steps, xAxis) {
        if (steps <= 0)
            return false;
        if (xAxis) {
            return steps <= this.board.getBoardWidth();
        }
        return steps <= this.board.getBoardHeight();
    }
    borderMoveError() {
        console.log(`Border Error: invalid move.`);
    }
    pieceError(piece) {
        console.log(`Piece move Error: invalid number of steps move for ${piece}.`);
    }
    setX(x) {
        this.x = x;
        console.log("moved X -> " + this.getLocation());
    }
    setY(y) {
        this.y = y;
        console.log("moved Y ->" + this.getLocation());
    }
    setXY(x, y) {
        this.y = y;
        this.x = x;
        console.log("moved XY ->" + this.getLocation());
    }
    right(steps) {
        this.checkBoarder(steps + this.x, true) ? this.setX(steps + this.x) : this.borderMoveError();
    }
    left(steps) {
        this.checkBoarder(this.x - steps, true) ? this.setX(this.x - steps) : this.borderMoveError();
    }
    up(steps) {
        this.checkBoarder((steps + this.y), false) ? this.setY(steps + this.y) : this.borderMoveError();
    }
    down(steps) {
        this.checkBoarder((this.y - steps), false) ? this.setY(this.y - steps) : this.borderMoveError();
    }
    diagonal(x, y) {
        let left = false, right = false, down = false, up = false;
        if (x < 0) {
            x = -x;
            left = this.checkBoarder(this.x - x, true);
        }
        else
            right = true;
        if (y < 0) {
            y = -y;
            down = this.checkBoarder((this.y - y), false);
        }
        else
            up = true;
        if (left) {
            if (up) {
                this.left(x);
                this.up(y);
            }
            else if (down) {
                this.left(x);
                this.down(y);
            }
            else {
                this.borderMoveError();
                return;
            }
        }
        else if (right) {
            if (up) {
                this.right(x);
                this.up(y);
            }
            else if (down) {
                this.right(x);
                this.down(y);
            }
            else {
                this.borderMoveError();
                return;
            }
        }
        else {
            this.borderMoveError();
            return;
        }
    }
    getLocation() {
        return `x: ${this.x} , y: ${this.y}`;
    }
}
class Rook extends ChessPiece {
    constructor(board, x, y) {
        super(board, x, y);
    }
    goRight(steps) {
        super.right(steps);
    }
    goLeft(steps) {
        super.left(steps);
    }
    goUp(steps) {
        super.up(steps);
    }
    goDown(steps) {
        super.down(steps);
    }
}
class Bishop extends ChessPiece {
    constructor(board, x, y) {
        super(board, x, y);
    }
    goRightUp(steps) {
        super.diagonal(steps, steps);
    }
    goLeftUp(steps) {
        super.diagonal(-steps, steps);
    }
    goRightDown(steps) {
        super.diagonal(steps, -steps);
    }
    goLeftDown(steps) {
        super.diagonal(-steps, -steps);
    }
}
class Queen extends ChessPiece {
    constructor(board, x, y) {
        super(board, x, y);
    }
    goRight(steps) {
        super.right(steps);
    }
    goLeft(steps) {
        super.left(steps);
    }
    goUp(steps) {
        super.up(steps);
    }
    goDown(steps) {
        super.down(steps);
    }
    goRightUp(steps) {
        super.diagonal(steps, steps);
    }
    goLeftUp(steps) {
        super.diagonal(-steps, steps);
    }
    goRightDown(steps) {
        super.diagonal(steps, -steps);
    }
    goLeftDown(steps) {
        super.diagonal(-steps, -steps);
    }
}
class King extends ChessPiece {
    constructor(board, x, y) {
        super(board, x, y);
        this.max_steps = 1;
    }
    goRight() {
        super.right(this.max_steps);
    }
    goLeft() {
        super.left(this.max_steps);
    }
    goUp() {
        super.up(this.max_steps);
    }
    goDown() {
        super.down(this.max_steps);
    }
    goRightUp() {
        super.diagonal(this.max_steps, this.max_steps);
    }
    goLeftUp() {
        super.diagonal(-this.max_steps, this.max_steps);
    }
    goRightDown() {
        super.diagonal(this.max_steps, -this.max_steps);
    }
    goLeftDown() {
        super.diagonal(-this.max_steps, -this.max_steps);
    }
}
const b1 = new Board(10, 10);
console.log(b1.getBoardSize());
const r1 = new Rook(b1, 5, 5);
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
const bis1 = new Bishop(b1, 4, 4);
console.log("bis1: " + bis1.getLocation());
bis1.goLeftDown(4);
bis1.goLeftDown(3);
bis1.goLeftUp(1);
bis1.goRightUp(9);
bis1.goLeftDown(5);
bis1.goRightDown(5);
bis1.goRightDown(4);
const q1 = new Queen(b1, 5, 5);
console.log("q1: " + q1.getLocation());
const k1 = new King(b1, 10, 10);
console.log("k1: " + k1.getLocation());
k1.goUp();
k1.goDown();
k1.goLeftDown();
