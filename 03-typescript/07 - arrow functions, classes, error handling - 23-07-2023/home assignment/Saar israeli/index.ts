// Easy
// Write a class named Board
// In the constructor accept two numbers for the width and height of the board.
// The board starts at coordinates 1,1.
// <hr>

// Write a class named Rook
// In the constructor accept a board and two numbers for the initial coordinates of the rook.
// Confirm that the rook is inside the board.
// Include a method <strong>getLocation()</strong> for reporting the current position of the rook.
// Include functions for moving on the board:
// <strong>goRight()</strong>
// <strong>goLeft()</strong>
// <strong>goUp()</strong>
// <strong>goDown()</strong>
// Accept as a parameter the number of steps
// Only allow movement if the new position is still inside the board (<em>Hint:</em> Write a method to report if a set of coordinates is inside the board)
// Report the new position of the rook.
// <hr>

// Write a class named Bishop that behaves in the same manner as the Rook.
// Include these methods for moving on the board:
// <strong>goRightUp()</strong>
// <strong>goLeftUp()</strong>
// <strong>goRightDown()</strong>
// <strong>goLeftDown()</strong>
// <hr>

// Medium
// Write a class named Queen that behaves in the same manner as the Rook and Bishop combined.
// <hr>

// Write a class named King that behaves in the same manner as the Queen, but is limited to a single step.
// <hr>

// Advanced
// Read up on Abstract classes.
// Convert Rook, Bishop, Queen and King to use a new abstract class ChessPiece.

class Board {
    width :number = 8;
    height :number = 8;
    constructor() {
        this.width = 8;
        this.height = 8;
    }

}



abstract class ChessPiece extends Board {
    playerWidth :number;
    playerHeight :number;
    piece :any;

    constructor(widthCoordinate :number ,secondCoordinate :number , width :Board, height :Board, piece :any) {
        super()
        this.playerWidth = widthCoordinate;
        this.playerHeight = secondCoordinate;
        this.piece = piece;
    }

    getLocation() {
        console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
    }


    goRight(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        } else {
        switch (this.piece) {
            case Rook:
            case Queen:
                (numberOfSteps) ;{
                this.playerWidth += numberOfSteps;
                this.playerWidth > this.width ? console.log(`${this.playerWidth -= numberOfSteps} cannot move outside of the board.`)
                : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            }
            break;
            case Bishop:
                console.log(`Cant move like this.`);
            break;
            case King:
                this.playerWidth += 1;
                this.playerWidth > this.width ? console.log(`${this.playerWidth -= 1} cannot move outside of the board.`)
                : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }

    goLeft(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        } else {
        switch (this.piece) {
            case Rook:
            case Queen:
                (numberOfSteps) ;{
                this.playerWidth -= numberOfSteps;
                this.playerWidth < 1 ? console.log(`${this.playerWidth += numberOfSteps} cannot move outside of the board.`)
                : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            }
            break;
            case Bishop:
                console.log(`Cant move like this.`);
            break;
            case King:
                {
                this.playerWidth -= 1;
                this.playerWidth < 1 ? console.log(`${this.playerWidth += 1} cannot move outside of the board.`)
                : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            }
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }

    goUp(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        } else {
        switch (this.piece) {
            case Rook:
            case Queen:
                (numberOfSteps) ;{
                    this.playerHeight += numberOfSteps;
                    this.playerHeight > this.height ? console.log(`${this.playerHeight -= numberOfSteps} cannot move outside of the board.`) 
                    : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            }
            break;
            case Bishop:
                console.log(`Cant move like this.`);
            break;
            case King:
                {
                this.playerHeight += 1;
                this.playerHeight > this.height ? console.log(`${this.playerHeight -= 1} cannot move outside of the board.`)
                : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            }
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }

    goDown(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        } else {
        switch (this.piece) {
            case Rook:
            case Queen:
                (numberOfSteps) ;{
                this.playerHeight -= numberOfSteps;
                this.playerHeight < 1 ? console.log(`${this.playerHeight += numberOfSteps} cannot move outside of the board.`) 
                : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            }
            break;
            case Bishop:
                console.log(`Cant move like this.`);
            break;
            case King:
                {
                this.playerHeight -= 1;
                this.playerHeight < 1 ? console.log(`${this.playerHeight += 1} cannot move outside of the board.`)
                : console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location on the board`);
            }
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }


    goRightUp(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        } else {
        switch (this.piece) {
            case Bishop:
            case Queen:
                (numberOfSteps) ;{
                this.playerWidth += numberOfSteps;
                this.playerHeight += numberOfSteps;
                this.playerWidth > this.width ? console.log((`${this.playerWidth -= numberOfSteps} cannot move outside of the board.`)) 
                : this.playerHeight > this.height ? console.log((`${this.playerHeight -= numberOfSteps} cannot move outside of the board.`)) :
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
            }
            break;
            case Rook:
                console.log(`Cant move like this.`);
            break;
            case King:
                {
                    this.playerWidth += 1;
                    this.playerHeight += 1;
                    this.playerWidth > this.width ? console.log((`${this.playerWidth -= 1} cannot move outside of the board.`)) 
                    : this.playerHeight > this.height ? console.log((`${this.playerHeight -= 1} cannot move outside of the board.`)) :
                    console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
                }
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }

    goLeftUp(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        } else {
        switch (this.piece) {
            case Bishop:
            case Queen:
                (numberOfSteps) ;{
                this.playerWidth -= numberOfSteps;
                this.playerHeight += numberOfSteps;
                this.playerWidth < 1 ? console.log((`${this.playerWidth += numberOfSteps} cannot move outside of the board.`)) 
                : this.playerHeight > this.height ? console.log((`${this.playerHeight -= numberOfSteps} cannot move outside of the board.`)) :
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
            }
            break;
            case Rook:
                console.log(`Cant move like this.`);
            break;
            case King:
                {
                    this.playerWidth -= 1;
                    this.playerHeight += 1;
                    this.playerWidth < 1 ? console.log((`${this.playerWidth += 1} cannot move outside of the board.`)) 
                    : this.playerHeight > this.width ? console.log((`${this.playerHeight -= 1} cannot move outside of the board.`)) :
                    console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
                }
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }

    goRightDown(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        } else {
        switch (this.piece) {
            case Bishop:
            case Queen:
                (numberOfSteps) ;{
                this.playerWidth += numberOfSteps;
                this.playerHeight -= numberOfSteps;
                this.playerWidth > this.width ? console.log((`${this.playerWidth -= numberOfSteps} cannot move outside of the board.`)) 
                : this.playerHeight < 1 ? console.log((`${this.playerHeight += numberOfSteps} cannot move outside of the board.`)) :
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
            }
            break;
            case Rook:
                console.log(`Cant move like this.`);
            break;
            case King:
                {
                    this.playerWidth += 1;
                    this.playerHeight -= 1;
                    this.playerWidth > this.width ? console.log((`${this.playerWidth -= 1} cannot move outside of the board.`)) 
                    : this.playerHeight < 1 ? console.log((`${this.playerHeight += 1} cannot move outside of the board.`)) :
                    console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
                }
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }

    goLeftDown(numberOfSteps :number) {
        if (typeof numberOfSteps !== "number"){
            return(`Error, invalid number`);
        }
        else {
        switch (this.piece) {
            case Bishop:
            case Queen:
                (numberOfSteps) ;{
                this.playerWidth -= numberOfSteps;
                this.playerHeight -= numberOfSteps;
                this.playerWidth < 1 ? console.log((`${this.playerWidth += numberOfSteps} cannot move outside of the board.`)) 
                : this.playerHeight < 1 ? console.log((`${this.playerHeight += numberOfSteps} cannot move outside of the board.`)) :
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
            }
            break;
            case Rook:
                console.log(`Cant move like this.`);
            break;
            case King:
                {
                this.playerWidth -= 1;
                this.playerHeight -= 1;
                this.playerWidth < 1 ? console.log((`${this.playerWidth += 1} cannot move outside of the board.`)) 
                : this.playerHeight < 1 ? console.log((`${this.playerHeight += 1} cannot move outside of the board.`)) :
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the new location`);
                }
            break;
            default:
                console.log(`${this.playerWidth},${this.playerHeight} "/" ${this.width},${this.height} is the location on the board`)
            break;}
        }
    }
}



class Rook extends ChessPiece {
    playerWidth :number;
    playerHeight :number;

    constructor(widthCoordinate :number ,secondCoordinate :number , width :Board, height :Board) {
        super(1,1,width,height,Rook);
        this.playerWidth = widthCoordinate;
        this.playerHeight = secondCoordinate;
    }
}


class Bishop extends ChessPiece {
    playerWidth :number;
    playerHeight :number;

    constructor(bishopWidth :number, bishopHeight :number , width :Board , height :Board,) {
        super(2,2,width , height,Bishop);
        this.playerWidth = bishopWidth;
        this.playerHeight = bishopHeight;
    }
}



class Queen extends ChessPiece{
    playerWidth :number;
    playerHeight :number;
    constructor(playerWidth :number, playerHeight :number, width :Board , height :Board) {
        super(4,4,width , height,Queen)
        this.playerWidth = playerWidth;
        this.playerHeight = playerHeight;
    }
}



class King extends ChessPiece {
    playerWidth :number;
    playerHeight :number;
    constructor(playerWidth :number, playerHeight :number, width :Board , height :Board) {
        super(5,5,width,height,King)
        this.playerWidth = playerWidth;
        this.playerHeight = playerHeight;
    }
}




let firstRook = new Rook(1,5,new Board,new Board)
let firstBishop = new Bishop(1,2,new Board,new Board)
let firstQueen = new Queen(4,4,new Board,new Board)
let firstKing = new King(5,5,new Board,new Board)
firstRook.getLocation();
firstBishop.getLocation();
firstQueen.getLocation();
firstKing.getLocation();
