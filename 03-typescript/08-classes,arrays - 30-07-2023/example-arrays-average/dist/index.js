var userInput = prompt("Give me a number! Cancel to end.");
var numbers = []; // Empty array
while (userInput) {
    // Make sure the input is a number
    var currentNumber = parseInt(userInput);
    if (Number.isNaN(currentNumber)) {
        console.log('Not a number');
    }
    else {
        console.log("Got a new number: " + currentNumber);
        // It's a number - add it to the numbers array
        // update the count
        numbers.push(currentNumber);
        console.log(numbers);
    }
    userInput = prompt("Give me a number! Cancel to end.");
}
if (numbers.length == 0) {
    console.log("No numbers were given. Can't calculate average!");
}
else {
    var total_1 = 0;
    // Uncomment to calculate sum and print progress
    // numbers.forEach(function(x:number) {
    //     console.log(`Current number: ${x}`);
    //     total += x;
    //     console.log(`Running total: ${total}`); 
    // });
    numbers.forEach(function (x) { return total_1 += x; });
    console.log("Total (forEach): " + total_1 + ". Count: " + numbers.length);
    console.log("Average (foreEach) is " + total_1 / numbers.length);
    // This is the same
    numbers.reduce(function (total, num) { return total += num; }, 0);
    console.log("Total (reduce): " + total_1 + ". Count: " + numbers.length);
    console.log("Average  (reduce) is " + total_1 / numbers.length);
}
