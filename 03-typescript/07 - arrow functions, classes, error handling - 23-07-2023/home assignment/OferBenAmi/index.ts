class Board {
  constructor(public width: number = 8, public height: number = 8) {
    this.width = width;
    this.height = height;
  }
  boardMatrix: number[][]= [];

  placePiece(piece: ChessPiece){
    // debugger;
    for (let i = 1; i <= this.height; i++) {
      for (let j = 1; j <= this.width; j++) {
        if(typeof this.boardMatrix[i][j] === `undefined`){
          piece.coordinateX = j;
          piece.coordinateY = i;
          return;
        }
      }
    }
  }
  printBoard() {
    let board: string = ``;
    for (let i = 1; i <= this.height; i++) {
      for (let j = 1; j <= this.width; j++) {
        if (this.boardMatrix[j][i] !== undefined) {
          board += ` [${this.constructor.name.charAt(0)}]`;
        } else board += ` [ ]`;
      }
      board += `\n\n`;
    }
    console.log(board);
  }
}

abstract class ChessPiece{
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ){
    this.board = board;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }
  getLocation() {
    console.log(
      `the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`
    );
  }
 
}
class Rook extends ChessPiece{
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    super(board,coordinateX,coordinateY)
  }
  
  goDown(steps: number) {
    if (this.coordinateX + steps > this.board.width) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${this.coordinateY})`
    );
  }
  goUp(steps: number) {
    if (this.coordinateX - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${this.coordinateY})`
    );
  }
  goRight(steps: number) {
    if (this.coordinateY + steps > this.board.height) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${this.constructor.name} is (${
        this.coordinateX
      } , ${(this.coordinateY += steps)})`
    );
  }
  goLeft(steps: number) {
    if (this.coordinateY - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${this.constructor.name} is (${
        this.coordinateX
      } , ${(this.coordinateY -= steps)})`
    );
  }
}

class Bishop  extends ChessPiece{
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    super(board,coordinateX,coordinateY)
    }
  goRightDown(steps: number) {
    if (
      this.coordinateX + steps > this.board.width ||
      this.coordinateY + steps > this.board.height
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`
    );
  }
  goRightUp(steps: number) {
    if (
      this.coordinateX - steps < 1 ||
      this.coordinateY + steps > this.board.height
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`
    );
  }
  goLeftDown(steps: number) {
    if (
      this.coordinateY - steps < 1 ||
      this.coordinateX + steps > this.board.width
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`
    );
  }
  goLeftUp(steps: number) {
    if (this.coordinateY - steps < 1 || this.coordinateX - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`
    );
  }
}

class Queen extends ChessPiece{
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    super(board,coordinateX,coordinateY)  
  }
  goDown(steps: number) {
    if (this.coordinateX + steps > this.board.width) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${this.coordinateY})`
    );
  }
  goUp(steps: number) {
    if (this.coordinateX - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${this.coordinateY})`
    );
  }
  goRight(steps: number) {
    if (this.coordinateY + steps > this.board.height) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${this.constructor.name} is (${
        this.coordinateX
      } , ${(this.coordinateY += steps)})`
    );
  }
  goLeft(steps: number) {
    if (this.coordinateY - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${this.constructor.name} is (${
        this.coordinateX
      } , ${(this.coordinateY -= steps)})`
    );
  }
  goRightDown(steps: number) {
    if (
      this.coordinateX + steps > this.board.width ||
      this.coordinateY + steps > this.board.height
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`
    );
  }
  goRightUp(steps: number) {
    if (
      this.coordinateX - steps < 1 ||
      this.coordinateY + steps > this.board.height
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`
    );
  }
  goLeftDown(steps: number) {
    if (
      this.coordinateY - steps < 1 ||
      this.coordinateX + steps > this.board.width
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`
    );
  }
  goLeftUp(steps: number) {
    if (this.coordinateY - steps < 1 || this.coordinateX - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`
    );
  }
}
class King extends ChessPiece{
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    super(board,coordinateX,coordinateY)  
    }
  goDown(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (this.coordinateX + steps > this.board.width) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${this.coordinateY})`
    );
  }
  goUp(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (this.coordinateX - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${this.coordinateY})`
    );
  }
  goRight(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (this.coordinateY + steps > this.board.height) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${this.constructor.name} is (${
        this.coordinateX
      } , ${(this.coordinateY += steps)})`
    );
  }
  goLeft(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (this.coordinateY - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${this.constructor.name} is (${
        this.coordinateX
      } , ${(this.coordinateY -= steps)})`
    );
  }
  goRightDown(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (
      this.coordinateX + steps > this.board.width ||
      this.coordinateY + steps > this.board.height
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${(this.coordinateY += steps)})`
    );
  }
  goRightUp(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (
      this.coordinateX - steps < 1 ||
      this.coordinateY + steps > this.board.height
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateX;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${(this.coordinateY += steps)})`
    );
  }
  goLeftDown(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (
      this.coordinateY - steps < 1 ||
      this.coordinateX + steps > this.board.width
    ) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX += steps)} , ${(this.coordinateY -= steps)})`
    );
  }
  goLeftUp(steps: number) {
    if (steps != 1) {
      console.log(
        `illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`
      );
      return;
    }
    if (this.coordinateY - steps < 1 || this.coordinateX - steps < 1) {
      console.log(
        `the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`
      );
      return this.coordinateY;
    }
    console.log(
      `the new position of the ${
        this.constructor.name
      } is (${(this.coordinateX -= steps)} , ${(this.coordinateY -= steps)})`
    );
  }
}
const ChessBoard = new Board(8, 8);

const rook1 = new Rook(ChessBoard, 1, 1);
const bishop1 = new Bishop(ChessBoard, 1, 1);
const queen1 = new Queen(ChessBoard, 1, 1);
const king1 = new King(ChessBoard, 1, 1);

queen1.goRightDown(3)
queen1.goRightUp(3)
queen1.goDown(5)
ChessBoard.placePiece(queen1)
ChessBoard.printBoard()