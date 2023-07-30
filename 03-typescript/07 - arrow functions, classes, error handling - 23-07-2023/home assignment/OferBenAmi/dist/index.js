"use strict";
class Board {
    constructor(width = 8, height = 8) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
}
const ChessBoard = new Board(8, 8);
class Rook {
    constructor(board, coordinateX, coordinateY) {
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.board = board;
        this.coordinateX =
            coordinateX > this.board.width || coordinateX < 1 ? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
        this.coordinateY =
            coordinateY > this.board.height || coordinateY < 1 ? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
    }
    getLocation() {
        console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`);
    }
    printBoard() {
        let board = ``;
        for (let i = 1; i <= this.board.height; i++) {
            for (let j = 1; j <= this.board.width; j++) {
                if (this.coordinateX === i && this.coordinateY === j) {
                    board += ` [R]`;
                }
                else
                    board += ` [ ]`;
            }
            board += `\n\n`;
        }
        console.log(board);
    }
    goDown(steps) {
        if (this.coordinateX + steps > this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${this.coordinateY})`);
    }
    goUp(steps) {
        if (this.coordinateX - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${this.coordinateY})`);
    }
    goRight(steps) {
        if (this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY += steps)})`);
    }
    goLeft(steps) {
        if (this.coordinateY - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY -= steps)})`);
    }
}
class Bishop {
    constructor(board, coordinateX, coordinateY) {
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.board = board;
        this.coordinateX =
            coordinateX > this.board.width || coordinateX < 1 ? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
        this.coordinateY =
            coordinateY > this.board.height || coordinateY < 1 ? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
    }
    getLocation() {
        console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`);
    }
    printBoard() {
        let board = ``;
        for (let i = 1; i <= this.board.height; i++) {
            for (let j = 1; j <= this.board.width; j++) {
                if (this.coordinateX === i && this.coordinateY === j) {
                    board += ` [B]`;
                }
                else
                    board += ` [ ]`;
            }
            board += `\n\n`;
        }
        console.log(board);
    }
    goRightDown(steps) {
        if (this.coordinateX + steps > this.board.width ||
            this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`);
    }
    goRightUp(steps) {
        if (this.coordinateX - steps < 1 ||
            this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`);
    }
    goLeftDown(steps) {
        if (this.coordinateY - steps < 1 ||
            this.coordinateX + steps > this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`);
    }
    goLeftUp(steps) {
        if (this.coordinateY - steps < 1 || this.coordinateX - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`);
    }
}
class Queen {
    constructor(board, coordinateX, coordinateY) {
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.board = board;
        this.coordinateX =
            coordinateX > this.board.width || coordinateX < 1 ? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
        this.coordinateY =
            coordinateY > this.board.height || coordinateY < 1 ? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
    }
    getLocation() {
        console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`);
    }
    printBoard() {
        let board = ``;
        for (let i = 1; i <= this.board.height; i++) {
            for (let j = 1; j <= this.board.width; j++) {
                if (this.coordinateX === i && this.coordinateY === j) {
                    board += ` [Q]`;
                }
                else
                    board += ` [ ]`;
            }
            board += `\n\n`;
        }
        console.log(board);
    }
    goDown(steps) {
        if (this.coordinateX + steps > this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${this.coordinateY})`);
    }
    goUp(steps) {
        if (this.coordinateX - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${this.coordinateY})`);
    }
    goRight(steps) {
        if (this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY += steps)})`);
    }
    goLeft(steps) {
        if (this.coordinateY - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY -= steps)})`);
    }
    goRightDown(steps) {
        if (this.coordinateX + steps > this.board.width ||
            this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`);
    }
    goRightUp(steps) {
        if (this.coordinateX - steps < 1 ||
            this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`);
    }
    goLeftDown(steps) {
        if (this.coordinateY - steps < 1 ||
            this.coordinateX + steps > this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`);
    }
    goLeftUp(steps) {
        if (this.coordinateY - steps < 1 || this.coordinateX - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`);
    }
}
class King {
    constructor(board, coordinateX, coordinateY) {
        this.board = board;
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.board = board;
        this.coordinateX =
            coordinateX > this.board.width || coordinateX < 1 ? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
        this.coordinateY =
            coordinateY > this.board.height || coordinateY < 1 ? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
    }
    getLocation() {
        console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`);
    }
    printBoard() {
        let board = ``;
        for (let i = 1; i <= this.board.height; i++) {
            for (let j = 1; j <= this.board.width; j++) {
                if (this.coordinateX === i && this.coordinateY === j) {
                    board += ` [K]`;
                }
                else
                    board += ` [ ]`;
            }
            board += `\n\n`;
        }
        console.log(board);
    }
    goDown(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateX + steps > this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${this.coordinateY})`);
    }
    goUp(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateX - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${this.coordinateY})`);
    }
    goRight(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY += steps)})`);
    }
    goLeft(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateY - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${(this.coordinateY -= steps)})`);
    }
    goRightDown(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateX + steps > this.board.width ||
            this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`);
    }
    goRightUp(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateX - steps < 1 ||
            this.coordinateY + steps > this.board.height) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateX;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`);
    }
    goLeftDown(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateY - steps < 1 ||
            this.coordinateX + steps > this.board.width) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`);
    }
    goLeftUp(steps) {
        if (steps != 1) {
            console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`);
            return;
        }
        if (this.coordinateY - steps < 1 || this.coordinateX - steps < 1) {
            console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
            return this.coordinateY;
        }
        console.log(`the new position of the ${this.constructor.name} is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`);
    }
}
const rook1 = new Rook(ChessBoard, 1, 1);
const bishop1 = new Bishop(ChessBoard, 1, 1);
const queen1 = new Queen(ChessBoard, 8, 8);
const king1 = new King(ChessBoard, 1, 1);
king1.goRightDown(1);
king1.printBoard();
