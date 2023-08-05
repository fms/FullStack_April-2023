"use strict";
var direction;
(function (direction) {
    direction[direction["up"] = 12] = "up";
    direction[direction["rightUp"] = 1] = "rightUp";
    direction[direction["right"] = 3] = "right";
    direction[direction["rightDown"] = 4] = "rightDown";
    direction[direction["down"] = 6] = "down";
    direction[direction["downLeft"] = 7] = "downLeft";
    direction[direction["left"] = 9] = "left";
    direction[direction["leftUp"] = 10] = "leftUp";
})(direction || (direction = {}));
function CheckValidate(board, cordinates, steps, check) {
    switch (check) {
        case 12: {
            console.log("up check");
            cordinates[1] + steps < board.width ? cordinates[1] += steps : console.log("cant move up");
            return cordinates;
        }
        case 1: {
            console.log("rightUp check");
            (cordinates[0] + steps < board.width && cordinates[1] + steps < board.width) ? (cordinates[0] += steps, cordinates[1] += steps) : console.log("cant move rightUp");
            return cordinates;
        }
        case 3: {
            console.log("right check");
            cordinates[0] + steps < board.width ? cordinates[0] += steps : console.log("cant move right");
            console.log(`cordinates[0] = ${cordinates[0]} inside the switch`);
            return cordinates;
        }
        case 4: {
            console.log("rightDown check");
            (cordinates[0] + steps < board.width && cordinates[1] - steps < 0) ? (cordinates[0] += steps, cordinates[1] -= steps) : console.log("cant move rightDown");
            return cordinates;
        }
        case 6: {
            console.log("down check");
            cordinates[1] - steps > 0 ? cordinates[1] -= steps : console.log("cant move down");
            return cordinates;
        }
        case 7: {
            console.log("downLeft check");
            (cordinates[0] - steps < 0 && cordinates[1] - steps < 0) ? (cordinates[0] -= steps, cordinates[1] -= steps) : console.log("cant move downLeft");
            return cordinates;
        }
        case 9: {
            console.log("left check");
            (cordinates[0] - steps > 0) ? cordinates[0] -= steps : console.log("cant move left");
            return cordinates;
        }
        case 10: {
            console.log("leftUp check");
            (cordinates[0] - steps < board.width && cordinates[1] + steps < board.width) ? (cordinates[0] -= steps, cordinates[1] += steps) : console.log("cant move leftUp");
            return cordinates;
        }
    }
}
class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rook {
    constructor(board, x, y) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }
    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRight(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.right);
        console.log(this.cordinates);
    }
    goLeft(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.left);
    }
    goUp(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.up);
    }
    goDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.down);
    }
}
class Queen {
    constructor(board, x, y) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }
    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRight(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.right);
        console.log(this.cordinates);
    }
    goLeft(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.left);
    }
    goUp(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.up);
    }
    goDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.down);
    }
    goRightup(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightUp);
    }
    goLeftup(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.leftUp);
    }
    goRightDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightDown);
    }
    goLeftDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.downLeft);
    }
}
class Bishop {
    constructor(board, x, y) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }
    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRightup(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightUp);
    }
    goLeftup(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.leftUp);
    }
    goRightDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightDown);
    }
    goLeftDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.downLeft);
    }
}
class King {
    constructor(board, x, y, steps) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }
    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRight(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.right);
        console.log(this.cordinates);
    }
    goLeft(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.left);
    }
    goUp(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.up);
    }
    goDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.down);
    }
    goRightup(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.rightUp);
    }
    goLeftup(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.leftUp);
    }
    goRightDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.rightDown);
    }
    goLeftDown(steps) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.downLeft);
    }
}
let gameBoard = new Board(10, 10);
let rook1 = new Rook(gameBoard, 1, 1);
rook1.getLocation();
rook1.goLeft(50);
console.log("--------------------------------");
console.log("rook data after moving :");
rook1.getLocation();
