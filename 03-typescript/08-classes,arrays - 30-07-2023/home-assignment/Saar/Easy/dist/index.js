"use strict";
// ### Easy
// Additions to the previous home assignment:
// 1. Add a method to the `Board` class to position a new piece on the board.
//     * `placePiece(piece: ChessPiece)`
//     * The new piece must not overlap existing pieces
// 1. Change the piece moving logic to fail if the new position in already taken on the board.
// 1. Add a method for printing the current layout of the board. Use the first letter of the class name to indicate a piece (i.e., R for **R**ook, Q for **Q**ueen, etc.)
// ♕♔♖♗
// let taken: any[] = []
let chessPieceArray = {};
class Board {
    constructor(width, height, listOfPieces = []) {
        this.width = width;
        this.height = height;
        this.listOfPieces = listOfPieces;
    }
    inBoard(x, y) {
        if (x < 1 || this.width < x || y < 1 || this.height < y) {
            return false;
        }
        return !this.listOfPieces.some(piece => x === piece.x && y === piece.y);
    }
    printBoard() {
        for (let row = this.height; row >= 1; row--) {
            let rowStr = `${row}`;
            for (let col = 1; col <= this.width; col++) {
                const piece = this.listOfPieces.find(p => p.x === col && p.y === row);
                if (piece) {
                    rowStr += `|${piece.chessLogo}`;
                }
                else {
                    rowStr += '| |';
                }
            }
            console.log(rowStr + ` ${row}`);
        }
    }
    notOverLap(piece) {
        if (piece.x === 0 || piece.y === 0) {
            return true;
        }
        return false;
    }
    onBoardArray(piece) {
        this.listOfPieces.forEach(x => {
            if (x.x === piece.x && x.y === piece.y) {
                let pieceNum = this.listOfPieces.indexOf(piece);
                this.listOfPieces.splice(pieceNum, 1);
                return true;
            }
        });
        return false;
    }
    placePiece(piece, x, y) {
        if (this.notOverLap(piece)) {
            if (this.inBoard(piece.x + x, piece.y + y)) {
                try {
                    if (this.onBoardArray(piece)) {
                        console.log(`cant overlap`);
                    }
                    else {
                        piece.x += x;
                        piece.y += y;
                        this.listOfPieces.push(piece);
                        console.log(`placed ChessPiece`);
                        console.log(this.listOfPieces);
                    }
                }
                catch (out) {
                    throw new Error(`out of bonds ${out}`);
                }
            }
            else {
                console.log(`cant place outside of the board`);
            }
        }
    }
}
let board = new Board(8, 8);
class ChessPiece {
    constructor(board, x, y, listOfPieces = [], chessLogo = ``) {
        this.listOfPieces = listOfPieces;
        this.chessLogo = chessLogo;
        this.supportAxis = false;
        this.supportDiagonal = false;
        this.board = board;
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
    }
    getLocation() {
        console.log(`the location of the Chesspiece is ${this.x},${this.y}`);
    }
    isValidStepsSize(x, y) {
        return true;
    }
    validSteps(x, y) {
        let piece = this;
        let newx = piece.x += x;
        let newy = piece.y += y;
        this.listOfPieces.forEach((x) => {
            if (x.x === newx && x.y === newy) {
                return true;
            }
            return false;
        });
    }
    move(stepsX, stepsY) {
        if (this.isValidStepsSize(stepsX, stepsY)) {
            try {
                if (this.board.inBoard(this.x + stepsX, this.y + stepsY)) {
                    this.x += stepsX;
                    this.y += stepsY;
                    this.getLocation();
                    this.board.printBoard();
                }
                else {
                    throw new Error("Out of bonds");
                }
            }
            catch (out) {
                console.log(`cant move to ${out.message}`);
            }
        }
    }
    moveAxis(x, y) {
        if (this.supportAxis) {
            this.move(x, y);
        }
        else {
            console.log("Cant move there");
        }
    }
    moveDiagonal(x, y) {
        if (this.supportDiagonal) {
            this.move(x, y);
        }
        else {
            console.log("Cant move there");
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
    goRightDown(steps) {
        this.moveDiagonal(steps, -steps);
    }
    goLeftUp(steps) {
        this.moveDiagonal(-steps, steps);
    }
    goLeftDown(steps) {
        this.moveDiagonal(-steps, -steps);
    }
}
class Rook extends ChessPiece {
    constructor(x, y, chessLogo = `♖`) {
        super(board, x, y);
        this.supportAxis = true;
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.chessLogo = chessLogo;
    }
}
class Bishop extends ChessPiece {
    constructor(x, y, chessLogo = `♗`) {
        super(board, x, y);
        this.supportDiagonal = true;
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.chessLogo = chessLogo;
    }
}
class Queen extends ChessPiece {
    constructor(x, y, chessLogo = `♕`) {
        super(board, x, y);
        this.supportAxis = true;
        this.supportDiagonal = true;
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.chessLogo = chessLogo;
    }
}
class King extends ChessPiece {
    constructor(x, y, chessLogo = `♔`) {
        super(board, x, y);
        this.supportAxis = true;
        this.supportDiagonal = true;
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.chessLogo = chessLogo;
    }
    isValidStepsSize(x, y) {
        if (Math.abs(x) > 1 || Math.abs(x) > y) {
            console.log(`the king can only move 1 step at a time`);
            return false;
        }
        return true;
    }
}
let firstRook = new Rook();
let firstQueen = new Queen();
let firstKing = new King();
let firstBishop = new Bishop();
board.placePiece(firstRook, 2, 2);
board.placePiece(firstRook, 2, 2);
board.placePiece(firstQueen, 2, 2);
board.placePiece(firstKing, 1, 1);
board.placePiece(firstBishop, 5, 5);
firstRook.getLocation();
firstQueen.getLocation();
firstKing.getLocation();
firstBishop.getLocation();
console.log(board.listOfPieces);
board.printBoard();
