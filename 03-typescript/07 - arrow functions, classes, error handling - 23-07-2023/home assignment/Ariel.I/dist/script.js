"use strict";
// Hagdara shell loh hamishak
class Board {
    constructor(width, height) {
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
    }
    // Bdikat Kabala shell kelet hamishtamesh im ze baloh
    inBoard(x, y) {
        if (x < 1 || this.width < x)
            return false;
        return 1 <= y && y <= this.height;
    }
}
// Hagvolot shani magdir lasahkan shyuhal lesahek bahem
let board = new Board(8, 8);
class ChessPiece {
    constructor(board, width, height) {
        this.supportAxis = false;
        this.supportDiagonal = false;
        this.board = board;
        this.width = width;
        this.height = height;
    }
    // Omer li eifo omed hahyal
    getLocation() {
        console.log(`This peice's coordinates are (${this.width},${this.height})`);
    }
    isValidStepSize(x, y) {
        return true;
    }
    move(stepsX, stepsY) {
        if (this.isValidStepSize(stepsX, stepsY)) {
            try {
                if (this.board.inBoard(this.width + stepsX, this.height + stepsY)) {
                    this.width += stepsX;
                    this.height += stepsY;
                    this.getLocation();
                }
                else {
                    throw new Error(`Out of bounds!`);
                }
            }
            catch (out) {
                console.log(`Cant move to ${out.message}`);
            }
        }
    }
    space() {
        console.log("");
    }
    moveAxis(x, y) {
        if (this.supportAxis) {
            this.move(x, y);
        }
        else {
            console.log(`Can't move like that!`);
        }
    }
    moveDiagonal(x, y) {
        if (this.supportDiagonal) {
            this.move(x, y);
        }
        else {
            console.log(`Can't move like that!`);
        }
    }
    // Emtzaei kelet mehasahkan
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
        this.moveAxis(0, steps);
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
        this.supportAxis = true;
    }
}
class Queen extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.supportAxis = true;
        this.supportDiagonal = true;
    }
}
class king extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.supportAxis = true;
        this.supportDiagonal = true;
    }
    isValidStepSize(x, y) {
        if (Math.abs(x) > 1 || Math.abs(y) > 1) {
            console.log(`The king can only move one space at a time!`);
            return false;
        }
        return true;
    }
}
