var currentNumber = 1;
// loop on value
while (currentNumber <= 100) {
    if (currentNumber % 7 == 0) {
        console.log(currentNumber + 'BOOM');
    }
    else {
        console.log(currentNumber);
    }
    // console.log(`In while: ${currentNumber}`);
    // calculate next value
    currentNumber++;
}
