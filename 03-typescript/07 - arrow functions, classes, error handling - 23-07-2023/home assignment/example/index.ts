class Board {
    constructor(private width: number,
                private height: number) {
        if (this.width < 0 || this.height < 0) {
            throw new RangeError("Board size must be positive");
        }
    }

    inBoard(x: number, y: number): boolean {
        if (x < 1 || x > this.width) {
            return false;
        }

        return y >= 1 && y <= this.height;
    }
}

abstract class ChessPiece {
    protected axisMove: boolean = true;
    protected diagonalMove: boolean = true;

    constructor(
        protected board: Board,
        protected x: number,
        protected y: number
    ) {
        if (!this.board.inBoard(this.x, this.y)) {
            throw new RangeError("Initial location not in board");
        }
    }

    goRight(steps: number = 1): void {
        if (this.axisMove) {
            this.step(steps, 0);
        }
    }

    goLeft(steps: number = 1): void {
        if (this.axisMove) {
            this.step(-steps, 0);
        }
    }

    goUp(steps: number = 1): void {
        if (this.axisMove) {
            this.step(0, -steps);
        }
    }

    goDown(steps: number = 1): void {
        if (this.axisMove) {
            this.step(0, steps);
        }
    }

    goRightUp(steps: number = 1): void {
        if (this.diagonalMove) {
            this.step(steps, -steps);
        }
    }

    goLeftUp(steps: number = 1): void {
        if (this.diagonalMove) {
            this.step(-steps, -steps);
        }
    }

    goRightDown(steps: number = 1): void {
        if (this.diagonalMove) {
            this.step(steps, steps);
        }
    }

    goLeftDown(steps: number = 1): void {
        if (this.diagonalMove) {
            this.step(-steps, steps);
        }
    }

    validateStepSize(steps: number) {}

    step(stepX: number, stepY: number): void {
        this.validateStepSize(stepX);
        this.validateStepSize(stepY);
        this.move(this.x + stepX, this.y + stepY);
    }

    move(newX: number, newY: number): void {
        if (!this.board.inBoard(newX, newY)) {
            console.log(`Move ignored: New location ${newX},${newY} after the move is outside the board.`);
        } else {
            this.x = newX;
            this.y = newY;
            this.reportLocation();
        }
    }

    reportLocation() {
        console.log(`Current location: ${this.x}, ${this.y}`);
    }
}

class Rook extends ChessPiece {
    constructor(board: Board, x: number, y: number) {
        super(board, x, y);
        this.diagonalMove = false;
    }
}

class Bishop extends ChessPiece {
    constructor(board: Board, x: number, y: number) {
        super(board, x, y);
        this.axisMove = false;
    }
}

class Queen extends ChessPiece {}

class King extends ChessPiece {
    override validateStepSize(steps: number) {
        let absStep: number = Math.abs(steps);
        if (steps !== 0 && steps !== 1) {
            throw new RangeError("King can only takes 1 step at a time");
        }
    }
}

const board = new Board(8, 8);
const rook1 = new Rook(board, 1, 1);
const bishop1 = new Bishop(board, 1, 1);
const queen1 = new Queen(board, 1, 1);
const king1 = new King(board, 1, 1);
rook1.goRight(7);
rook1.goUp(7);
rook1.goLeft(6);
rook1.goLeft(1);
rook1.goDown(7);
rook1.goDown(1);
king1.goDown(1);
rook1.goLeftDown(5);
