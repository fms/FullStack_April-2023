/*Write a class named Board
In the constructor accept two numbers for the width and height of the board.
The board starts at coordinates 1,1.
Write a class named Rook
In the constructor accept a board and two numbers for the initial coordinates of the rook.
Confirm that the rook is inside the board.
Include a method getLocation() for reporting the current position of the rook.
Include functions for moving on the board:
goRight()
goLeft()
goUp()
goDown()
Accept as a parameter the number of steps
Only allow movement if the new position is still inside the board (Hint: Write a method to report if a set of coordinates is inside the board)
Report the new position of the rook.
Write a class named Bishop that behaves in the same manner as the Rook.
Include these methods for moving on the board:
goRightUp()
goLeftUp()
goRightDown()
goLeftDown()*/

class Board 
{
    constructor(public width: number = 8, public height: number = 8)
    {
      this.width = width;
      this.height = height;
    } 
  }
    const fullBoard= new Board(8,8);
    
class Rook 
{
  constructor(public square: Board, public cordinateX: number, public cordinateY: number)
  {
    this.square = square;
    this.cordinateX = cordinateX;
    this.cordinateY = cordinateY;  
  }
  getLocation()
  {
      console.log(`the currnet location is (${this.cordinateX} , ${this.cordinateY})`)
  }
  goRight(movement:number)
  {
    if(this.cordinateX + movement > this.square.width)
    {
      console.log(`the movment has not changed, its the same`);
      return this.cordinateX;
    }
        console.log(`the new position is (${this.cordinateX += movement} , ${this.cordinateY})`);
  }

  goLeft(movement:number)
  {
    if(this.cordinateX - movement < 1)
    {
      console.log(`the position did not change,  its the same as it was (${this.cordinateX} , ${this.cordinateY})`);
      return this.cordinateX;
    }
        console.log(`the new position is (${this.cordinateX -= movement} , ${this.cordinateY})`);
  }
  goUp(movement:number)
  {
    if(this.cordinateY + movement > this.square.height)
    {
      console.log(`the position did not change,  its the same as it was (${this.cordinateX} , ${this.cordinateY})`);
      return this.cordinateY;
    }
      console.log(`the new position is (${this.cordinateX} , ${this.cordinateY += movement})`);
  }
  goDown(movement:number)
  {
    if(this.cordinateY - movement < 1)
    {
      console.log(`the position did not change,  its the same as it was (${this.cordinateX} , ${this.cordinateY})`);
      return this.cordinateY;
    }
    console.log(`the position is now (${this.cordinateX} , ${this.cordinateY -= movement})`);
  }
}
class Bishop
{
  constructor(public square: Board, public cordinateX: number, public cordinateY: number)
  {
    this.square = square;
    this.cordinateX = (cordinateX > this.square.width || cordinateX < 1 )? 1 : cordinateX;
    this.cordinateY = cordinateY;  
    {
      this.cordinateY = (cordinateY > this.square.height || cordinateY < 1)? 1 : cordinateY; 
    }
  }
  goRightUp(movement:number)
  {
    if(this.cordinateX + movement > this.square.width || this.cordinateY +movement > this.square.height)
    {
      console.log(`the position did not change,  its the same as it was (${this.cordinateX} , ${this.cordinateY})`);
      return this.cordinateX;
    }
    console.log(`the position is now (${this.cordinateX += movement} , ${this.cordinateY += movement})`);
  }
  goLeftUp(movement:number)
  {
      if(this.cordinateX -  movement < 1 || this.cordinateY + movement > this.square.height)
      {
        console.log(`the position did not change,  its the same as it was (${this.cordinateX} , ${this.cordinateY})`);
        return this.cordinateX;
      }
      console.log(`the position is now (${this.cordinateX -= movement} , ${this.cordinateY += movement})`);
  }
  goRightDown(movement:number)
  {
    if(this.cordinateY - movement < 1 || this.cordinateX + movement > this.square.width)
    {
      console.log(`the position did not change,  its the same as it was (${this.cordinateX} , ${this.cordinateY})`);
      return this.cordinateY;
    }
    console.log(`the position is now (${this.cordinateX += movement} , ${this.cordinateY -= movement})`);
  }
  goLeftDown(movement:number)
  {
    if(this.cordinateY - movement < 1 || this.cordinateX - movement < 1)
    {
      console.log(`the position did not change,  its the same as it was (${this.cordinateX} , ${this.cordinateY})`);
      return this.cordinateY;
    }
    console.log(`the position is now (${this.cordinateX -= movement} , ${this.cordinateY -= movement})`);
  }
}
    
    



