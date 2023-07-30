class Board {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    isInsideBoard(x: number, y: number): boolean {
      return x >= 1 && x <= this.width && y >= 1 && y <= this.height;
    }
  }
  
  abstract class ChessPiece {
    protected positionX: number;
    protected positionY: number;
    protected board: Board;
  
    constructor(board: Board, initialX: number, initialY: number) {
      this.board = board;
      if (this.board.isInsideBoard(initialX, initialY)) {
        this.positionX = initialX;
        this.positionY = initialY;
      } else {
        throw new Error('Initial position is outside the board.');
      }
    }
  
    getLocation(): { x: number; y: number } {
      return { x: this.positionX, y: this.positionY };
    }
  
    protected movePosition(dx: number, dy: number): void {
      const newX = this.positionX + dx;
      const newY = this.positionY + dy;
      if (this.board.isInsideBoard(newX, newY)) {
        this.positionX = newX;
        this.positionY = newY;
        console.log(`New position: ${this.positionX}, ${this.positionY}`);
      } else {
        console.log('Cannot move outside the board.');
      }
    }
  }
  
  class Rook extends ChessPiece {
    constructor(board: Board, initialX: number, initialY: number) {
      super(board, initialX, initialY);
    }
  
    goRight(steps: number): void {
      this.movePosition(steps, 0);
    }
  
    goLeft(steps: number): void {
      this.movePosition(-steps, 0);
    }
  
    goUp(steps: number): void {
      this.movePosition(0, -steps);
    }
  
    goDown(steps: number): void {
      this.movePosition(0, steps);
    }
  }
  
  class Bishop extends ChessPiece {
    constructor(board: Board, initialX: number, initialY: number) {
      super(board, initialX, initialY);
    }
  
    goRightUp(steps: number): void {
      this.movePosition(steps, -steps);
    }
  
    goLeftUp(steps: number): void {
      this.movePosition(-steps, -steps);
    }
  
    goRightDown(steps: number): void {
      this.movePosition(steps, steps);
    }
  
    goLeftDown(steps: number): void {
      this.movePosition(-steps, steps);
    }
  }
  
  // Usage Example
  const board = new Board(8, 8);
  
  const rook = new Rook(board, 4, 4);
  console.log(rook.getLocation()); // Output: { x: 4, y: 4 }
  
  rook.goRight(2); // Output: New position: 6, 4
  console.log(rook.getLocation()); // Output: { x: 6, y: 4 }
  
  const bishop = new Bishop(board, 5, 5);
  console.log(bishop.getLocation()); // Output: { x: 5, y: 5 }
  
  bishop.goRightUp(3); // Output: New position: 8, 2
  console.log(bishop.getLocation()); // Output: { x: 8, y: 2 }