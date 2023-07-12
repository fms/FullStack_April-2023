var input = prompt("Please input a number:") || "0";
var output = parseInt(input);
var total = 0;
var total1 = 0;
if (Number.isNaN(output)) {
    alert("This is not a number.");
}
else {
    for (var i = 1; i <= output; i++) {
        for (var j = 1; j <= i; j++) {
            total1 += j;
        }
        total += i;
    }
    alert("Inner loop - " + total + "\nOuter loop - " + total1);
}
