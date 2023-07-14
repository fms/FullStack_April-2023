let total = 0;
let numberCount = 0;

// do-while loop, syntax:
// do {
//   Code to execute inside the loop
// }
// while (condition is true)

// Decaler here, so it's recognized in the do-while() condition
let userInput: string | null;
do {
    userInput = prompt("Give me a number! Cancel to end.");

    if (userInput) {
        // Make sure the input is a number
        let currentNumber = parseInt(userInput);
        if (Number.isNaN(currentNumber)) {
            console.log('Not a number');
        }
        else {
            console.log(`Got a new number: ${currentNumber}`);
            // It's a number - add it to the running total and
            // update the count
            total += currentNumber;
            numberCount++;
        }
    }
    
    // Unrecognized - outside of the block
    // console.log(currentNumber);
} while (userInput);

if (numberCount == 0) {
    console.log("No numbers were given. Can't calculate average!");
}
else {
    console.log(`Total: ${total}. Count: ${numberCount}`);
    console.log(`Average is ${total / numberCount}`);
}

