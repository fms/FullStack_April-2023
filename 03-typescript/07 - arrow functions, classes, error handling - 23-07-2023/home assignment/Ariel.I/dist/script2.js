"use strict";
class Board {
    constructor(width, height) {
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
    }
    // i need back to this explantion of the video (8)
    checkIfInBoard(x, y) {
        if (x < 1 || this.width < x) {
            return false;
        }
        return 1 <= y && y >= this.height;
    }
}
class Rook {
    constructor(board, width, height) {
        this.width = width;
        this.height = height;
    }
    getLocation() {
        console.log(`Cordinates Rook is ${this.width}, ${this.height}`);
    }
}
