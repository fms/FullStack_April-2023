"use strict";
// // mission #1
// for (let bottles = 99; bottles >= 1; bottles--) {
//   let bottleDown = bottles - 1;
//   if (bottles != 1) {
//     console.log(
//       `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
//        \n Take one down and pass it around, now there's ${bottleDown} more bottles of beer on the wall!`
//     );
//   } else {
//     console.log(
//       `${bottles} bottle of beer on the wall, ${bottles} bottle of beer. \n Take one down and pass it around, there's no more bottles of beer on the wall!`
//     );
//   }
// }
// .
// // Mission #2
// let numberFromUser = parseInt(
//   prompt(`Hey dude give me a number! ╰(*°▽°*)╯`) || "0"
// );
// let total = 0;
// for (let loopTimes = 1; loopTimes <= numberFromUser; loopTimes++) {
//   total = total + loopTimes;
// }
// console.log(
//   `Well if we took your number (${numberFromUser}) and start plus from 1 to your number ${numberFromUser}, we got summery of ${total} 😀`
// );
// // Mission #3
// let numberChoosenByUser = parseInt(
//   prompt(`Let's choose again a number!`) || "0"
// );
// let total1 = 0;
// for (let loopCuonter = 1; loopCuonter <= numberChoosenByUser; loopCuonter++) {
//   for (let loopCalculate = 1; loopCalculate <= loopCuonter; loopCalculate++) {
//     total1 = total1 + loopCalculate;
//   }
// }
// console.log(
//   `Well if we took your number (${numberChoosenByUser}) and start plus from 1 to your number ${numberChoosenByUser}, we got summery of ${total1} 😀`
// );
// Attempt #2
// // Mission #1
// for (let bottleDown = 99; bottleDown >= 1; bottleDown--) {
//   if (bottleDown != 1)
//     console.log(
//       `${bottleDown} bottles of beer on the wall, ${bottleDown} bottles of beer. \n Take one down and pass it around, now there's ${
//         bottleDown - 1
//       } more bottles of beer on the wall!`
//     );
//   else
//     console.log(
//       `1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, there's no more bottles of beer on the wall!`
//     );
// }
// Mission #2
// let userNumber = parseInt(prompt(`Hey there, give me a number!`) || "0");
// let finalNumber = 0;
// for (let loopTimes = 1; loopTimes <= userNumber; loopTimes++) {
//   finalNumber = finalNumber + loopTimes;
// }
// console.log(`${finalNumber}`);
// Mission #3
let userInput = parseInt(prompt(`Give a number!`) || "0");
let totalUser = 0;
for (let loopCuonter = 0; loopCuonter <= userInput; loopCuonter++) {
    for (let loopCalculate = 0; loopCalculate <= loopCuonter; loopCalculate++) {
        totalUser = totalUser + loopCalculate;
    }
}
console.log(`${totalUser}`);
