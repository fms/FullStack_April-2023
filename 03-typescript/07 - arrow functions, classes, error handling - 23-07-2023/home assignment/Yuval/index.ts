class Board {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }
}

let board = new Board(10, 10);

abstract class ChesePiece {
    board: Board;
    width: number;
    height: number;

    constructor(board: Board, width: number, height: number) {
        this.board = board;
        this.width = width;
        this.height = height;
    }

    getLocation() {
        console.log(`This piece's coordinates are (${this.width},${this.height})`);
    }

    space() {
        console.log("");
    }
}

class Rook extends ChesePiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height);
    }

    goRight(steps: number) {
        try {
            switch (this.width + steps <= this.board.width) {
                case true:
                    this.width += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRight on rook: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeft(steps: number) {
        try {
            switch (this.width - steps >= 1) {
                case true:
                    this.width -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeft on rook: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goUp(steps: number) {
        try {
            switch (this.height + steps <= this.board.height) {
                case true:
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goUp on rook: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goDown(steps: number) {
        try {
            switch (this.height - steps >= 1) {
                case true:
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goDown on rook: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }
}


class Bishop extends ChesePiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height);
    }

    goRightUp(steps: number) {
        try {
            switch (this.width + steps <= this.board.width && this.height + steps <= this.board.height) {
                case true:
                    this.width += steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRightUp on bishop: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeftUp(steps: number) {
        try {
            switch (this.width - steps >= 1 && this.height + steps <= this.board.height) {
                case true:
                    this.width -= steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeftUp on bishop: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goRightDown(steps: number) {
        try {
            switch (this.width + steps <= this.board.width && this.height - steps >= 1) {
                case true:
                    this.width += steps;
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRightDown on bishop: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeftDown(steps: number) {
        try {
            switch (this.width - steps >= 1 && this.height - steps >= 1) {
                case true:
                    this.width -= steps
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeftDown on bishop: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }
}

class Queen extends ChesePiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height);
    }

    goRight(steps: number) {
        try {
            switch (this.width + steps <= this.board.width) {
                case true:
                    this.width += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRight on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeft(steps: number) {
        try {
            switch (this.width - steps >= 1) {
                case true:
                    this.width -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeft on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goUp(steps: number) {
        try {
            switch (this.height + steps <= this.board.height) {
                case true:
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goUp on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goDown(steps: number) {
        try {
            switch (this.height - steps >= 1) {
                case true:
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goDown on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goRightUp(steps: number) {
        try {
            switch (this.width + steps <= this.board.width && this.height + steps <= this.board.height) {
                case true:
                    this.width += steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRightUp on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeftUp(steps: number) {
        try {
            switch (this.width - steps >= 1 && this.height + steps <= this.board.height) {
                case true:
                    this.width -= steps;
                    this.height += steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeftUp on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goRightDown(steps: number) {
        try {
            switch (this.width + steps <= this.board.width && this.height - steps >= 1) {
                case true:
                    this.width += steps;
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRightDown on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeftDown(steps: number) {
        try {
            switch (this.width - steps >= 1 && this.height - steps >= 1) {
                case true:
                    this.width -= steps
                    this.height -= steps;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeftDown on queen: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }
}

class King extends ChesePiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height);
    }

    goRight() {
        try {
            switch (this.width + 1 <= this.board.width) {
                case true:
                    this.width++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRight on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeft() {
        try {
            switch (this.width - 1 >= 1) {
                case true:
                    this.width--;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeft on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goUp() {
        try {
            switch (this.height + 1 <= this.board.height) {
                case true:
                    this.height++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goUp on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goDown() {
        try {
            switch (this.height - 1 >= 1) {
                case true:
                    this.height--;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goDown on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goRightUp() {
        try {
            switch (this.width + 1 <= this.board.width && this.height + 1 <= this.board.height) {
                case true:
                    this.width++;
                    this.height++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRightUp on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeftUp() {
        try {
            switch (this.width - 1 >= 1 && this.height + 1 <= this.board.height) {
                case true:
                    this.width--;
                    this.height++;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeftUp on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goRightDown() {
        try {
            switch (this.width + 1 <= this.board.width && this.height - 1 >= 1) {
                case true:
                    this.width++;
                    this.height--;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goRightDown on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }

    goLeftDown() {
        try {
            switch (this.width - 1 >= 1 && this.height - 1 >= 1) {
                case true:
                    this.width--;
                    this.height--;;
                    this.getLocation();
                    break;
                default:
                    throw new Error("Out of bounds!");
            }
        }
        catch (out) {
            if (out instanceof Error) {
                console.log(`Tried goLeftDown on king: ${out.message}`);
            }
            else {
                console.log(`caught error: ${out}`);
            }
        }
    }
}

let rook = new Rook(board, 3, 3);
rook.getLocation();
rook.goRight(1);
rook.space();

let bishop = new Bishop(board, 9, 5);
bishop.getLocation();
bishop.goLeftUp(4);
bishop.space();

let queen = new Queen(board, 3, 7);
queen.getLocation();
queen.goDown(3);
queen.goRightDown(2);
queen.space();

let king = new King(board, 5, 5);
king.getLocation();
king.goRight();
king.goRight();
king.goRight();
king.goRight();
king.goRight();
king.goRight();