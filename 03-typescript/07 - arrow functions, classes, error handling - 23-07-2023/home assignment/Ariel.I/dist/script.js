"use strict";
// // Hagdara shell loh hamishak
// class Board {
//   private width: number;
//   private height: number;
//   constructor(width?: number, height?: number) {
//     this.width = width ?? 1;
//     this.height = height ?? 1;
//   }
//   // Bdikat Kabala shell kelet hamishtamesh im ze baloh
//   inBoard(x: number, y: number): boolean {
//     if (x < 1 || this.width < x) return false;
//     return 1 <= y && y <= this.height;
//   }
// }
// // Hagvolot shani magdir lasahkan shyuhal lesahek bahem
// let board = new Board(8, 8);
// abstract class ChessPiece {
//   board: Board;
//   width: number;
//   height: number;
//   constructor(board: Board, width: number, height: number) {
//     this.board = board;
//     this.width = width;
//     this.height = height;
//   }
//   // Omer li eifo omed hahyal
//   getLocation() {
//     console.log(`This peice's coordinates are (${this.width},${this.height})`);
//   }
//   isValidStepSize(x: number, y: number): boolean {
//     return true;
//   }
//   move(stepsX: number, stepsY: number) {
//     if (this.isValidStepSize(stepsX, stepsY)) {
//       try {
//         if (this.board.inBoard(this.width + stepsX, this.height + stepsY)) {
//           this.width += stepsX;
//           this.height += stepsY;
//           this.getLocation();
//         } else {
//           throw new Error(`Out of bounds!`);
//         }
//       } catch (out) {
//         console.log(`Cant move to ${(out as Error).message}`);
//       }
//     }
//   }
//   space() {
//     console.log("");
//   }
//   moveAxis(x: number, y: number) {
//     if (this.supportAxis) {
//       this.move(x, y);
//     } else {
//       console.log(`Can't move like that!`);
//     }
//   }
//   moveDiagonal(x: number, y: number) {
//     if (this.supportDiagonal) {
//       this.move(x, y);
//     } else {
//       console.log(`Can't move like that!`);
//     }
//   }
//   protected supportAxis: boolean = false;
//   protected supportDiagonal: boolean = false;
//   // Emtzaei kelet mehasahkan
//   goRight(steps: number) {
//     this.moveAxis(steps, 0);
//   }
//   goLeft(steps: number) {
//     this.moveAxis(-steps, 0);
//   }
//   goUp(steps: number) {
//     this.moveAxis(0, steps);
//   }
//   goDown(steps: number) {
//     this.moveAxis(0, steps);
//   }
//   goRightUp(steps: number) {
//     this.moveDiagonal(steps, steps);
//   }
//   goLeftUp(steps: number) {
//     this.moveDiagonal(-steps, steps);
//   }
//   goRightDown(steps: number) {
//     this.moveDiagonal(steps, -steps);
//   }
//   goLeftDown(steps: number) {
//     this.moveDiagonal(-steps, -steps);
//   }
// }
// class Rook extends ChessPiece {
//   constructor(board: Board, width: number, height: number) {
//     super(board, width, height);
//     this.supportAxis = true;
//   }
// }
// class Queen extends ChessPiece {
//   constructor(board: Board, width: number, height: number) {
//     super(board, width, height);
//     this.supportAxis = true;
//     this.supportDiagonal = true;
//   }
// }
// class king extends ChessPiece {
//   constructor(board: Board, width: number, height: number) {
//     super(board, width, height);
//     this.supportAxis = true;
//     this.supportDiagonal = true;
//   }
//   override isValidStepSize(x: number, y: number): boolean {
//     if (Math.abs(x) > 1 || Math.abs(y) > 1) {
//       console.log(`The king can only move one space at a time!`);
//       return false;
//     }
//     return true;
//   }
// }
