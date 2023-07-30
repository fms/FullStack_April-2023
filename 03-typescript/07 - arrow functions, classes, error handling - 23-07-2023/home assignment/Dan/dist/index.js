"use strict";
class ChessBoardie {
    constructor(width, height) {
        this.width = width !== null && width !== void 0 ? width : 1;
        this.height = height !== null && height !== void 0 ? height : 1;
    }
}
let board1 = new ChessBoardie(10, 10);
class Rookie {
    constructor(board1, rookieWidthSize, rookieHeightSize) {
        this.rookieWidthSize = rookieWidthSize;
        this.rookieHeightSize = rookieHeightSize;
    }
    getExactLoaction() {
        console.log(`The Rook is on ${this.rookieHeightSize}, ${this.rookieWidthSize} Spot`);
    }
}
