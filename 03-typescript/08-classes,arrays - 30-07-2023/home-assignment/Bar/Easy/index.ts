class Board {
    width: number
    height: number
    listOfPieces: ChessPiece[] = []

    constructor(width: number, height: number, listOfPieces: ChessPiece[] = []) {
        this.width = width ?? 1;
        this.height = height ?? 1;
        this.listOfPieces = listOfPieces
    }

    isPositionAvailable(x: number, y: number) {
        if (x < 1 || x > this.width || y < 1 || y > this.height) {
            return false;
        }

        this.listOfPieces.forEach((piece) => {
            if (x === piece.width && y === piece.height) {
                return false;
            }
        })
        return true;
            
    }

    placePiece(piece: ChessPiece) {
        return piece
    }

    getArrayOfPieces() {
        console.log(this.listOfPieces);
    }
}

abstract class ChessPiece {
    board: Board
    width: number
    height: number

    constructor(board: Board, width: number, height: number) {
        this.board = board
        this.width = width
        this.height = height
        if (board.isPositionAvailable(this.width, this.height)) {
            board.listOfPieces.push(this);
        }
    }

    getLocation() {
        console.log(`(Piece's location: ${this.width},${this.height})`);
    }

    isValidSteps(x: number, y: number) {
        return true
    }

    move(stepsX: number, stepsY: number) {
        if (this.isValidSteps(stepsX, stepsY))
            try {
                if (this.board.isPositionAvailable(this.width + stepsX, this.height + stepsY)) {
                    this.width += stepsX
                    this.height += stepsY
                    this.getLocation()
                }
                else {
                    console.log("You can't go there");
                }
            }
            catch (out) {
                console.log(out);
            }
    }

    moveOnAxis(x: number, y: number) {
        if (this.canMoveOnAxis) {
            this.move(x, y)
        }
        else {
            console.log("You can't move there");
        }
    }

    moveOnDiagonal(x: number, y: number) {
        if (this.canMoveOnAxis) {
            this.move(x, y)
        }
        else {
            console.log("You can't move there");
        }
    }

    protected canMoveOnAxis: Boolean = false
    protected canMoveOnDiagonal: Boolean = false

    goRight(steps: number) {
        this.moveOnAxis(steps, 0)
    }

    goLeft(steps: number) {
        this.moveOnAxis(-steps, 0)
    }

    goUp(steps: number) {
        this.moveOnAxis(0, steps)

    }
    goDown(steps: number) {
        this.moveOnAxis(0, -steps)
    }

    goRightUp(steps: number) {
        this.moveOnDiagonal(steps, steps)
    }

    goLeftUp(steps: number) {
        this.moveOnDiagonal(-steps, steps)
    }
    goRightDown(steps: number) {
        this.moveOnDiagonal(steps, -steps)
    }
    goLeftDown(steps: number) {
        this.moveOnDiagonal(-steps, -steps)
    }

}

class Rook extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height)
        this.canMoveOnAxis = true;
    }
}


class Bishop extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height)
        this.canMoveOnDiagonal = true;
    }
}

class Queen extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height)
        this.canMoveOnAxis = true;
        this.canMoveOnDiagonal = true;
    }
}

class King extends ChessPiece {
    constructor(board: Board, width: number, height: number) {
        super(board, width, height)
        this.canMoveOnAxis = true;
        this.canMoveOnDiagonal = true;
    }

    override isValidSteps(x: number, y: number): boolean {
        if (Math.abs(x) > 1 || Math.abs(y) > 1) {
            console.log("The king can only move one space at a time!");
            return false;
        }

        return true;
    }
}

let board = new Board(10, 10)
let rook = new Rook(board, 4, 4)
let bishop = new Bishop(board, 2, 2)
let queen = new Queen(board, 6, 6)
let king = new King(board, 5, 5)



// bishop.goLeftUp(90)
// bishop.goRightUp(5)
// bishop.goRightDown(12)
// bishop.goLeftDown(4)

// queen.goRight(4)
// queen.goRightUp(4)

// king.goLeft(1)
// king.goDown(2)
// king.goLeftDown(1)
// king.goRight(2)



board.placePiece(new Rook(board, 4, 4))
board.placePiece(new Rook(board, 4, 4))
board.placePiece(new Rook(board, 4, 4))
board.getArrayOfPieces()



