var userNum = prompt("Give me a number");
var inTotal = 0;
if (userNum) {
    var n = parseInt(userNum);
    if (!isNaN(n)) {
        for (var outer = 1; outer <= n; outer++) {
            for (var calc = 1; calc <= outer; calc++) {
                inTotal = inTotal + calc;
            }
        }
        console.log(inTotal);
    }
    else {
        console.log("Not a number");
    }
}
else {
    console.log("Not a number");
}
