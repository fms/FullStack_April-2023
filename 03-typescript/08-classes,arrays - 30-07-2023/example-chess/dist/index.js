"use strict";
class Board {
    constructor(width, height) {
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
    }
    inBoard(x, y) {
        if (x < 1 || this.width < x) {
            return false;
        }
        return 1 <= y && y <= this.height;
    }
}
let board = new Board(10, 10);
class ChessPiece {
    constructor(board, width, height) {
        this.supportsAxis = false;
        this.supportsDiagonal = false;
        this.board = board;
        this.width = width;
        this.height = height;
    }
    getLocation() {
        console.log(`This piece's coordinates are (${this.width},${this.height})`);
    }
    isValidStepSize(x, y) {
        return true;
    }
    move(stepsX, stepsY) {
        if (this.isValidStepSize(stepsX, stepsY)) {
            try {
                if (this.board.inBoard(this.width + stepsX, this.height + stepsY)) {
                    this.height += stepsY;
                    this.width += stepsX;
                    this.getLocation();
                }
                else {
                    throw new Error("Out of bounds!");
                }
            }
            catch (out) {
                console.log(`Can't move to ${out.message}`);
            }
        }
    }
    space() {
        console.log("");
    }
    moveAxis(x, y) {
        if (this.supportsAxis) {
            this.move(x, y);
        }
        else {
            console.log(`Can't move like that!`);
        }
    }
    moveDiagonal(x, y) {
        if (this.supportsDiagonal) {
            this.move(x, y);
        }
        else {
            console.log(`Can't move like that!`);
        }
    }
    goRight(steps) {
        this.moveAxis(steps, 0);
    }
    goLeft(steps) {
        this.moveAxis(-steps, 0);
    }
    goUp(steps) {
        this.moveAxis(0, steps);
    }
    goDown(steps) {
        this.moveAxis(0, -steps);
    }
    goRightUp(steps) {
        this.moveDiagonal(steps, steps);
    }
    goLeftUp(steps) {
        this.moveDiagonal(-steps, steps);
    }
    goRightDown(steps) {
        this.moveDiagonal(steps, -steps);
    }
    goLeftDown(steps) {
        this.moveDiagonal(-steps, -steps);
    }
}
class Rook extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.supportsAxis = true;
    }
}
class Bishop extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.supportsDiagonal = true;
    }
}
class Queen extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.supportsAxis = true;
        this.supportsDiagonal = true;
    }
}
class King extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.supportsAxis = true;
        this.supportsDiagonal = true;
    }
    isValidStepSize(x, y) {
        if (Math.abs(x) > 1 || Math.abs(y) > 1) {
            console.log("The king can only move one space at a time!");
            return false;
        }
        return true;
    }
}
let rook = new Rook(board, 3, 3);
rook.getLocation();
rook.goRight(1);
rook.goLeftDown(2);
rook.goUp(7);
rook.goUp(2);
rook.space();
let bishop = new Bishop(board, 9, 5);
bishop.getLocation();
bishop.goLeftDown(3);
bishop.goDown(5);
bishop.goLeftUp(7);
bishop.space();
let queen = new Queen(board, 3, 7);
queen.getLocation();
queen.goLeft(2);
queen.goRightDown(5);
queen.goUp(10);
queen.space();
let king = new King(board, 5, 5);
king.getLocation();
king.goDown(1);
king.goLeftUp(1);
king.goRight(3);
king.goDown(1);
king.goDown(1);
king.goDown(1);
king.goDown(1);
king.goDown(1);
