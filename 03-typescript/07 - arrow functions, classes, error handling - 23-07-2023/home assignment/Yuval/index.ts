class Board {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }
}

let board = new Board(10, 10);

abstract class ChessPiece {
    board: Board;
    width: number;
    height: number;
    name: string;

    constructor(board: Board, width: number, height: number, name: string) {
        this.board = board;
        this.width = width;
        this.height = height;
        this.name = name;
    }

    getLocation() {
        console.log(`This piece's coordinates are (${this.width},${this.height})`);
    }

    space() {
        console.log("");
    }

    goRight(steps: number) {
        switch (this.name) {
            case "rook":
            case "queen":
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
                        console.log(`Tried goRight on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                            console.log(`Tried goRight on ${this.name}: ${out.message}`);
                        }
                        else {
                            console.log(`caught error: ${out}`);
                        }
                    }
                }
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }

    goLeft(steps: number) {
        switch (this.name) {
            case "rook":
            case "queen":
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
                        console.log(`Tried goLeft on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                            console.log(`Tried goLeft on ${this.name}: ${out.message}`);
                        }
                        else {
                            console.log(`caught error: ${out}`);
                        }
                    }
                }
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }

    goUp(steps: number) {
        switch (this.name) {
            case "rook":
            case "queen":
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
                        console.log(`Tried goUp on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }

    goDown(steps: number) {
        switch (this.name) {
            case "rook":
            case "queen":
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
                        console.log(`Tried goDown on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                            console.log(`Tried goDown on ${this.name}: ${out.message}`);
                        }
                        else {
                            console.log(`caught error: ${out}`);
                        }
                    }
                }
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }

    goRightUp(steps: number) {
        switch (this.name) {
            case "bishop":
            case "queen":
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
                        console.log(`Tried goRightUp on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                            console.log(`Tried goRightUp on ${this.name}: ${out.message}`);
                        }
                        else {
                            console.log(`caught error: ${out}`);
                        }
                    }
                }
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }

    goLeftUp(steps: number) {
        switch (this.name) {
            case "bishop":
            case "queen":
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
                        console.log(`Tried goLeftUp on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                            console.log(`Tried goLeftUp on ${this.name}: ${out.message}`);
                        }
                        else {
                            console.log(`caught error: ${out}`);
                        }
                    }
                }
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }

    goRightDown(steps: number) {
        switch (this.name) {
            case "bishop":
            case "queen":
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
                        console.log(`Tried goRightDown on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                            console.log(`Tried goRightDown on ${this.name}: ${out.message}`);
                        }
                        else {
                            console.log(`caught error: ${out}`);
                        }
                    }
                }
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }

    goLeftDown(steps: number) {
        switch (this.name) {
            case "bishop":
            case "queen":
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
                        console.log(`Tried goLeftDown on ${this.name}: ${out.message}`);
                    }
                    else {
                        console.log(`caught error: ${out}`);
                    }
                }
                break;
            case "king":
                if (steps == 1) {
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
                else {
                    console.log("The king can only move one space at a time!");
                }
                break;
            default:
                console.log(`The ${this.name} can't move like that!`);
                break;
        }
    }
}

class Rook extends ChessPiece {
    constructor(board: Board, width: number, height: number, name: string) {
        super(board, width, height, name);
    }
}


class Bishop extends ChessPiece {
    constructor(board: Board, width: number, height: number, name: string) {
        super(board, width, height, name);
    }
}

class Queen extends ChessPiece {
    constructor(board: Board, width: number, height: number, name: string) {
        super(board, width, height, name);
    }
}

class King extends ChessPiece {
    constructor(board: Board, width: number, height: number, name: string) {
        super(board, width, height, name);
    }
}

let rook = new Rook(board, 3, 3, "rook");
rook.getLocation();
rook.goRight(1);
rook.goLeftDown(2);
rook.goUp(7);
rook.goUp(2);
rook.space();

let bishop = new Bishop(board, 9, 5, "bishop");
bishop.getLocation();
bishop.goLeftDown(3);
bishop.goDown(5);
bishop.goLeftUp(7);
bishop.space();

let queen = new Queen(board, 3, 7, "queen");
queen.getLocation();
queen.goLeft(2);
queen.goRightDown(5);
queen.goUp(10);
queen.space();

let king = new King(board, 5, 5, "king");
king.getLocation();
king.goDown(1);
king.goLeftUp(1);
king.goRight(3);
king.goDown(1);
king.goDown(1);
king.goDown(1);
king.goDown(1);
king.goDown(1);

