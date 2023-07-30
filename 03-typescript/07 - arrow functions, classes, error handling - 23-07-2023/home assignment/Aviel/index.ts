

//             only Easy level 


class Board {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
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
        return `The location_range is: [${this.x},${this.y}\n]`;
        
    }

    goRight(steps: number) {
        const x1 = this.x 
        if (this.x + steps <= this.board.width) {
            this.x += steps;
            return `Because you moved right ${steps} steps on the x axis, the calc is ${x1} + ${steps}\nand The new location is: [${this.x},${this.y}]`;
            
        } else {
            return `You can't move right ${steps} steps, the new location is outside the board.`;
        }
    }
    goLeft(steps: number) {
        const x1 = this.x 
        if (this.x - steps >= 0) {
            this.x -= steps;
            return `Because you moved left ${steps} steps on the x axis , the calc is ${x1} - ${steps}\nThe new location is: [${this.x}, ${this.y}]`;
        } else {
            return `Cannot move left, The new location is outside the board`;
        }
    }
    goUp(steps: number) {
        const y1 = this.y 
        if (this.y + steps <= this.board.height) {
            this.y += steps;
            return `Because you moved up ${steps} steps on the y axis , the calc is ${y1} + ${steps}\n The new location is: [${this.x}, ${this.y}]`;
        } else {
            return `Cannot move up, The new location is outside the board`;
        }
    }
    goDown(steps: number) {
        const y1 = this.y 
        if (this.y - steps >= 0) {
            this.y -= steps;
            return `Because you moved up ${steps} steps on the y axis , the calc is ${y1} - ${steps}\n The new location is: [${this.x}, ${this.y}]`;
        } else {
            return `Cannot move down ${steps} steps, The new location is outside the board`;
        }
    }
}


const board: Board = new Board(7, 9);   // x , y this is the maximum range of the board





const rook: Rook = new Rook(board, 4, 2);    //  The location_range
console.log(rook);
console.log(rook.getLocation());
console.log(rook.goRight(3));     //steps is 3
console.log(rook.goLeft(2));
console.log(rook.goUp(4));
console.log(rook.goDown(1));







