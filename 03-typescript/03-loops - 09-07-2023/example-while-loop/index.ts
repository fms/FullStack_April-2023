let total = 0;
let numberCount = 0;

let userInput = prompt("1 Give me a number! Cancel to end.");

// while loop, syntax:
// while (condition is true)
// {
//   Code to execute inside the loop
// }

while (userInput) 
{
    // Make sure the input is a number
    let currentNumber = parseInt(userInput);
    if (Number.isNaN(currentNumber))
    {
        console.log('Not a number');
    }
    else {
        console.log(`Got a new number: ${currentNumber}`);
        // It's a number - add it to the running total and
        // update the count
        total += currentNumber;
        numberCount++;
    }

    userInput = prompt("2 Give me a number! Cancel to end.");
}

if (numberCount == 0 )
{
    console.log("No numbers were given. Can't calculate average!");
}
else
{
    console.log(`Total: ${total}. Count: ${numberCount}`);
    console.log(`Average is ${total / numberCount}`);
}

