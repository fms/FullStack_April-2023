"use strict";
class Board {
    constructor(boardWidth, boardHeight) {
        this.boardHeight = boardHeight;
        this.boardWidth = boardWidth;
        this.playBoard = this.initBoard();
        this.boardStruct = this.initBoard();
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
    printBoard() {
        let i;
        let sep = "__";
        console.log(`Board Status:`);
        for (i = 0; i < this.boardHeight; i++) {
            console.log(...this.playBoard[i]);
        }
        for (i = 1; i < this.getBoardWidth(); i *= 2) {
            sep += sep;
        }
        console.log(sep);
    }
    initBoard() {
        let newBoard = new Array(this.boardHeight);
        let startB = ['□', '■'];
        let startW = startB.slice().reverse();
        let tmp;
        for (let i = 0; i < this.boardHeight; i++) {
            newBoard[i] = [];
        }
        for (let i = 0; i < this.boardHeight; i++) {
            tmp = i % 2 == 0 ? startB.slice() : startW.slice();
            for (let j = 0; j < this.boardWidth; j++) {
                let sqr = j % 2 == 0 ? tmp[0] : tmp[1];
                newBoard[i][j] = sqr;
            }
        }
        console.log(`A new board was created ${this.getBoardSize()}`);
        return newBoard;
    }
    placePiece(piece) {
        this.playBoard[piece.y][piece.x] = piece.name;
        console.log(`'${piece.name}' in ${piece.getLocation()}`);
        this.printBoard();
    }
    initPiece(piece) {
        // console.log(`${piece.x}, ${piece.y}`)
        if (this.isValidMove(piece.x, piece.y)) {
            this.placePiece(piece);
        }
        else
            this.initEror();
    }
    isValidMove(x, y) {
        return (this.checkBoarder(x, y)) && this.checkBoarder(x, y) && (this.isPosEmpty(x, y));
    }
    revertPosition(x, y) {
        // console.log(`this.playBoard[y][x] = ${this.playBoard[y][x]}`)
        // console.log(`this.boardStruct[y][x] = ${this.boardStruct[y][x]}`)
        this.playBoard[y][x] = this.boardStruct[y][x];
        return true;
    }
    isPosEmpty(x, y) {
        let flag = this.playBoard[y][x] === '□' || this.playBoard[y][x] === '■';
        if (flag)
            return true;
        return this.positionError(x, y);
    }
    checkBoarder(x, y) {
        // console.log( `${xAxis? "X: ": "Y: "}${steps} steps. `)
        return (x < this.getBoardWidth() && y < this.getBoardHeight() && x >= 0 && y >= 0) ? true : this.borderMoveError();
    }
    borderMoveError() {
        console.log(`Border Error: move outside the board border, choose a point that's inside a ${this.getBoardSize()}`);
        return false;
    }
    initEror() {
        console.log(`Peice initiation Error.`);
        return false;
    }
    positionError(x, y) {
        console.log(`Position not available, initiate a position different than: (${x + 1},${y + 1}).`);
        return false;
    }
}
class ChessPiece {
    constructor(board, x, y, name) {
        this.board = board;
        this.x = x - 1;
        this.y = y - 1;
        this.name = name;
    }
    pieceError(piece) {
        console.log(`Piece move Error: invalid number of steps move for ${piece}.`);
    }
    setX(x) {
        console.log(`X: ${this.x + 1} -> ${x + 1}`);
        this.x = x;
        this.board.placePiece(this);
        return true;
    }
    setY(y) {
        console.log(`Y: ${this.y + 1} -> ${y + 1}`);
        this.y = y;
        this.board.placePiece(this);
        return true;
    }
    setXY(x, y) {
        this.y = y;
        this.x = x;
        console.log(`X,Y: ${this.x},${this.y} -> ${x + 1},${y + 1}`);
        this.board.placePiece(this);
        return true;
    }
    right(steps) {
        return this.board.isValidMove(steps + this.x, this.y) ? this.board.revertPosition(this.x, this.y) && this.setX(steps + this.x) : false;
    }
    left(steps) {
        return this.board.isValidMove(this.x - steps, this.y) ? this.board.revertPosition(this.x, this.y) && this.setX(this.x - steps) : false;
    }
    up(steps) {
        return this.board.isValidMove(this.x, (this.y - steps)) ? this.board.revertPosition(this.x, this.y) && this.setY(this.y - steps) : false;
    }
    down(steps) {
        return this.board.isValidMove(this.x, (steps + this.y)) ? this.board.revertPosition(this.x, this.y) && this.setY(steps + this.y) : false;
    }
    diagonal(x, y) {
        x = this.x + x;
        y = this.y + y;
        return this.board.isValidMove(x, y) ? this.board.revertPosition(this.x, this.y) && this.setXY(x, y) : false;
    }
    getLocation() {
        return `x: ${this.x + 1} , y: ${this.y + 1}`;
    }
}
class Rook extends ChessPiece {
    constructor(board, x, y) {
        super(board, x, y, 'R');
        this.board.initPiece(this);
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
        super(board, x, y, 'B');
        this.board.initPiece(this);
    }
    goRightUp(steps) {
        super.diagonal(steps, -steps);
    }
    goLeftUp(steps) {
        super.diagonal(-steps, -steps);
    }
    goRightDown(steps) {
        super.diagonal(steps, steps);
    }
    goLeftDown(steps) {
        super.diagonal(-steps, steps);
    }
}
class Queen extends ChessPiece {
    constructor(board, x, y) {
        super(board, x, y, 'Q');
        this.board.initPiece(this);
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
        super.diagonal(steps, -steps);
    }
    goLeftUp(steps) {
        super.diagonal(-steps, -steps);
    }
    goRightDown(steps) {
        super.diagonal(steps, steps);
    }
    goLeftDown(steps) {
        super.diagonal(-steps, steps);
    }
}
class King extends ChessPiece {
    constructor(board, x, y) {
        super(board, x, y, 'K');
        this.max_steps = 1;
        this.board.initPiece(this);
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
const b1 = new Board(8, 8);
b1.printBoard();
// const r1 = new Rook(b1, 8, 8);
// r1.goRight(1);
// r1.goUp(0);
// r1.goLeft(3);
// r1.goRight(10);
// r1.goDown(7);
// r1.goRight(3);
// r1.goRight(7);
// r1.goRight(1);
// r1.goLeft(10);
// r1.goLeft(5);
// r1.goUp(4);
// r1.goDown(9)
// r1.goDown(9)
// const bis1 = new Bishop(b1, 8, 7);
// console.log("bis1: " + bis1.getLocation());
// bis1.goLeftUp(3);
// bis1.goLeftDown(1);
// bis1.goLeftDown(3);
// bis1.goLeftUp(1);
// bis1.goRightUp(1);
// bis1.goLeftDown(5);
// bis1.goRightDown(5);
// bis1.goRightDown(4);
const q1 = new Queen(b1, 5, 7);
// console.log("q1: " + q1.getLocation());
// q1.goLeftUp(2)
q1.goRightDown(1);
q1.goRight(2);
// const k1 = new King(b1, 7, 7);
// console.log("k1: " + k1.getLocation());
// k1.goRight();
// k1.goLeft();
// k1.goLeft();
// k1.goUp();
// k1.goDown();
// k1.goLeftDown();
