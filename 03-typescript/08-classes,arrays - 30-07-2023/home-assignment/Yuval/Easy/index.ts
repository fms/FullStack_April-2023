const pieces: ChessPiece[] = [];
class Board {
    private width: number;
    private height: number;

    constructor(width?: number, height?: number) {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }

    inBoard(x: number, y:number) : boolean {
        if (x < 1 || this.width < x) {
            return false;
        }

        return 1 <= y && y <= this.height;
    }
    

    placePiece(piece: ChessPiece) {
        if(this.inBoard(piece.width, piece.height) && !piece.checkAll(pieces)) {
            pieces.push(piece);
            piece.getLocation();
            console.log(pieces);
        }
        else {
            piece.width = -1;
            piece.height = -1;
            console.log(`Can't place a piece there, please try again.`);
        }
    }

    layout() {
        // let boardLayout: string[] = [];
        // for(let index = 0; index < pieces.length; index++) {
        //     if(pieces[index] instanceof Rook) {
        //         boardLayout.push(`R - ${pieces[index].getLocation()}`);
        //     }
        // }
        pieces.forEach(x => console.log(x));
    }
}

let board = new Board(10, 10);

abstract class ChessPiece {
    board: Board;
    width: number;
    height: number;

    constructor(board: Board, width: number, height: number) {
        this.board = board;
        this.width = width;
        this.height = height;
    }

    getLocation() : string {
        return `${this.width},${this.height}`;
    }

    doesExist(piece: ChessPiece): boolean {
        if(this.width == piece.width && this.height == piece.height) {
            return true;
        }
        return false;
    }

    checkAll(pieces: ChessPiece[]): boolean {
        for(let index = 0; index < pieces.length; index++) {
            if(this.doesExist(pieces[index])) {
                return true;
            }
        }
        return false;
    }

    isValidStepSize(x: number, y:number): boolean {
        return true;
    }

    move(stepsX: number, stepsY:number) {
        if (this.isValidStepSize(stepsX, stepsY)) {
            try {
                if (this.board.inBoard(this.width + stepsX, this.height + stepsY)) {
                    this.height += stepsY;
                    this.width += stepsX;
                    this.getLocation();
                }
                else {
                        throw new Error("Out of bounds!");
                }
            }
            catch (out) {
                console.log(`Can't move to ${(out as Error).message}`);
            }
        }
    }

    space() {
        console.log("");
    }

    moveAxis(x:number, y:number) {
        if (this.supportsAxis) {
            this.move(x, y);
        }
        else {
            console.log(`Can't move like that!`);
        }
    }

    moveDiagonal(x:number, y:number) {
        if (this.supportsDiagonal ) {
            this.move(x, y);
        }
        else {
            console.log(`Can't move like that!`);
        }
    }

    protected supportsAxis: boolean = false;

    protected supportsDiagonal: boolean = false;

    goRight(steps: number) {
            this.moveAxis(steps, 0);
    }

    goLeft(steps: number) {
        this.moveAxis(-steps, 0);
    }

    goUp(steps: number) {
            this.moveAxis(0, steps);
    }

    goDown(steps: number) {
        this.moveAxis(0, -steps);
    }

    goRightUp(steps: number) {
        this.moveDiagonal(steps, steps);
    }

    goLeftUp(steps: number) {
        this.moveDiagonal(-steps, steps);
    }

    goRightDown(steps: number) {
        this.moveDiagonal(steps, -steps);
    }

    goLeftDown(steps: number) {
        this.moveDiagonal(-steps, -steps);
    }
}

class Rook extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height)
        this.supportsAxis = true;
    }
}


class Bishop extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height);
        this.supportsDiagonal = true;
    }
}

class Queen extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height);
        this.supportsAxis = true;
        this.supportsDiagonal = true;
    }
}

class King extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height);
        this.supportsAxis = true;
        this.supportsDiagonal = true;
    }

    override isValidStepSize(x: number, y: number): boolean {
        if (Math.abs(x) > 1 || Math.abs(y) > 1) {
            console.log("The king can only move one space at a time!");
            return false;
        }

        return true;
    }
}

let rook = new Rook(board, 3, 3);
let bishop = new Bishop(board, 9, 5);
let queen = new Queen(board, 3, 7);
let king = new King(board, 5, 5);
let rook2 = new Rook(board, 9, 5);

board.placePiece(rook);
board.placePiece(bishop);
board.placePiece(queen);
board.placePiece(king);
board.placePiece(rook2);
board.layout();

