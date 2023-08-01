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

class Rook extends Board {
    location1: number;
    location2: number;
    constructor(board: Board, location1: number, location2: number) {
        super(board.width, board.height);
        this.location1 = location1 ?? 2;
        this.location2 = location2 ?? 2;
    }

    getLocation() {
        console.log(`Point 1: ${NewLocation.location1} \nPoint 2: ${NewLocation.location2}`);
    }

    CheckLocation() {
        if (this.location1 > this.width || this.location2 > this.height)
            console.log(`The move is illegal`);
    }
    goRight() {
        if (this.location2 < this.width)
            this.location2++;
    }
}


let NewBoard = new Board(8, 10);
NewBoard.PrintBoard();

let NewLocation = new Rook(NewBoard, 4, 5);
NewLocation.getLocation();

NewLocation.CheckLocation();

NewLocation.goRight();