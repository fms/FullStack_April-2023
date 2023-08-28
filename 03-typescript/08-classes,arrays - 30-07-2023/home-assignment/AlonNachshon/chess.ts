interface boardChessPiece{
  board: Board;
  x: number;
  y: number;
  name:string;
}

class Board{

  private boardWidth:number;
  private boardHeight:number;
  private playBoard: string[][];
  private boardStruct: string[][];
  

  constructor(boardWidth:number, boardHeight:number){
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;

    this.playBoard = this.initBoard();
    this.boardStruct = this.initBoard();
    
  }

  public setBoard(x:number, y:number){
    this.boardHeight = y;
    this.boardWidth = x;
  }

  public getBoardSize():string{
    return `H: ${this.boardHeight.toFixed(0) } , W: ${this.boardWidth.toFixed(0)}`;
  }

  public getBoardWidth():number{
    return this.boardWidth;
  }

  public getBoardHeight():number{
    return this.boardHeight;
  }

  public printBoard():void{
    let i:number;
    let sep:string = "__";

    console.log(`Board Status:`);

    for(i = 0; i < this.boardHeight; i++) {
      console.log(...this.playBoard[i]);
    }

    for(i = 1; i < this.getBoardWidth(); i *= 2){
      sep += sep
    }
    console.log(sep);

}

  private initBoard():string[][]{
    let newBoard:string[][] = new Array(this.boardHeight);
  
    let startB:string[] = ['□', '■'];
    let startW:string[] = startB.slice().reverse();
    let tmp:string[];

    for(let i=0 ; i < this.boardHeight; i++){
      newBoard[i] = [];
    }  

    for( let i = 0; i < this.boardHeight; i++){
    
      tmp = i % 2 == 0? startB.slice():startW.slice();
      
      for(let j=0 ; j< this.boardWidth; j++){

        let sqr:string = j % 2 == 0? tmp[0]:tmp[1];
        newBoard[i][j] = sqr;

      }
    }
    console.log(`A new board was created ${this.getBoardSize()}`);
    return newBoard;
  }

  public placePiece(piece: ChessPiece):void{
    this.playBoard[piece.y][piece.x] = piece.name;
    console.log(`'${piece.name}' in ${piece.getLocation()}`)
    this.printBoard()
  }

  public initPiece(piece: ChessPiece):void{
    // console.log(`${piece.x}, ${piece.y}`)
    if (this.isValidMove(piece.x, piece.y)){
      this.placePiece(piece);
    }else 
      this.initEror();
  }
  
  public isValidMove(x:number,y:number): boolean{
    return (this.checkBoarder(x,y))&& this.checkBoarder(x,y) && (this.isPosEmpty(x,y))
  }

  public revertPosition(x:number, y:number):boolean{
    // console.log(`this.playBoard[y][x] = ${this.playBoard[y][x]}`)
    // console.log(`this.boardStruct[y][x] = ${this.boardStruct[y][x]}`)
    this.playBoard[y][x] = this.boardStruct[y][x];
    return true;
  }

  private isPosEmpty(x:number, y:number): boolean{
    
    let flag = this.playBoard[y][x] === '□' || this.playBoard[y][x] === '■';
    if(flag)
      return true;
    
    return this.positionError(x,y);
  }

  private checkBoarder(x:number, y:number): boolean{
    // console.log( `${xAxis? "X: ": "Y: "}${steps} steps. `)
    return (x < this.getBoardWidth() && y < this.getBoardHeight() && x >= 0 && y >= 0)? true:this.borderMoveError();
  }

  private borderMoveError():boolean{
    console.log(`Border Error: move outside the board border, choose a point that's inside a ${this.getBoardSize()}`);
    return false;
  }

  private initEror():boolean{
    console.log(`Peice initiation Error.`);
    return false;
  }

  private positionError(x:number, y:number):boolean{
    console.log(`Position not available, initiate a position different than: (${x+1},${y+1}).`)
    return false;

  }

}

abstract class ChessPiece implements boardChessPiece {
  board: Board;
  x: number;
  y: number;
  name: string;
  
  constructor(board:Board ,x:number,y:number,name:string){
    this.board = board;
    this.x = x-1;
    this.y = y-1;
    this.name = name;
  }

  protected pieceError(piece:ChessPiece):void{
    console.log(`Piece move Error: invalid number of steps move for ${piece}.`);
  }
  
  protected setX(x:number): boolean{
    console.log(`X: ${this.x+1} -> ${x+1}`);
    this.x = x;
    this.board.placePiece(this);

    return true
  }

  protected setY(y:number): boolean{
    console.log(`Y: ${this.y+1} -> ${y+1}`);
    this.y = y;
    this.board.placePiece(this);
    return true
  }

  protected setXY(x:number, y:number): boolean{
    this.y = y;
    this.x = x;
    console.log(`X,Y: ${this.x},${this.y} -> ${x+1},${y+1}`);

    this.board.placePiece(this);

    return true
  }

  protected right(steps:number): boolean{
    return this.board.isValidMove(steps + this.x,this.y) ? this.board.revertPosition(this.x,this.y) && this.setX(steps + this.x):false;
  }

  protected left(steps:number): boolean{
    return this.board.isValidMove(this.x - steps,this.y)?  this.board.revertPosition(this.x,this.y) && this.setX(this.x - steps):false;
  }
  
  protected up(steps:number): boolean{
    return this.board.isValidMove(this.x, (this.y - steps))?  this.board.revertPosition(this.x,this.y) && this.setY(this.y - steps):false;

  }

  protected down(steps:number): boolean{
    return this.board.isValidMove(this.x, (steps + this.y))?  this.board.revertPosition(this.x,this.y) && this.setY(steps + this.y):false;
  }



  protected diagonal(x:number, y:number): boolean{
    x = this.x + x;
    y = this.y + y;
   return this.board.isValidMove(x,y)? this.board.revertPosition(this.x,this.y) && this.setXY(x,y):false;

  }

  public getLocation(): string{
    return `x: ${this.x+1} , y: ${this.y+1}`;
  }
}

class Rook extends ChessPiece {

  constructor(board:Board, x:number,y:number){
    super(board,x,y, 'R');
    this.board.initPiece(this);
  }

  public goRight(steps:number):void{
    super.right(steps);
  }
  public goLeft(steps:number):void{
    super.left(steps);
  }
  public goUp(steps:number):void{
    super.up(steps);
  }
  public goDown(steps:number):void{
    super.down(steps);
  }

}

class Bishop extends ChessPiece {

constructor(board:Board, x:number,y:number){
  super(board,x,y,'B');
  this.board.initPiece(this);
}

public goRightUp(steps:number): void{
  super.diagonal(steps, -steps);
}

public goLeftUp(steps:number): void{
  super.diagonal(-steps, -steps);
}

public goRightDown(steps:number): void{
  super.diagonal(steps, steps);
}

public goLeftDown(steps:number): void{
  super.diagonal(-steps, steps);
}

}

class Queen extends ChessPiece {

  constructor(board:Board, x:number,y:number){
    super(board,x,y,'Q');
    this.board.initPiece(this);
  
  }
  public goRight(steps:number):void{
    super.right(steps);
  }
  public goLeft(steps:number):void{
    super.left(steps);
  }
  public goUp(steps:number):void{
    super.up(steps);
  }
  public goDown(steps:number):void{
    super.down(steps);
  }

  public goRightUp(steps:number): void{
    super.diagonal(steps, -steps);
  }
  
  public goLeftUp(steps:number): void{
    super.diagonal(-steps, -steps);
  }
  
  public goRightDown(steps:number): void{
    super.diagonal(steps, steps);
  }
  
  public goLeftDown(steps:number): void{
    super.diagonal(-steps, steps);
  }
  
  }

class King extends ChessPiece {
  max_steps:number = 1;

  constructor(board:Board, x:number,y:number){
    super(board,x,y,'K');
    this.board.initPiece(this);
  }

  public goRight():void{
  
    super.right(this.max_steps);
  }
  public goLeft():void{
    super.left(this.max_steps);
  }
  public goUp():void{
    super.up(this.max_steps);
  }
  public goDown():void{
    super.down(this.max_steps);
  }

  public goRightUp(): void{
    super.diagonal(this.max_steps, this.max_steps);
  }
  
  public goLeftUp(): void{
    super.diagonal(-this.max_steps, this.max_steps);
  }
  
  public goRightDown(): void{
    super.diagonal(this.max_steps, -this.max_steps);
  }
  
  public goLeftDown(): void{
    super.diagonal(-this.max_steps, -this.max_steps);
  }
  
  }

  

const b1 = new Board(8,8);
b1.printBoard();


// const r1 = new Rook(b1, 8, 8);

// r1.goRight(1);
// r1.goUp(0);
// r1.goLeft(3);
// r1.goRight(10);
// r1.goDown(7);
// r1.goRight(3);
// r1.goRight(7);
// r1.goRight(1);
// r1.goLeft(10);
// r1.goLeft(5);
// r1.goUp(4);
// r1.goDown(9)
// r1.goDown(9)


// const bis1 = new Bishop(b1, 8, 7);
// console.log("bis1: " + bis1.getLocation());
// bis1.goLeftUp(3);
// bis1.goLeftDown(1);
// bis1.goLeftDown(3);
// bis1.goLeftUp(1);
// bis1.goRightUp(1);
// bis1.goLeftDown(5);
// bis1.goRightDown(5);
// bis1.goRightDown(4);

// const q1 = new Queen(b1, 5,7);
// console.log("q1: " + q1.getLocation());
// q1.goLeftUp(2)
// q1.goRightDown(1)
// q1.goRight(2);

// const k1 = new King(b1, 7, 7);
// console.log("k1: " + k1.getLocation());
// k1.goRight();
// k1.goLeft();
// k1.goLeft();
// k1.goUp();
// k1.goDown();
// k1.goLeftDown();
