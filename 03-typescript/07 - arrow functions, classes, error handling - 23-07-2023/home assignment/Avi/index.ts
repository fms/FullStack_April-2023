class Board {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }
    PrintBoard() {
        console.log(`Width: ${NewBoard.width} \nHeight: ${NewBoard.height}`);
    }
}

class Rook {
    location1: number;
    location2: number;
    board: Board;
    constructor(board: Board, location1: number, location2: number) {
        this.board = board;
        this.location1 = location1 ?? 1;
        this.location2 = location2 ?? 1;
    }
    getLocation() {
        if (this.location1 >= 1 && this.location2 >= 1) {
            if (this.location1 <= this.board.width && this.location2 <= this.board.height) {
                console.log(`\nRook Location: ${this.location2},${this.location1}`);
            }
            else {
                console.log(`The move is illegal`);
            }
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goRight(right: number) {
        this.location1 += right;
        this.getLocation();
    }
    goLeft(left: number) {
        this.location1 -= left;
        this.getLocation();
    }
    goUp(up: number) {
        this.location2 += up;
        this.getLocation();
    }
    goDown(down: number) {
        this.location2 -= down;
        this.getLocation();
    }
}

class Bishop {
    location3: number;
    location4: number;
    board: Board;
    static NewLocation: number;
    location1: any;
    location2: any;
    constructor(board: Board, location3: number, location4: number) {
        this.board = board;
        this.location3 = location3 ?? 1;
        this.location4 = location4 ?? 1;
    }
    getLocation() {
        if (this.location3 >= 1 && this.location4 >= 1) {
            if (this.location3 <= this.board.width && this.location4 <= this.board.height) {
                console.log(`\nBishop Location: ${this.location4},${this.location3}`);
            }
            else {
                console.log(`The move is illegal`);
            }
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goRightUp(goRightUp: number) {
        this.location3 += goRightUp;
        this.location4 += goRightUp;
        this.getLocation();
    }
    goLeftUp(goLeftUp: number) {
        this.location3 -= goLeftUp;
        this.location4 += goLeftUp;
        this.getLocation();
    }
    goRightDown(goRightDown: number) {
        this.location3 += goRightDown;
        this.location4 -= goRightDown;
        this.getLocation();
    }
    goLeftDown(goLeftDown: number) {
        this.location4 -= goLeftDown;
        this.location3 -= goLeftDown;
        this.getLocation();
    }
    
}
class Queen {
    location5: number;
    location6: number;
    board: Board;
    constructor(board: Board, location5: number, location6: number) {
        this.board = board;
        this.location5 = location5 ?? 1;
        this.location6 = location6 ?? 1;
    }
    getLocation() {
        if (this.location5 >= 1 && this.location6 >= 1) {
            if (this.location5 <= this.board.width && this.location6 <= this.board.height) {
                console.log(`\nQueen Location: ${this.location6},${this.location5}`);
            }
            else {
                console.log(`The move is illegal`);
            }
        }
        else {
            console.log(`The move is illegal`);
        }
    }
    goRightUp(goRightUp: number) {
        this.location5 += goRightUp;
        this.location6 += goRightUp;
        this.getLocation();
    }
    goLeftUp(goLeftUp: number) {
        this.location5 -= goLeftUp;
        this.location6 += goLeftUp;
        this.getLocation();
    }
    goRightDown(goRightDown: number) {
        this.location5 += goRightDown;
        this.location6 -= goRightDown;
        this.getLocation();
    }
    goLeftDown(goLeftDown: number) {
        this.location5 -= goLeftDown;
        this.location6 -= goLeftDown;
        this.getLocation();
    }
    goRight(right: number) {
        this.location5 += right;
        this.getLocation();
    }
    goLeft(left: number) {
        this.location5 -= left;
        this.getLocation();
    }
    goUp(up: number) {
        this.location6 += up;
        this.getLocation();
    }
    goDown(down: number) {
        this.location6 -= down;
        this.getLocation();
    }
}

function chekLocation(rook: Rook, bishop: Bishop) {
    if (rook.location1 === bishop.location3 || rook.location2 === bishop.location4) {
        console.log(`The place is occupied`);
    }
}

let NewBoard = new Board(8, 8);
console.log(`**********Board**********`);

///**********Board**********///
NewBoard.PrintBoard();

let NewLocationRook = new Rook(NewBoard, 1, 1);
let NewLocationBishop = new Bishop(NewBoard, 3, 1);
let NewLocationQueen = new Queen(NewBoard, 4, 1);

console.log(`**********Rook**********`);
///**********Rook**********///

NewLocationRook.goRight(0);
// NewLocationRook.goLeft(0);
// NewLocationRook.goUp(0);
// NewLocationRook.goDown(0);

console.log(`**********Bishop**********`);
///**********Bishop**********///

NewLocationBishop.goRightUp(0);
// NewLocationBishop.goLeftUp(0);
// NewLocationBishop.goRightDown(0);
// NewLocationBishop.goLeftDown(0);

console.log(`**********Queen**********`);
///**********Queen**********///

NewLocationQueen.goRightUp(0);
// NewLocationQueen.goLeftUp(0);
// NewLocationQueen.goRightDown(0);
// NewLocationQueen.goLeftDown(0);

// NewLocationQueen.goRight(0);
// NewLocationQueen.goLeft(0);
// NewLocationQueen.goUp(0);
// NewLocationQueen.goDown(0);






