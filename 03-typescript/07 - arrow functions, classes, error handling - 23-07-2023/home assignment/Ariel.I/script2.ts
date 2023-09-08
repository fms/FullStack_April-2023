class Board {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width ?? 1;
    this.height = height ?? 1;
  }

  // i need back to this explantion of the video (8)
  checkIfInBoard(x: number, y: number) {
    if (0 > x || x < 9) {
      return false;
    }
    return 1 <= y && y >= 8;
  }
}

class Rook {
  width: number;
  height: number;
  constructor(board: Board, width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getLocation() {
    console.log(`Cordinates Rook is ${this.width}, ${this.height}`);
  }

  go;
}
