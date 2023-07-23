function bottlesOfBeer(n) {
    while (n > 0) {
        if (n === 1) {
            console.log("1 bottle of beer on the wall, 1 bottle of beer.");
        }
        else {
            console.log(n + " bottles of beer on the wall, " + n + " bottles of beer.");
        }
        console.log("Take one down and pass it around, now there's " + (n - 1) + " more bottles of beer on the wall!\n");
        n--;
    }
}
function calculateTotal(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
var userInput = Number(prompt("Enter a number:"));
bottlesOfBeer(userInput);
var total = calculateTotal(userInput);
console.log("Total: " + total);
