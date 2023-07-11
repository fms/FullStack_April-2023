"use strict";
for (let num = 99; num >= 1; num--) {
    if (num == 1) {
        console.log(`1 bottles of beer on the wall, 1 bottles of beer.`);
        console.log(`Take one down and pass it around, now there's no more bottles of beer on the wall!`);
    }
    else {
        console.log(`${num} bottles of beer on the wall, ${num} bottles of beer.`);
        console.log(`Take one down and pass it around, now there's ${num - 1} more bottles of beer on the wall!`);
    }
}
