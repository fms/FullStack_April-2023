var table = document.getElementById('myTable');
var cell = table === null || table === void 0 ? void 0 : table.getElementsByTagName('block');
if (cell) {
    var _loop_1 = function (i) {
        var oneCell = cell[i];
        oneCell.onclick = function () {
            oneCell.style.color = "yellow";
        };
    };
    for (var i = 0; i < cell.length; i++) {
        _loop_1(i);
    }
}
