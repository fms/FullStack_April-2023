"use strict";
// Write a class named Bishop that behaves in the same manner as the Rook.
// Include these methods for moving on the board:
// <strong>goRightUp()</strong>
// <strong>goLeftUp()</strong>
// <strong>goRightDown()</strong>
// <strong>goLeftDown()</strong>
// <hr>
//  48:26 שיעור אחרון
// Medium
// Write a class named Queen that behaves in the same manner as the Rook and Bishop combined.
// <hr>
// Write a class named King that behaves in the same manner as the Queen, but is limited to a single step.
// <hr>
// Advanced
// Read up on Abstract classes.
// Convert Rook, Bishop, Queen and King to use a new abstract class ChessPiece.
// The board starts at coordinates 1,1. ??????????????????????????
class Board {
    constructor(width, height) {
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
    }
}
let gameBoard = new Board(10, 10);
class Rook {
    constructor(new1, x, y) {
        this.new1 = new1;
        this.x = x;
        this.y = y;
    }
    getLocation() {
        console.log(`This is the location width:` + `${this.x}` + `and height:` + `${this.y}`);
    }
}
