
// -------------------------------
//             Easy
// -------------------------------

class Board {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    Below() {
        console.log('--------------------------------------');
    }
}

class Rook {
    x: number;
    y: number;
    board: Board;
    constructor(board: Board, x: number, y: number) {
        this.board = board;
        this.x = x;
        this.y = y;
    }
    getLocation() {
        return `The location is: [${this.x},${this.y}]`;
    }

    goRight(steps: number) {
        if (this.x + steps <= this.board.width) {
            this.x += steps;
            return `You moved right ${steps} steps,\nThe new location is: [${this.x},${this.y}]`;
        } else {
            return `You can't move right ${steps} steps, the new location is outside the board.`;
        }
    }
    goLeft(steps: number) {
        if (this.x - steps >= 0) {
            this.x -= steps;
            return `You moved left, The new location is: [${this.x}, ${this.y}]`;
        } else {
            return `Cannot move left, The new location is outside the board`;
        }
    }
    goUp(steps: number) {
        if (this.y + steps <= this.board.height) {
            this.y += steps;
            return `You moved up, The new location is: [${this.x}, ${this.y}]`;
        } else {
            return `Cannot move up, The new location is outside the board`;
        }
    }
    goDown(steps: number) {
        if (this.y - steps >= 0) {
            this.y -= steps;
            return `You moved down,\nThe new location is: [${this.x},${this.y}]`;
        } else {
            return `Cannot move down, The new location is outside the board`;
        }
    }
}

class Bishop extends Rook {
    y: number;
    x: number;
    goRightUp(steps: number) {
        if (this.y + steps <= this.board.height && this.x + steps <= this.board.width) {
            this.x += steps;
            this.y += steps;
            return `You moved Right-Up,\nThe new location is: [${this.x},${this.y}]`;
        } else {
            return `Cannot move Right-Up, The new location is outside the board`;
        }
    }
    goLeftUp(steps: number) {
        if (this.y + steps <= this.board.height && this.x - steps >= 0) {
            this.x -= steps;
            this.y += steps;
            return `You moved Left-Up,\nThe new location is: [${this.x},${this.y}]`;
        } else {
            return `Cannot move Left-Up, The new location is outside the board`;
        }
    }
    goRightDown(steps: number) {
        if (this.y - steps <= this.board.height && this.x + steps <= this.board.width) {
            this.x += steps;
            this.y -= steps;
            return `You moved Right-Down,\nThe new location is: [${this.x},${this.y}]`;
        } else {
            return `Cannot move Right-Down, The new location is outside the board`;
        }
    }
    goLeftDown(steps: number) {
        if (this.y - steps <= this.board.height && this.x - steps >= 0) {
            this.x -= steps;
            this.y -= steps;
            return `You moved Left-Down,\nThe new location is: [${this.x},${this.y}]`;
        } else {
            return `Cannot move Left-Down, The new location is outside the board`;
        }
    }
}
const board: Board = new Board(5, 5);
board.Below();
console.log('Board');
board.Below();
console.log(board);
board.Below();
console.log('Rook');
board.Below();
const rook: Rook = new Rook(board, 1, 1);
console.log(rook);
console.log(rook.getLocation());
console.log(rook.goRight(1));
console.log(rook.goLeft(1));
console.log(rook.goUp(1));
console.log(rook.goDown(1));
board.Below();
console.log('Bishop');
board.Below();
const bishop: Bishop = new Bishop(board, 1, 1);
console.log(bishop.getLocation());
console.log(bishop.goRightUp(1));
console.log(bishop.goRightDown(1));
console.log(bishop.goLeftUp(1));
console.log(bishop.goLeftDown(1));


// -------------------------------
//             Medium
// -------------------------------

class Queen extends Bishop {
    // The Queen class inherits methods from both Rook and Bishop classes
    // No additional methods needed for this class
}

enum Operations {
    right,
    left,
    down,
    up,
    rightUp,
    rightDown,
    leftUp,
    leftDown,
}

class King extends Queen {
    x: number;
    y: number;
    isOnBoard(x: number, y: number) {
        return x >= 1 && x <= this.board.width && y >= 1 && y <= this.board.height;
    }

    moveTo(op: Operations) { 
        let txt = '';
        switch (op) {
            case Operations.right:
                txt += 'Right';
                this.move(1, 0);
                break;
            case Operations.left:
                txt += 'Left';
                this.move(-1, 0);
                break;
            case Operations.down:
                txt += 'Down';
                this.move(0, -1);
                break;
            case Operations.up:
                txt += 'Up';
                this.move(0, 1);
                break;
            case Operations.rightUp:
                txt += 'Right Up';
                this.move(1, 1);
                break;
            case Operations.rightDown:
                txt += 'Right Down';
                this.move(1, -1);
                break;
            case Operations.leftUp:
                txt += 'Left Up';
                this.move(-1, 1);
                break;
            case Operations.leftDown:
                txt += 'Left Down';
                this.move(-1, -1);
                break;
        }
        console.log(`You moved ${txt} to [${this.x},${this.y}]`);
    }
    move(newx: number, newy: number) {
        const newX = this.x + newx;
        const newY = this.y + newy;
        if (this.isOnBoard(newX, newY)) {
            this.x = newX;
            this.y = newY;
        } else {
            console.log("Cannot move. The new location is outside the board.");
        }
    }
}

board.Below();
console.log('King');
board.Below();
const king: King = new King(board, 5, 5);
console.log(king.getLocation()); // מצב תחילי של המלך
king.moveTo(Operations.left);
king.moveTo(Operations.leftDown);
king.moveTo(Operations.rightUp);
king.moveTo(Operations.rightUp);
console.log(king.getLocation()); // המצב החדש של המלך

