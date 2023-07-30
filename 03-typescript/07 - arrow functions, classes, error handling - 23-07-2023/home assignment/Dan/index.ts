class ChessBoardie
{
    width: number;
    height: number;

    constructor(width: number, height: number) 
    {
        this.width = width ?? 1;
        this.height = height ?? 1;
    }
}

let board1 = new ChessBoardie(10,10);

class Rookie
{
    rookieWidthSize: number;
    rookieHeightSize: number;

    constructor(board1: ChessBoardie, rookieWidthSize: number, rookieHeightSize: number)
        {
        this.rookieWidthSize = rookieWidthSize;
        this.rookieHeightSize = rookieHeightSize;
        }

    getExactLoaction() 
    {
        console.log(`The Rook is on ${this.rookieHeightSize}, ${this.rookieWidthSize} Spot`);
    }

}