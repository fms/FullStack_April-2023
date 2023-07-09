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
let bottles = 99;
while (bottles > 1) {
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
  Take one down and pass it around, now there's ${--bottles} more bottles of beer on the wall!`);
    if (bottles == 1) {
        console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer.
    Take one down and pass it around, there's no more bottles of beer on the wall!`);
    }
}
