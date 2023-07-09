const startNUmber = 1;
let firstNumber = 1;

// The next 3 items are the same
firstNumber = firstNumber + 1;
console.log(firstNumber);

firstNumber += 1;
console.log(firstNumber);

firstNumber++;
console.log(firstNumber);

// -----

firstNumber = firstNumber * 2;
console.log(firstNumber);

firstNumber **= 2;
console.log(firstNumber);

++firstNumber;   // firstNumber += 1;
firstNumber++;   // temp = firstNumber; firstNumber +=1; temp;

let initial = firstNumber;
console.log('initial: ' + firstNumber);
console.log('++firstNumber: ' + ++firstNumber );
console.log('firstNumber++: ' + firstNumber++ );

// interpolation. Both lines are the same.
console.log('final ' + firstNumber);
console.log(`final: ${firstNumber}`);

console.log('Summary: started with ' + initial + ', ended with ' + firstNumber);
console.log(`Summary: started with ${initial}, ended with ${firstNumber}`);

// Avoid these, if you can:
firstNumber = 10;
let result = ++firstNumber * ++firstNumber;
console.log(result);

firstNumber = 10;
result = firstNumber++ * firstNumber++;
console.log(result);
