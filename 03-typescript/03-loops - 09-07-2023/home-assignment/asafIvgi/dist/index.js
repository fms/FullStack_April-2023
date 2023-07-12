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
var innerTotal = 0;
var innerN = prompt("Pick a Number:");
var innerNCount = 1;
while (innerNCount <= innerN) {
    // console.log("before: " + total);
    innerTotal += innerNCount;
    // console.log("after: " + total);
    innerNCount++;
}
console.log(innerTotal);
