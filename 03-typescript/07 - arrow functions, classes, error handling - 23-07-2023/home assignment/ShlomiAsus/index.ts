enum direction {
    up = 12,
    rightUp = 1,
    right = 3,
    rightDown = 4,
    down = 6,
    downLeft = 7,
    left = 9,
    leftUp = 10,
}

function CheckValidate(board: Board, cordinates: Array<number>, steps: number, check: direction): number[] {
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
            console.log(`cordinates[0] = ${cordinates[0]} inside the switch`)
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
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}
class Rook {
    board: Board;
    y: number;
    x: number;
    cordinates: Array<number>;
    constructor(board: Board, x: Number, y: Number) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }

    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRight(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.right);
        console.log(this.cordinates);
    }
    goLeft(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.left);
    }
    goUp(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.up);
    }
    goDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.down);
    }
}

class Queen {
    board: Board;
    y: number;
    x: number;
    cordinates: Array<number>;
    constructor(board: Board, x: Number, y: Number) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }

    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRight(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.right);
        console.log(this.cordinates);
    }
    goLeft(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.left);
    }
    goUp(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.up);
    }
    goDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.down);
    }
    goRightup(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightUp);
    }
    goLeftup(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.leftUp);
    }
    goRightDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightDown);
    }
    goLeftDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.downLeft);
    }
}
class Bishop {
    board: Board;
    y: number;
    x: number;
    cordinates: Array<number>;
    constructor(board: Board, x: Number, y: Number) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }
    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRightup(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightUp);
    }
    goLeftup(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.leftUp);
    }
    goRightDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.rightDown);
    }
    goLeftDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, steps, direction.downLeft);
    }
}
class King {
    board: Board;
    y: number;
    x: number;
    cordinates: Array<number>;
    constructor(board: Board, x: Number, y: Number,steps: number) {
        this.board = board;
        this.x = 1;
        this.y = 1;
        this.cordinates = [this.x, this.y];
    }

    getLocation() {
        console.log(`This is the location width:` + `${this.cordinates[0]}` + ` and height:` + `${this.cordinates[1]}`);
    }
    goRight(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.right);
        console.log(this.cordinates);
    }
    goLeft(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.left);
    }
    goUp(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.up);
    }
    goDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.down);
    }
    goRightup(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.rightUp);
    }
    goLeftup(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.leftUp);
    }
    goRightDown(steps: number) {
        this.cordinates = CheckValidate(this.board, this.cordinates, 1, direction.rightDown);
    }
    goLeftDown(steps: number) {
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
