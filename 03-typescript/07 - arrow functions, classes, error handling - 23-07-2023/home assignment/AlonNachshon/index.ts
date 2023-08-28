interface boardChessPiece{
  board: Board;
  x: number;
  y: number;
}

class Board{

  private boardWidth:number;
  private boardHeight:number;

  constructor(boardWidth:number, boardHeight:number){
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;

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

}

abstract class ChessPiece implements boardChessPiece {
  board: Board;
  x: number;
  y: number;
  
  constructor(board:Board ,x:number,y:number){
    this.board = board;
    this.x = x;
    this.y = y;
  }

  protected checkBoarder(steps:number,xAxis:boolean): boolean{
    if (steps <= 0) return false;
    if(xAxis){
      return steps <= this.board.getBoardWidth() ;
    }
    return steps <= this.board.getBoardHeight();
  }

  protected borderMoveError():void{
    console.log(`Border Error: invalid move.`);
  }
  protected pieceError(piece:ChessPiece):void{
    console.log(`Piece move Error: invalid number of steps move for ${piece}.`);
  }
  

  protected setX(x:number): void{
    this.x = x;
    console.log("moved X -> " + this.getLocation());
  }

  protected setY(y:number): void{
    this.y = y;
    console.log("moved Y ->" + this.getLocation());
  }

  protected setXY(x:number, y:number): void{
    this.y = y;
    this.x = x;
    console.log("moved XY ->" + this.getLocation());
  }

  protected right(steps:number): void{
    this.checkBoarder(steps + this.x, true) ? this.setX(steps + this.x):this.borderMoveError();
  }
  

  protected left(steps:number): void{
    this.checkBoarder(this.x - steps, true)? this.setX(this.x - steps):this.borderMoveError();
  }
  
  protected up(steps:number): void{
    this.checkBoarder((steps + this.y), false)? this.setY(steps + this.y):this.borderMoveError();
  }

  protected down(steps:number): void{
    this.checkBoarder((this.y - steps), false)? this.setY(this.y - steps):this.borderMoveError();
  }

  protected diagonal(x:number, y:number): void{
    let left = false, right = false, down = false, up = false ;

    if (x < 0){
      x = -x;
      left = this.checkBoarder(this.x - x, true);
    }else right = true;

    if (y < 0 ){
      y = -y;
      down = this.checkBoarder((this.y - y), false)
    }else up = true;
    
    if (left){
      if(up){
      this.left(x);
      this.up(y);
      }
      else if (down){
        this.left(x);
        this.down(y);
      }
      else{
        this.borderMoveError()
        return; 
      } 
    }

    else if(right){
      if(up){
        this.right(x);
        this.up(y);
      }
      else if(down){
        this.right(x);
        this.down(y);
      }
      else{
        this.borderMoveError()
        return; 
      } 

    }
    else{
      this.borderMoveError()
      return; 
    } 
  }

  public getLocation(): string{
    return `x: ${this.x} , y: ${this.y}`;
  }
}


class Rook extends ChessPiece {

  constructor(board:Board, x:number,y:number){
    super(board,x,y);
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
  super(board,x,y);

}

public goRightUp(steps:number): void{
  super.diagonal(steps, steps);
}

public goLeftUp(steps:number): void{
  super.diagonal(-steps, steps);
}

public goRightDown(steps:number): void{
  super.diagonal(steps, -steps);
}

public goLeftDown(steps:number): void{
  super.diagonal(-steps, -steps);
}

}


class Queen extends ChessPiece {

  constructor(board:Board, x:number,y:number){
    super(board,x,y);
  
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
    super.diagonal(steps, steps);
  }
  
  public goLeftUp(steps:number): void{
    super.diagonal(-steps, steps);
  }
  
  public goRightDown(steps:number): void{
    super.diagonal(steps, -steps);
  }
  
  public goLeftDown(steps:number): void{
    super.diagonal(-steps, -steps);
  }
  
  }

  
class King extends ChessPiece {
  max_steps:number = 1;

  constructor(board:Board, x:number,y:number){
    super(board,x,y);
  
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

  

const b1 = new Board(10,10);
console.log(b1.getBoardSize());

const r1 = new Rook(b1, 5, 5);
console.log("rq: " + r1.getLocation());

r1.goUp(1);
r1.goLeft(3);
r1.goRight(1);
r1.goRight(7);
r1.goRight(1);
r1.goLeft(10);
r1.goLeft(5);
r1.goUp(4);
r1.goDown(9)
r1.goDown(9)


const bis1 = new Bishop(b1, 4, 4);
console.log("bis1: " + bis1.getLocation());

bis1.goLeftDown(4)
bis1.goLeftDown(3);
bis1.goLeftUp(1);
bis1.goRightUp(9);
bis1.goLeftDown(5);
bis1.goRightDown(5);
bis1.goRightDown(4);

const q1 = new Queen(b1, 5,5);
console.log("q1: " + q1.getLocation());


const k1 = new King(b1, 10, 10);
console.log("k1: " + k1.getLocation());

k1.goUp();
k1.goDown();
k1.goLeftDown();
