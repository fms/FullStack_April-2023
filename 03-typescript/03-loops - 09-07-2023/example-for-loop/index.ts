// Set initial value
let currentNumber = 1;

// loop on value
while (currentNumber <= 10){
    console.log(`In while: ${currentNumber}`);

    // calculate next value
    currentNumber++;
}

// This is exactly the same as the while loop above
for (let currentNumber = 1; currentNumber <= 10; currentNumber++)
{
    console.log(`In for: ${currentNumber}`);
}

// Reverse loop starts at the final value and decreases the value
for (let currentNumber = 10; currentNumber >= 0; currentNumber--)
{
    console.log(`In reverse for: ${currentNumber}`);
}

// Change the step size (value for increase/decrease)
for (let currentNumber = 1; currentNumber <= 10; currentNumber += 2)
{
    console.log(`In for, step 2: ${currentNumber}`);
}

let total = 0;
let numberCount = 0;

// Converted the while-loop example to for loop. 
// This is less readable, but is here just to demonstarte the
// syntax of the for loop
for (let userInput = prompt("1 Give me a number! Cancel to end.");
     userInput;
     userInput = prompt("2 Give me a number! Cancel to end."))
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

