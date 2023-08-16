var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bord = /** @class */ (function () {
    function Bord(height, width) {
        if (height === void 0) { height = 8; }
        if (width === void 0) { width = 8; }
        this.height = height;
        this.width = width;
    }
    Bord.height = function (height, width) {
        throw new Error("Method not implemented.");
    };
    return Bord;
}());
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(location1, location2) {
        var _this = _super.call(this) || this;
        _this.location1 = location1;
        _this.location2 = location2;
        return _this;
    }
    Rook.prototype.getLocation = function () {
        console.log(this.location1, this.location2);
    };
    return Rook;
}(Bord));
var x = new Rook(1, 7);
x.getLocation();
//פונקציה לבדיקת תקינות מהלך
function movecheck(rook) {
    if (rook.location1 > 8 || rook.location1 < 1 || rook.location2 > 8 || rook.location2 < 1) {
        throw new Error("Improper move - leaving the board");
    }
}
//פונקציה שמוליכה ימינה
function goright(rook) {
    var originalLocation2 = rook.location2;
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
function goleft(rook) {
    var originalLocation2 = rook.location2;
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
function goup(rook) {
    var originalLocation1 = rook.location1;
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
function godown(rook) {
    var originalLocation1 = rook.location1;
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
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(location1, location2) {
        var _this = _super.call(this) || this;
        _this.location1 = location1;
        _this.location2 = location2;
        return _this;
    }
    Bishop.prototype.getLocation = function () {
        console.log(this.location1, this.location2);
    };
    return Bishop;
}(Bord));
var y = new Bishop(5, 7);
y.getLocation();
//פונקציה לבדיקת תקינות מהלך
function Movecheck(bishop) {
    if (bishop.location1 > 8 || bishop.location1 < 1 || bishop.location2 > 8 || bishop.location2 < 1) {
        throw new Error("Improper move - leaving the board");
    }
}
//פונקציה שמוליכה באלכסון ימינה ללמעלה
function goRightUp(bishop) {
    var originalLocation2 = bishop.location2;
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
function goLeftUp(bishop) {
    var originalLocation2 = bishop.location2;
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
function goRightDown(bishop) {
    var originalLocation1 = bishop.location1;
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
function goLeftDown(bishop) {
    var originalLocation1 = bishop.location1;
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
