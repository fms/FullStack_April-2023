"use strict";
// 1. Do you know the "99 Bottles of Beer on the wall" song?
//    - Create a loop, counting back from 99 which prints:
//    > 99 bottles of beer on the wall, 99 bottles of beer.<br>
//    > Take one down and pass it around, now there's 98 more bottles of beer on the wall!<br>
//    > <br>
//    - When you reach 1, print:
//    > 1 bottle of beer on the wall, 1 bottle of beer.<br>
//    > Take one down and pass it around, there's no more bottles of beer on the wall!<br>
//    > <br>
//    - exit when there are no more bottles.
for (let i = 99; i >= 1; i--) {
    if (i == 1) {
        console.log(`1 bottles of beer on the wall, 1 bottles of beer.
    Take one down and pass it around, now there's no more bottles of beer on the wall!`);
    }
    else {
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.
    Take one down and pass it around, now there's ${i - 1} more bottles of beer on the wall!`);
    }
}
