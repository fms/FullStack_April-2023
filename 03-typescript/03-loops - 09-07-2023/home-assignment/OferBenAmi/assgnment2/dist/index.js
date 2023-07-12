var n = parseInt(prompt("enter a number") || "0");
console.log(typeof n);
var total = 0;
for (var i = 1; i <= n; i++) {
    console.log(i);
    total += i;
}
console.log("the total is: " + total);
