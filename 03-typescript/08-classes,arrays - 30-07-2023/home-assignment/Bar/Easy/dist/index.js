"use strict";
class Board {
    constructor(width, height, listOfPieces = []) {
        this.listOfPieces = [];
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
        this.listOfPieces = listOfPieces;
    }
    isPositionAvailable(x, y) {
        if (x < 1 || x > this.width || y < 1 || y > this.height) {
            return false;
        }
        this.listOfPieces.forEach((piece) => {
            if (x === piece.width && y === piece.height) {
                return false;
            }
        });
        return true;
    }
    placePiece(piece) {
        return piece;
    }
    getArrayOfPieces() {
        console.log(this.listOfPieces);
    }
}
class ChessPiece {
    constructor(board, width, height) {
        this.canMoveOnAxis = false;
        this.canMoveOnDiagonal = false;
        this.board = board;
        this.width = width;
        this.height = height;
        if (board.isPositionAvailable(this.width, this.height)) {
            board.listOfPieces.push(this);
        }
    }
    getLocation() {
        console.log(`(Piece's location: ${this.width},${this.height})`);
    }
    isValidSteps(x, y) {
        return true;
    }
    move(stepsX, stepsY) {
        if (this.isValidSteps(stepsX, stepsY))
            try {
                if (this.board.isPositionAvailable(this.width + stepsX, this.height + stepsY)) {
                    this.width += stepsX;
                    this.height += stepsY;
                    this.getLocation();
                }
                else {
                    console.log("You can't go there");
                }
            }
            catch (out) {
                console.log(out);
            }
    }
    moveOnAxis(x, y) {
        if (this.canMoveOnAxis) {
            this.move(x, y);
        }
        else {
            console.log("You can't move there");
        }
    }
    moveOnDiagonal(x, y) {
        if (this.canMoveOnAxis) {
            this.move(x, y);
        }
        else {
            console.log("You can't move there");
        }
    }
    goRight(steps) {
        this.moveOnAxis(steps, 0);
    }
    goLeft(steps) {
        this.moveOnAxis(-steps, 0);
    }
    goUp(steps) {
        this.moveOnAxis(0, steps);
    }
    goDown(steps) {
        this.moveOnAxis(0, -steps);
    }
    goRightUp(steps) {
        this.moveOnDiagonal(steps, steps);
    }
    goLeftUp(steps) {
        this.moveOnDiagonal(-steps, steps);
    }
    goRightDown(steps) {
        this.moveOnDiagonal(steps, -steps);
    }
    goLeftDown(steps) {
        this.moveOnDiagonal(-steps, -steps);
    }
}
class Rook extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.canMoveOnAxis = true;
    }
}
class Bishop extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.canMoveOnDiagonal = true;
    }
}
class Queen extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.canMoveOnAxis = true;
        this.canMoveOnDiagonal = true;
    }
}
class King extends ChessPiece {
    constructor(board, width, height) {
        super(board, width, height);
        this.canMoveOnAxis = true;
        this.canMoveOnDiagonal = true;
    }
    isValidSteps(x, y) {
        if (Math.abs(x) > 1 || Math.abs(y) > 1) {
            console.log("The king can only move one space at a time!");
            return false;
        }
        return true;
    }
}
let board = new Board(10, 10);
let rook = new Rook(board, 4, 4);
let bishop = new Bishop(board, 2, 2);
let queen = new Queen(board, 6, 6);
let king = new King(board, 5, 5);
// bishop.goLeftUp(90)
// bishop.goRightUp(5)
// bishop.goRightDown(12)
// bishop.goLeftDown(4)
// queen.goRight(4)
// queen.goRightUp(4)
// king.goLeft(1)
// king.goDown(2)
// king.goLeftDown(1)
// king.goRight(2)
board.placePiece(new Rook(board, 4, 4));
board.placePiece(new Rook(board, 4, 4));
board.placePiece(new Rook(board, 4, 4));
board.getArrayOfPieces();
