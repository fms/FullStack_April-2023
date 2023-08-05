"use strict";
class Board {
    constructor(width = 8, height = 8) {
        this.width = width;
        this.height = height;
        this.boardMatrix = [];
        //resetting the board to have spcae in all the squeres
        for (let i = 0; i < this.height; i++) {
            this.boardMatrix.push([` [ ]`]);
            for (let j = 0; j < this.width; j++) {
                this.boardMatrix[i][j] = ` [ ]`;
            }
        }
    }
    placePiece(piece) {
        // debugger;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.boardMatrix[i][j] === ` [ ]`) {
                    this.boardMatrix[i][j] = ` [${piece.constructor.name.charAt(0)}]`;
                    piece.coordinateX = j;
                    piece.coordinateY = i;
                    return;
                }
            }
        }
    }
    printBoard() {
        let board = ``;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.boardMatrix[i][j] === ` [ ]`) {
                }
                board += this.boardMatrix[i][j];
            }
            board += `\n\n`;
        }
        console.log(board);
    }
}
class ChessPiece {
    constructor(board, coordinateX, coordinateY) {
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
    }
    getLocation() {
        console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`);
    }
}
class Rook extends ChessPiece {
    constructor(board, coordinateX, coordinateY) {
        super(board, coordinateX, coordinateY);
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
    }
    goDown(steps) {
        if (this.coordinateY + steps >= this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY - steps][this.coordinateX] = ` [ ]`;
    }
    goUp(steps) {
        if (this.coordinateY - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY + steps][this.coordinateX] = ` [ ]`;
    }
    goRight(steps) {
        if (this.coordinateX + steps >= this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateX += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY][this.coordinateX - steps] = ` [ ]`;
    }
    goLeft(steps) {
        if (this.coordinateX - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateY} , ${(this.coordinateX -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY][this.coordinateX + steps] = ` [ ]`;
    }
}
class Bishop extends ChessPiece {
    constructor(board, coordinateX, coordinateY) {
        super(board, coordinateX, coordinateY);
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
    }
    goRightDown(steps) {
        if (this.coordinateX + steps >= this.board.width ||
            this.coordinateY + steps >= this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY - steps][this.coordinateX - steps] = ` [ ]`;
    }
    goRightUp(steps) {
        if (this.coordinateX + steps >= this.board.width ||
            this.coordinateY - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY + steps][this.coordinateX - steps] = ` [ ]`;
    }
    goLeftDown(steps) {
        if (this.coordinateX - steps < 0 ||
            this.coordinateY + steps >= this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY - steps][this.coordinateX + steps] = ` [ ]`;
    }
    goLeftUp(steps) {
        if (this.coordinateY - steps < 0 || this.coordinateX - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY + steps][this.coordinateX + steps] = ` [ ]`;
    }
}
class Queen extends ChessPiece {
    constructor(board, coordinateX, coordinateY) {
        super(board, coordinateX, coordinateY);
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
    }
    goDown(steps) {
        if (this.coordinateY + steps >= this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY - steps][this.coordinateX] = ` [ ]`;
    }
    goUp(steps) {
        if (this.coordinateY - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY + steps][this.coordinateX] = ` [ ]`;
    }
    goRight(steps) {
        if (this.coordinateX + steps >= this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateX += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY][this.coordinateX - steps] = ` [ ]`;
    }
    goLeft(steps) {
        if (this.coordinateX - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateY} , ${(this.coordinateX -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY][this.coordinateX + steps] = ` [ ]`;
    }
    goRightDown(steps) {
        if (this.coordinateX + steps >= this.board.width ||
            this.coordinateY + steps >= this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY - steps][this.coordinateX - steps] = ` [ ]`;
    }
    goRightUp(steps) {
        if (this.coordinateX + steps >= this.board.width ||
            this.coordinateY - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY + steps][this.coordinateX - steps] = ` [ ]`;
    }
    goLeftDown(steps) {
        if (this.coordinateX - steps < 0 ||
            this.coordinateY + steps >= this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY - steps][this.coordinateX + steps] = ` [ ]`;
    }
    goLeftUp(steps) {
        if (this.coordinateY - steps < 0 || this.coordinateX - steps < 0) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`);
        this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
        this.board.boardMatrix[this.coordinateY + steps][this.coordinateX + steps] = ` [ ]`;
    }
}
class King extends ChessPiece {
    constructor(board, coordinateX, coordinateY) {
        super(board, coordinateX, coordinateY);
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
    }
    checkSteps(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return false;
        }
        return true;
    }
    goDown(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateY + steps >= this.board.height) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateX;
            }
            console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY += steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY - steps][this.coordinateX] = ` [ ]`;
        }
        return;
    }
    goUp(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateY - steps < 0) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateX;
            }
            console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY -= steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY + steps][this.coordinateX] = ` [ ]`;
        }
    }
    goRight(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateX + steps >= this.board.width) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateX;
            }
            console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateX += steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY][this.coordinateX - steps] = ` [ ]`;
        }
    }
    goLeft(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateX - steps < 0) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateX;
            }
            console.log(`the new position of the ${this.constructor.name} is (${this.coordinateY} , ${(this.coordinateX -= steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY][this.coordinateX + steps] = ` [ ]`;
        }
    }
    goRightDown(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateX + steps >= this.board.width ||
                this.coordinateY + steps >= this.board.height) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateX;
            }
            console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY - steps][this.coordinateX - steps] = ` [ ]`;
        }
    }
    goRightUp(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateX + steps >= this.board.width ||
                this.coordinateY - steps < 0) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateX;
            }
            console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY + steps][this.coordinateX - steps] = ` [ ]`;
        }
    }
    goLeftDown(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateX - steps < 0 ||
                this.coordinateY + steps >= this.board.height) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateY;
            }
            console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY - steps][this.coordinateX + steps] = ` [ ]`;
        }
    }
    goLeftUp(steps) {
        if (this.checkSteps(steps)) {
            if (this.coordinateY - steps < 0 || this.coordinateX - steps < 0) {
                console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
                return this.coordinateY;
            }
            console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`);
            this.board.boardMatrix[this.coordinateY][this.coordinateX] = ` [${this.constructor.name.charAt(0)}]`;
            this.board.boardMatrix[this.coordinateY + steps][this.coordinateX + steps] = ` [ ]`;
        }
    }
}
const ChessBoard = new Board(8, 8);
const rook1 = new Rook(ChessBoard, 0, 0);
const bishop1 = new Bishop(ChessBoard, 0, 4);
const queen1 = new Queen(ChessBoard, 0, 0);
const king1 = new King(ChessBoard, 0, 0);
// queen1.goRightDown(3)
// queen1.goRightUp(3)
// queen1.goDown(5)
ChessBoard.placePiece(queen1);
ChessBoard.placePiece(king1);
ChessBoard.placePiece(rook1);
ChessBoard.placePiece(bishop1);
// queen1.goRightDown(4)
king1.getLocation();
king1.goDown(1);
king1.goRightDown(1);
king1.goRightDown(1);
king1.goLeftDown(1);
king1.goLeftDown(1);
king1.goLeftDown(1);
king1.goLeftDown(1);
// rook1.goDown(3)
// rook1.goLeft(3)
// rook1.goRight(1)
ChessBoard.printBoard();
// ChessBoard.printBoard()
