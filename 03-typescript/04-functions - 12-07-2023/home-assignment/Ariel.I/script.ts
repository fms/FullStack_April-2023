// // Task #1
// const valueNumber1: number = +5;
// const valueNumber2: number = -100;

// function negativeNumberTransformer(numberTransforming: number) {
//   return console.log(-numberTransforming);
// }

// negativeNumberTransformer(valueNumber1);
// negativeNumberTransformer(valueNumber2);

// // Task #2
// const group1Number1 = 5;
// const group1Number2 = 9;

// const group2Number1 = 10;
// const group2Number2 = 8;

// function bigSmallThanChecker(checkNumber1: number, checkNumber2: number) {
//   if (checkNumber1 > checkNumber2) {
//     console.log(checkNumber1);
//   } else if (checkNumber1 < checkNumber2) {
//     console.log(checkNumber2);
//   } else {
//     console.log(`Well, guess the values is equal! (°ー°〃)`);
//   }
// }

// bigSmallThanChecker(group1Number1, group1Number2);
// bigSmallThanChecker(group2Number1, group2Number2);

// // Task #3
// const F: number = 89;
// let C: number;

// function convertorFahrenheitToCelsius(FahrenheitIn: number) {
//   C = ((FahrenheitIn - 32) * 5) / 9;
//   return console.log(`°C is ${C}!`);
// }

// convertorFahrenheitToCelsius(F);

// Task #4
let unknownN1: number = 5;
let unknownN2: number = 3;
let operationChoice: number = 2;

function complexOne(a: number, b: number, op: number) {
  if (op === 1) {
    return console.log(`The summery of a & b is ${a + b}`);
  } else if (op === 2) {
    return console.log(`The difference of a & b is ${a - b}`);
  } else if (op === 3) {
    return console.log(`The product of a & b is ${a * b}`);
  } else if (op === 4) {
    return console.log(`The quotient of a & b is ${a / b}`);
  } else {
    return console.log(`❌ ERROR ❌`);
  }
}

complexOne(unknownN1, unknownN2, operationChoice);
