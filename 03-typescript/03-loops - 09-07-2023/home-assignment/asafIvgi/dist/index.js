var counter = 99;
while (counter > 0) {
    console.log(counter + " bottles of beer on the wall, " + counter + " bottles of beer.");
    if (counter == 1) {
        console.log("Take one down and pass it around, there's no more bottles of beer on the wall!");
        counter--;
    }
    else {
        console.log("Take one down and pass it around, now there's " + --counter + " more bottles of beer on the wall!");
    }
}
var total = 0;
var userInput = prompt("Pick a Number (n):");
// console.log(userInput)
var n = parseInt(userInput);
// console.log(n)
if (Number.isNaN(n)) {
    console.log("Not a number, try again.");
}
else {
    for (var nCount = 1; nCount <= n; nCount++) {
        total += nCount;
    }
}
console.log(total);
var outTotal = 0;
var innerTotal = 0;
var secUserInput = prompt("Pick a Number (secN):");
var secN = parseInt(secUserInput);
if (Number.isNaN(secN)) {
    console.log("Not a number, try again.");
}
else {
    for (var outNCount = 1; outNCount <= secN; outNCount++) {
        for (var innerNCount = outNCount; innerNCount <= secN; innerNCount++) {
            innerTotal += innerNCount;
        }
        outTotal += innerTotal;
    }
}
console.log(outTotal);
