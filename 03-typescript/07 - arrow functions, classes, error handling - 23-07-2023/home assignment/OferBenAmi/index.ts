class Board {
  constructor(public width: number = 8, public height: number = 8) {
    this.width = width;
    this.height = height;
  }
}
const ChessBoard = new Board(8, 8);


class Rook {
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    this.board = board;
    this.coordinateX = (coordinateX > this.board.width || coordinateX < 1 )? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
    this.coordinateY = (coordinateY > this.board.height || coordinateY < 1)? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
  }
  getLocation(){
    console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`)
  }
  goRight(steps:number){
    if(this.coordinateX + steps > this.board.width){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX += steps} , ${this.coordinateY})`);
  }
  goLeft(steps:number){
    if(this.coordinateX - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -= steps} , ${this.coordinateY})`);
  }
  goUp(steps:number){
    if(this.coordinateY + steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY += steps})`);
  }
  goDown(steps:number){
    if(this.coordinateY - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY-= steps})`);
  }
}

class Bishop {
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    this.board = board;
    this.coordinateX = (coordinateX > this.board.width || coordinateX < 1 )? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
    this.coordinateY = (coordinateY > this.board.height || coordinateY < 1)? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
  }
  getLocation(){
    console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`)
  }
  goRightUp(steps:number){
    if(this.coordinateX + steps > this.board.width || this.coordinateY +steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX += steps} , ${this.coordinateY += steps})`);
  }
  goLeftUp(steps:number){
    if(this.coordinateX - steps < 1 || this.coordinateY + steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -= steps} , ${this.coordinateY += steps})`);
  }
  goRightDown(steps:number){
    if(this.coordinateY - steps < 1 || this.coordinateX + steps > this.board.width){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX+= steps} , ${this.coordinateY -= steps})`);
  }
  goLeftDown(steps:number){
    if(this.coordinateY - steps < 1 || this.coordinateX - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -=steps} , ${this.coordinateY-= steps})`);
  }
}

class Queen {
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    this.board = board;
    this.coordinateX = (coordinateX > this.board.width || coordinateX < 1 )? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
    this.coordinateY = (coordinateY > this.board.height || coordinateY < 1)? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
  }
  getLocation(){
    console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`)
  }
  goRight(steps:number){
    if(this.coordinateX + steps > this.board.width){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX += steps} , ${this.coordinateY})`);
  }
  goLeft(steps:number){
    if(this.coordinateX - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -= steps} , ${this.coordinateY})`);
  }
  goUp(steps:number){
    if(this.coordinateY + steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY += steps})`);
  }
  goDown(steps:number){
    if(this.coordinateY - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY-= steps})`);
  }
  goRightUp(steps:number){
    if(this.coordinateX + steps > this.board.width || this.coordinateY +steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX += steps} , ${this.coordinateY += steps})`);
  }
  goLeftUp(steps:number){
    if(this.coordinateX - steps < 1 || this.coordinateY + steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -= steps} , ${this.coordinateY += steps})`);
  }
  goRightDown(steps:number){
    if(this.coordinateY - steps < 1 || this.coordinateX + steps > this.board.width){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX+= steps} , ${this.coordinateY -= steps})`);
  }
  goLeftDown(steps:number){
    if(this.coordinateY - steps < 1 || this.coordinateX - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -=steps} , ${this.coordinateY-= steps})`);
  }
}
class King {
  constructor(
    public board: Board,
    public coordinateX: number,
    public coordinateY: number
  ) {
    this.board = board;
    this.coordinateX = (coordinateX > this.board.width || coordinateX < 1 )? 1 : coordinateX; //if the coordinateX is lower then 1 or bigger than the board width, return 1;
    this.coordinateY = (coordinateY > this.board.height || coordinateY < 1)? 1 : coordinateY; //if the coordinateY is lower then 1 or bigger than the board height, return 1;
  }
  getLocation(){
    console.log(`the currnet location of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY})`)
  }
  goRight(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateX + steps > this.board.width){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX += steps} , ${this.coordinateY})`);
  }
  goLeft(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateX - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -= steps} , ${this.coordinateY})`);
  }
  goUp(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateY + steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY += steps})`);
  }
  goDown(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateY - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX} , ${this.coordinateY-= steps})`);
  }
  goRightUp(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateX + steps > this.board.width || this.coordinateY +steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX += steps} , ${this.coordinateY += steps})`);
  }
  goLeftUp(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateX - steps < 1 || this.coordinateY + steps > this.board.height){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateX;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -= steps} , ${this.coordinateY += steps})`);
  }
  goRightDown(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateY - steps < 1 || this.coordinateX + steps > this.board.width){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX+= steps} , ${this.coordinateY -= steps})`);
  }
  goLeftDown(steps:number){
    if(steps != 1 ) {
      console.log(`illegal move, the king can move only one step, current locatoion (${this.coordinateX} , ${this.coordinateY})`)
      return
    }
    if(this.coordinateY - steps < 1 || this.coordinateX - steps < 1){
      console.log(`the position of the ${this.constructor.name} did not change, out of bound, it's still (${this.coordinateX} , ${this.coordinateY})`);
      return this.coordinateY;
    }
    console.log(`the new position of the ${this.constructor.name} is (${this.coordinateX -=steps} , ${this.coordinateY-= steps})`);
  }
}


const rook1= new Rook(ChessBoard,1,1);
const bishop1 = new Bishop(ChessBoard, 1,1)
const queen1 = new Queen(ChessBoard, 1,1)
const king1 = new King(ChessBoard, 1 , 1)
rook1.goRight(7)
rook1.goUp(7)
rook1.goLeft(6)
rook1.goLeft(1)
rook1.goDown(7)
rook1.goDown(1)
