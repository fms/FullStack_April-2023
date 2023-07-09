let firstNumber = 1;
let initial = firstNumber;

for (let i = 0; i < 15; i = firstNumber) {
    firstNumber += 3
    console.log("i =" + firstNumber);
}
firstNumber = 1;
for (let y = 0; y < 15; y = firstNumber) {
    firstNumber += 2
    console.log("y=" + firstNumber);
}


// interpolation. Both lines are the same.
console.log('final' + firstNumber);
console.log(`final: ${firstNumber}`);

console.log('Summary: started with ' + initial + ', ended with ' + firstNumber);
console.log(`Summary: started with ${initial}, ended with ${firstNumber}`);

