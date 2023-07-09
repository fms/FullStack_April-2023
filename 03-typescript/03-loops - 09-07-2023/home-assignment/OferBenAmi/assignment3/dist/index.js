var n = parseInt(prompt("enter a number") || "0");
console.log(typeof n);
var total = 0, totalbaribua = 0;
for (var i = 1; i <= n; i++) {
    console.log(i);
    for (var j = 1; j <= i; j++) {
        totalbaribua += j;
    }
    total += i;
}
console.log("the total is: " + total);
console.log("the totalbaribua is: " + totalbaribua);
