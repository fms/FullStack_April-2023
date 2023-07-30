class Board{
    width: number;
    height: number;

    constructor (width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

class Rook{
    currentX: number;
    currentY: number;

    constructor(board: object, startX: number, startY: number) {
        if (board.xValue >= startX >= 1 && board.yValue >= startY >= 1) {
            this.currentX = startX;
            this.currentY = startY;
        } else {
            console.log("Out of board borders.")
            this.currentX = NaN;
            this.currentY = NaN;
        }
    }

    getLocation() {
        console.log(`The rook's location is ${this.currentX} on the X axis and ${this.currentY} on the Y axis.`)
    }
    // borderCheck(){
    //     if 
    // }

    goRight(steps: number) {
        this.currentX += steps;
        this.getLocation()
    }
    goLeft(steps: number) {
        this.currentX -= steps;
        this.getLocation()
    }
    goUp(steps: number) {
        this.currentY += steps;
        this.getLocation()
    }
    goDown(steps: number) {
        this.currentY -= steps;
        this.getLocation()
    }
}

class Bishop extends Rook{
    constructor(board: object, startX: number, startY: number) {
        super(board, startX, startY)
    }

    goRightUp(steps: number) {
        this.currentX += steps;
        this.goUp(steps);
    }
    goLeftUp(steps: number) {
        this.currentX -= steps;
        this.goUp(steps);
    }
    goRightDown(steps: number) {
        this.currentX += steps;
        this.goDown(steps);
    }
    goLeftDown(steps: number) {
        this.currentX -= steps;
        this.goDown(steps);
    }
}

// let board1 = new Board(500, 500);
// let rook1 = new Rook(board1, 250, 250);
// let bishop1 = new Bishop(board1, 200, 200);