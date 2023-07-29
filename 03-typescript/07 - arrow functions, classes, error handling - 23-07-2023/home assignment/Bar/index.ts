class Board {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }
}

class Rook extends Board {
    rookWidth: number
    rookHeight: number

    constructor(board: Board, rookWidth: number, rookHeight: number) {
        super(board.width, board.height);
        this.rookWidth = rookWidth
        this.rookHeight = rookHeight
    }

    // canMove(newWidth: number, newHeight: number) {
    //     return newWidth >= 1 && newWidth <= this.width && newHeight >= 1 && newHeight <= this.height
    // }

    // move(newWidth: number, newHeight: number) {
    //     if (this.canMove(newWidth, newHeight)) {
    //         this.rookWidth = newWidth
    //         this.rookHeight = newHeight
    //     }
    //     else {
    //         console.log("You can't move there");
    //     }
    // }

    getLocation() {
        console.log(`(Rook's location: ${this.rookWidth},${this.rookHeight})`);
    }
    goRight(steps: number) {
        if ((this.rookWidth += steps) <= board.width) {
            return this.rookWidth
        }
        else {
            this.rookWidth -= steps
            console.log("You can't move there");
        }
        // let newWidth = this.rookWidth + steps;
        // this.move(newWidth, this.rookHeight)

    }

    goLeft(steps: number) {
        if ((this.rookWidth -= steps) > 0) {
            return this.rookWidth
        }
        else {
            this.rookWidth += steps
            console.log("You can't move there");
        }
    }

    goUp(steps: number) {
        if ((this.rookHeight += steps) <= board.height) {
            return this.rookHeight
        }
        else {
            this.rookHeight -= steps
            console.log("You can't move there");
        }
    }
    goDown(steps: number) {
        if ((this.rookHeight -= steps) > 0) {
            return this.rookHeight
        }
        else {
            this.rookHeight += steps
            console.log("You can't move there");
        }
    }
}


class Bishop extends Board {
    bishopWidth: number
    bishopHeight: number

    constructor(board: Board, bishopWidth: number, bishopHeight: number) {
        super(board.height, board.width)
        this.bishopHeight = bishopHeight
        this.bishopWidth = bishopWidth
    }
    getLocation() {
        console.log(`(Bishop's location: (${this.bishopHeight},${this.bishopWidth})`);
    }

    goRightUp(steps: number) {
        if (((this.bishopHeight += steps) <= board.height) && (this.bishopWidth += steps) <= board.width) {
            return this.bishopHeight && this.bishopWidth
        }
        else {
            this.bishopHeight -= steps
            console.log("You can't move there");
        }
    }

    goLeftUp(steps: number) {
        if (((this.bishopHeight += steps) <= board.height) && (this.bishopWidth -= steps) > 0) {
            return this.bishopHeight && this.bishopWidth
        }
        else {
            this.bishopHeight -= steps
            console.log("You can't move there");
        }
    }
    goRightDown(steps: number) {
        if ((this.bishopHeight -= steps) > 0 && (this.bishopWidth += steps) <= board.width) {
            return this.bishopHeight && this.bishopWidth
        }
        else {
            this.bishopHeight += steps
            console.log("You can't move there");
        }
    }
    goLeftDown(steps: number) {
        if (((this.bishopHeight -= steps) > 0) && (this.bishopWidth -= steps) > 0) {
            return this.bishopHeight && this.bishopWidth
        }
        else {
            this.bishopHeight += steps
            console.log("You can't move there");
        }
    }
}

class Queen extends Board {
    queenWidth: number
    queenHeight: number

    constructor(board: Board, bishopWidth: number, bishopHeight: number) {
        super(board.height, board.width)
        this.queenHeight = bishopHeight
        this.queenWidth = bishopWidth
    }

    getLocation() {
        console.log(`(Queen's location: (${this.queenHeight},${this.queenWidth})`);
    }

    goRightUp(steps: number) {
        if (((this.queenHeight += steps) <= board.height) && (this.queenWidth += steps) <= board.width) {
            return this.queenHeight && this.queenWidth
        }
        else {
            this.queenHeight -= steps
            console.log("You can't move there");
        }
    }

    goLeftUp(steps: number) {
        if (((this.queenHeight += steps) <= board.height) && (this.queenWidth -= steps) > 0) {
            return this.queenHeight && this.queenWidth
        }
        else {
            this.queenHeight -= steps
            console.log("You can't move there");
        }
    }
    goRightDown(steps: number) {
        if ((this.queenHeight -= steps) > 0 && (this.queenWidth += steps) <= board.width) {
            return this.queenHeight && this.queenWidth
        }
        else {
            this.queenHeight += steps
            console.log("You can't move there");
        }
    }
    goLeftDown(steps: number) {
        if (((this.queenHeight -= steps) > 0) && (this.queenWidth -= steps) > 0) {
            return this.queenHeight && this.queenWidth
        }
        else {
            this.queenHeight += steps
            console.log("You can't move there");
        }
    }
    goRight(steps: number) {
        if ((this.queenWidth += steps) <= board.width) {
            return this.queenWidth
        }
        else {
            this.queenWidth -= steps
            console.log("You can't move there");
        }
    }

    goLeft(steps: number) {
        if ((this.queenWidth -= steps) > 0) {
            return this.queenWidth
        }
        else {
            this.queenWidth += steps
            console.log("You can't move there");
        }
    }

    goUp(steps: number) {
        if ((this.queenHeight += steps) <= board.height) {
            return this.queenHeight
        }
        else {
            this.queenHeight -= steps
            console.log("You can't move there");
        }
    }
    goDown(steps: number) {
        if ((this.queenHeight -= steps) > 0) {
            return this.queenHeight
        }
        else {
            this.queenHeight += steps
            console.log("You can't move there");
        }
    }
}

class King extends Board {
    kingWidth: number
    kingHeight: number

    constructor(board: Board, kingWidth: number, kingHeight: number) {
        super(board.height, board.width)
        this.kingHeight = kingHeight
        this.kingWidth = kingWidth
    }

    getLocation() {
        console.log(`(King's location: (${this.kingHeight},${this.kingWidth})`);
    }

    goRightUp() {
        if (((this.kingHeight += 1) <= board.height) && (this.kingWidth += 1) <= board.width) {
            return this.kingHeight && this.kingWidth
        }
        else {
            this.kingHeight -= 1
            console.log("You can't move there");
        }
    }

    goLeftUp() {
        if (((this.kingHeight += 1) <= board.height) && (this.kingWidth -= 1) > 0) {
            return this.kingHeight && this.kingWidth
        }
        else {
            this.kingHeight -= 1
            console.log("You can't move there");
        }
    }
    goRightDown() {
        if ((this.kingHeight -= 1) > 0 && (this.kingWidth += 1) <= board.width) {
            return this.kingHeight && this.kingWidth
        }
        else {
            this.kingHeight += 1
            console.log("You can't move there");
        }
    }
    goLeftDown() {
        if (((this.kingHeight -= 1) > 0) && (this.kingWidth -= 1) > 0) {
            return this.kingHeight && this.kingWidth
        }
        else {
            this.kingHeight += 1
            console.log("You can't move there");
        }
    }
    goRight() {
        if ((this.kingWidth += 1) <= board.width) {
            return this.kingWidth
        }
        else {
            this.kingWidth -= 1
            console.log("You can't move there");
        }
    }

    goLeft() {
        if ((this.kingWidth -= 1) > 0) {
            return this.kingWidth
        }
        else {
            this.kingWidth += 1
            console.log("You can't move there");
        }
    }

    goUp() {
        if ((this.kingHeight += 1) <= board.height) {
            return this.kingHeight
        }
        else {
            this.kingHeight -= 1
            console.log("You can't move there");
        }
    }
    goDown() {
        if ((this.kingHeight -= 1) > 0) {
            return this.kingHeight
        }
        else {
            this.kingHeight += 1
            console.log("You can't move there");
        }
    }
}

let board = new Board(90, 90)
let rook = new Rook(board, 10, 10)
let bishop = new Bishop(board, 1, 1)
let queen = new Queen(board, 5, 5)
let king = new King(board, 1, 1)

// rook.goUp(10)
// rook.getLocation()

// bishop.goLeftUp(90)
// bishop.goRightUp(5)
// bishop.goRightDown(12)
// bishop.goLeftDown(4)
// bishop.getLocation()

// queen.goRight(4)
// queen.goRightUp(4)
// queen.getLocation()

// king.getLocation()
// king.goLeft()
// king.getLocation()
// king.goDown()
// king.getLocation()
// king.goLeftDown()
// king.getLocation()
// king.goRight()
// king.getLocation()


