class Board {
    chessPieces: ChessPiece[] = [];
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    isInBoard(x: number, y: number): boolean {
        if (x < 1 || this.width < x) {
            return false;
        }
        return 1 <= y && y <= this.height;
    }

    checkOverlap(x: number, y: number): boolean {
        if (this.chessPieces.length > 0) {
            for (var _ = 0; _ < this.chessPieces.length; _++) {
                if (x == this.chessPieces[_].currentX && y == this.chessPieces[_].currentY) {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return true;
        }
    }

    placePiece(piece: ChessPiece, x: number, y: number) {
        piece.currentX = x;
        piece.currentY = y;
        this.chessPieces.push(piece);
    }

    boardLayout() {
        this.chessPieces.forEach((piece) => console.log(`${this.chessPieces[this.chessPieces.indexOf(piece)].constructor.name.slice(0, 1)} (${piece.currentX}, ${piece.currentY})`))
    }
}

abstract class ChessPiece {
    currentX: number;
    currentY: number;
    protected supportsAxis: boolean = false;
    protected supportsDiag: boolean = false;
    protected isKing: boolean = false;

    constructor(public board: Board, startX: number, startY: number) {
        if (board.isInBoard(startX, startY)) {
            if (board.checkOverlap(startX, startY)) {
                board.placePiece(this, startX, startY);
            } else {
                console.log("There is allready a piece in that spot.")
                board.chessPieces.pop()
            }
        } else {
            console.log(`Piece was placed out of board borders.`);
        }
    }

    getLocation() {
        console.log(`This piece coordinates are (${this.currentX}, ${this.currentY})`);
    }

    move(stepsX: number, stepsY: number) {
        if (this.isKing && (Math.abs(stepsX) > 1 || Math.abs(stepsY) > 1)) {
            console.log(`The King can't move more than 1 step.`);
        } else {
            if (this.board.isInBoard(this.currentX + stepsX, this.currentY + stepsY)) {
                this.currentX += stepsX;
                this.currentY += stepsY;
                this.getLocation();
            } else {
                return console.log(`Move not valid.`)
            }
        }
    }

    moveOnAxis(stepsX: number, stepsY: number) {
        if (this.supportsAxis) {
            this.move(stepsX, stepsY)
        } else {
            console.log(`Can't move like that!`)
        }
    }
    moveOnDiag(stepsX: number, stepsY: number) {
        if (this.supportsAxis) {
            this.move(stepsX, stepsY)
        } else {
            console.log(`Can't move like that!`)
        }
    }

    goRight(steps: number) {
        this.moveOnAxis(steps, 0);
    }
    goLeft(steps: number) {
        this.moveOnAxis(-steps, 0);
    }
    goUp(steps: number) {
        this.moveOnAxis(0, steps);
    }
    goDown(steps: number) {
        this.moveOnAxis(0, -steps);
    }
    goRightUp(stepsX: number, stepsY: number) {
        this.moveOnDiag(stepsX, stepsY);
    }
    goLeftUp(stepsX: number, stepsY: number) {
        this.moveOnDiag(-stepsX, stepsY);
    }
    goRightDown(stepsX: number, stepsY: number) {
        this.moveOnDiag(stepsX, -stepsY);
    }
    goLeftDown(stepsX: number, stepsY: number) {
        this.moveOnDiag(-stepsX, -stepsY);
    }
}

class Rook extends ChessPiece {
    constructor(board: Board, x: number, y: number) {
        super(board, x, y)
        this.supportsAxis = true;
    }
}

class Bishop extends ChessPiece {
    constructor(board: Board, x: number, y: number) {
        super(board, x, y);
        this.supportsDiag = true;
    };
}

class Queen extends ChessPiece {
    constructor(board: Board, x: number, y: number) {
        super(board, x, y)
        this.supportsDiag = true;
        this.supportsAxis = true;
    }
}

class King extends ChessPiece {
    constructor(board: Board, x: number, y: number) {
        super(board, x, y)
        this.supportsDiag = true;
        this.supportsAxis = true;
        this.isKing = true;
    }
}