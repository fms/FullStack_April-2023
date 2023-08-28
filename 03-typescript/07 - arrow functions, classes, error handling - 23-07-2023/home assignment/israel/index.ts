class Bord {
    static width: any;
    static height(height: any, width: any) {
        throw new Error("Method not implemented.");
    }
    height: number;
    width: number;

    constructor(height: number = 8, width: number = 8) {
        this.height = height;
        this.width = width;
    }



}

class Rook extends Bord {
    location1: number;
    location2: number;
    constructor(location1: number, location2: number) {
        super();
        this.location1 = location1;
        this.location2 = location2;

    }

    getLocation() {
        console.log(this.location1, this.location2);

    }
}

let x = new Rook(1, 7);
x.getLocation();

//פונקציה לבדיקת תקינות מהלך
function movecheck(rook: Rook) {
    if (rook.location1 > 8 || rook.location1 < 1 || rook.location2 > 8 || rook.location2 < 1) {
        throw new Error("Improper move - leaving the board")
    }
}

//פונקציה שמוליכה ימינה

function goright(rook: Rook) {
    const originalLocation2 = rook.location2;
    try {
       
        rook.location2 += 1;
        movecheck(rook);
    }
    catch (error) {
        console.error(error.message);
        rook.location2 = originalLocation2;
    }
}
goright(x);
x.getLocation();

//פונקציה שמוליכה שמאלה


function goleft(rook: Rook) {
    const originalLocation2 = rook.location2;
    try {
        rook.location2 -= 1;
        movecheck(rook);
    }
    catch (error) {
        console.error(error.message);
        rook.location2 = originalLocation2;
    }
}
goleft(x);
x.getLocation();

//פונקציה שמוליכה למעלה


function goup(rook: Rook) {
    
    const originalLocation1 = rook.location1;
    try {
       
        rook.location1 += 1;
        movecheck(rook);
    }
    catch (error) {
        console.error(error.message);
        rook.location1 = originalLocation1;
    }
}
goup(x);
x.getLocation();

//פונקציה שמוליכה למטה


function godown(rook: Rook) {
    const originalLocation1 = rook.location1;
    try {
       
        rook.location1 -= 1;
        movecheck(rook);
    }
    catch (error) {
        console.error(error.message);
        rook.location1 = originalLocation1;
    }
}
godown(x);
x.getLocation();


class Bishop extends Bord {
    location1: number;
    location2: number;
    constructor(location1: number, location2: number) {
        super();
        this.location1 = location1;
        this.location2 = location2;

    }

    getLocation() {
        console.log(this.location1, this.location2);

    }
}

let y = new Bishop(5, 7);
y.getLocation();

//פונקציה לבדיקת תקינות מהלך
function Movecheck(bishop: Bishop) {
    if (bishop.location1 > 8 || bishop.location1 < 1 || bishop.location2 > 8 || bishop.location2 < 1) {
        throw new Error("Improper move - leaving the board")
    }
}

//פונקציה שמוליכה באלכסון ימינה ללמעלה

function goRightUp(bishop: Bishop) {
    const originalLocation2 = bishop.location2;
    try {
       
        bishop.location2 += 1;
        bishop.location1 += 1;
        Movecheck(bishop);
    }
    catch (error) {
        console.error(error.message);
        bishop.location2 = originalLocation2;
    }
}
goRightUp(y);
y.getLocation();

//פונקציה שמוליכה באלכסון שמאלה ללמעלה


function goLeftUp(bishop: Bishop) {
    const originalLocation2 = bishop.location2;
    try {
        bishop.location2 -= 1;
        bishop.location1 += 1;

        movecheck(bishop);
    }
    catch (error) {
        console.error(error.message);
        bishop.location2 = originalLocation2;
    }
}
goLeftUp(y);
y.getLocation();

//פונקציה שמוליכה ימינה ללמטה


function goRightDown(bishop: Bishop) {
    
    const originalLocation1 = bishop.location1;
    try {
       
        bishop.location2 += 1;
        bishop.location1 -= 1;

        movecheck(bishop);
    }
    catch (error) {
        console.error(error.message);
        bishop.location1 = originalLocation1;
    }
}
goRightDown(y);
y.getLocation();

//פונקציה שמוליכה שמאלה ללמטה


function goLeftDown(bishop: Bishop) {
    const originalLocation1 = bishop.location1;
    try {
       
        bishop.location2 -= 1;
        bishop.location1 -= 1;
        movecheck(bishop);
    }
    catch (error) {
        console.error(error.message);
        bishop.location1 = originalLocation1;
    }
}
goLeftDown(y);
y.getLocation();

