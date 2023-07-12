var n = prompt("Input a number please") || "0";
var intn = parseInt(n);
var total = 0;
if (Number.isNaN(intn)) {
    alert("This is not a number");
}
else {
    for (var i = 0; i <= intn; i++) {
        total += i;
        console.log("Numbers:\n " + i);
    }
    alert("Total sum of all the numbers- " + total + ",\nCheck console for more details");
}
