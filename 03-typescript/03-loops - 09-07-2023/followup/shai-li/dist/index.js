"use strict";
//Play 7 boom.
// - loop from 1 to 100
// - print the number
// - Whenever a number divides by 7 write 'BOOM', on the same line
// - Advanced: write 'BOOM' if the number contains a 7.
for (let number = 1; number <= 100; number++) {
    if (number % 7 === 0) {
        console.log(`${number} BOOM`);
    }
    else {
        console.log(number);
    }
}
