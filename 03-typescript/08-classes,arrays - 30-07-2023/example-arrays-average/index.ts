let userInput = prompt("Give me a number! Cancel to end.");

const numbers: number[] = [];       // Empty array
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
        // It's a number - add it to the numbers array
        // update the count
        numbers.push(currentNumber);
        console.log(numbers);
    }

    userInput = prompt("Give me a number! Cancel to end.");
}

if (numbers.length == 0 )
{
    console.log("No numbers were given. Can't calculate average!");
}
else
{
    let total = 0;

    // Uncomment to calculate sum and print progress
    // numbers.forEach(function(x:number) {
    //     console.log(`Current number: ${x}`);
    //     total += x;
    //     console.log(`Running total: ${total}`); 
    // });
    numbers.forEach(x => total += x);

    console.log(`Total (forEach): ${total}. Count: ${numbers.length}`);
    console.log(`Average (foreEach) is ${total / numbers.length}`);

    // This is the same
    numbers.reduce((total, num) => total += num, 0);

    console.log(`Total (reduce): ${total}. Count: ${numbers.length}`);
    console.log(`Average  (reduce) is ${total / numbers.length}`);
}



