// ### Easy
// Additions to the previous home assignment:
// 1. Add a method to the `Board` class to position a new piece on the board.
//     * `placePiece(piece: ChessPiece)`
//     * The new piece must not overlap existing pieces
// 1. Change the piece moving logic to fail if the new position in already taken on the board.
// 1. Add a method for printing the current layout of the board. Use the first letter of the class name to indicate a piece (i.e., R for **R**ook, Q for **Q**ueen, etc.)
// ♕♔♖♗
// let taken: any[] = []

let chessPieceArray: { [chess :string] :string[]} = {}


class Board {
    constructor(
        private width:number,
        private height:number,
        public listOfPieces: ChessPiece[] = []
        ){}

    inBoard(x:number , y:number) {
        if (x < 1 || this.width < x || y < 1 || this.height < y){
            return false
        } 
        return !this.listOfPieces.some(piece => x === piece.x && y === piece.y)
    }

    
    // showBoard() {
    //     let skeleBoard :string = ""
    //     for(let height = 1 ; height <= this.height ; height++) {
    //         if(this.listOfPieces.map(piece => {
    //             if(piece.y === height) {
    //                 skeleBoard += `|${chessPieceArray.chessLogo}|`
    //             }else {
    //                 skeleBoard += " | |" 
    //             }
    //         }))
    //             for(let width = 2 ; width <= this.width ; width++) {
    //                 if(this.listOfPieces.map(piece => {
    //                     if(piece.x === width){
    //                         skeleBoard += chessPieceArray.chessLogo
    //                     } else {
    //                         skeleBoard += " | |"
    //                     }
    //                 }))
    //                 if(width / this.width === 1) {
    //                     skeleBoard += "\n"
    //             }
    //         }
    //     }
    //         console.log(skeleBoard);
    // }


    printBoard(): void {
        for (let row = this.height; row >= 1; row--) {
            let rowStr = `${row}`;
            for (let col = 1; col <= this.width; col++) {
                const piece = this.listOfPieces.find(p => p.x === col && p.y === row);
                if (piece) {
                    rowStr += `|${piece.chessLogo}`;
                } else {
                    rowStr += '| |';
                }
            }
            console.log(rowStr + ` ${row}`);
        }
    }
    

    // onBoardArray(piece :ChessPiece){
    //     if(this.SameObject(this.listOfPieces,ChessObjPiece)) {
    //         console.log(`cant move, there is a chess piece over there.`);
    //     } else {
    //     ChessObjPiece.x = piece.x
    //     ChessObjPiece.y = piece.y
    //     this.listOfPieces.push(piece)
    //     console.log(this.listOfPieces)
    // }
    // }

    notOverLap(piece :ChessPiece) :boolean {
        if(piece.x === 0 ||  piece.y === 0) {
            return true
        } 
        return false
    }

    onBoardArray(piece :ChessPiece) {
        this.listOfPieces.forEach(x => {
            if(x.x === piece.x && x.y === piece.y){
                let pieceNum = this.listOfPieces.indexOf(piece)
                this.listOfPieces.splice(pieceNum,1)
                return true
            } 
        }) 
        return false
    }


    placePiece(piece :ChessPiece ,x:number,y:number) {
        if (this.notOverLap(piece)) {
        if(this.inBoard(piece.x + x ,piece.y + y)) {
            try {
                if(this.onBoardArray(piece)) {
                    console.log(`cant overlap`);
                } else {
                    piece.x += x
                    piece.y += y
                    this.listOfPieces.push(piece)
                    console.log(`placed ChessPiece`);
                    console.log(this.listOfPieces);
                }             
            } catch(out)  {
            throw new Error(`out of bonds ${out as Error}`)
            }
        } else {
            console.log(`cant place outside of the board`);
        }
    }
    }

    // placePiece(piece :ChessPiece , x:number , y:number) {
    //     if(this.placePiece2(piece,x,y)) {
    //         console.log(`cant go there.`);
    //     } else {
    //         piece.x += x;
    //         piece.y += y;
    //         this.listOfPieces.push(piece)
    //     }
    // }

//     placePiece2(piece :ChessPiece,x :number, y :number) {
//         if(this.inBoard(piece.x + x, piece.y + y)){
//             return true
//         }

//         for (const piecee of this.listOfPieces) {
//             if(x === piece.x && y === piece.y) {
//                 return true
//             }
//         }
//     }

}



let board = new Board(8,8)

abstract class ChessPiece{
    board :Board;
    x :number;
    y :number;
    constructor(
        board :Board ,
        x?:number,
        y?:number,
        public listOfPieces: ChessPiece[] =[],
        public chessLogo:string =``
        ) {
        this.board = board;
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    getLocation() {
        console.log(`the location of the Chesspiece is ${this.x},${this.y}`);
    }

    isValidStepsSize(x:number , y:number) :boolean {
        return true;
    }

    validSteps(x :number,y :number) :any{
        let piece :ChessPiece = this;
        let newx = piece.x += x;
        let newy = piece.y += y;
        this.listOfPieces.forEach((x) => { 
            if(x.x === newx && x.y === newy) {
                return true
            }
            return false
        });
    }

    move(stepsX :number, stepsY :number) {
            if(this.isValidStepsSize(stepsX,stepsY)) {
            try {
                if(this.board.inBoard(this.x + stepsX,this.y + stepsY)){
                    this.x += stepsX;
                    this.y += stepsY;
                    this.getLocation();
                } else {
                    throw new Error("Out of bonds")
                }
            }
            catch(out){
                console.log(`cant move to ${(out as Error).message}`);
            }
        }
    }

    protected supportAxis :boolean = false

    protected supportDiagonal :boolean = false

    moveAxis(x :number ,y :number){
        if(this.supportAxis){
        this.move(x,y)
        } else {
            console.log("Cant move there");
        }
    }

    moveDiagonal(x:number,y:number){
        if(this.supportDiagonal){
            this.move(x,y)
            } else {
                console.log("Cant move there");
            }
    }


    goRight(steps :number) {
        this.moveAxis(steps ,0)
    }
    goLeft(steps :number) {
        this.moveAxis(-steps ,0)
    }
    goUp(steps :number) {
        this.moveAxis(0 ,steps)
    }
    goDown(steps :number) {
        this.moveAxis(0 ,-steps)
    }
    goRightUp(steps :number) {
        this.moveDiagonal(steps ,steps)
    }
    goRightDown(steps :number) {
        this.moveDiagonal(steps ,-steps)
    }
    goLeftUp(steps :number) {
        this.moveDiagonal(-steps ,steps)
    }
    goLeftDown(steps :number) {
        this.moveDiagonal(-steps ,-steps)
    }
}

class Rook extends ChessPiece {
    constructor(x ?:number , y ?:number ,chessLogo:string = `♖`) {
        super(board,x,y);
        this.supportAxis = true
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.chessLogo = chessLogo
    }
}

class Bishop extends ChessPiece {
    constructor( x ?:number , y? :number,chessLogo:string = `♗`){
        super(board,x,y);
        this.supportDiagonal = true
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.chessLogo = chessLogo
    }
}

class Queen extends ChessPiece {
    constructor( x? :number , y? :number,chessLogo:string = `♕`){
        super(board,x,y);
        this.supportAxis = true
        this.supportDiagonal = true
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.chessLogo = chessLogo
    }
}

class King extends ChessPiece {
    constructor(x? :number , y? :number,chessLogo:string = `♔`){
        super(board,x,y);
        this.supportAxis = true
        this.supportDiagonal = true
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.chessLogo = chessLogo
    }

    override isValidStepsSize(x :number, y :number) :boolean {
        if (Math.abs(x) > 1 || Math.abs(x) > y) {
            console.log(`the king can only move 1 step at a time`);
            return false
        }
            return true
    }
}

let firstRook = new Rook();
let firstQueen = new Queen();
let firstKing = new King();
let firstBishop = new Bishop();
board.placePiece(firstRook,2,2)
board.placePiece(firstRook,2,2)
board.placePiece(firstQueen,2,2)
board.placePiece(firstKing,1,1)
board.placePiece(firstBishop,5,5)
firstRook.getLocation()
firstQueen.getLocation()
firstKing.getLocation()
firstBishop.getLocation()
console.log(board.listOfPieces);

debugger;
board.printBoard();
