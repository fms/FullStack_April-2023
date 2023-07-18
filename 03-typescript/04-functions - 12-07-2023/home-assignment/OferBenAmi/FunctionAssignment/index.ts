function negateNum(num: number): number {
  return num * -1;
}

function largerNum(num1: number, num2: number): number {
  return num1 >= num2 ? num1 : num2;
}

function fahrenheitToCelsius(num: number): number {
  return ((num - 32) * 5) / 9;
}
function MathSelect(num1: number, num2: number, op: number): number | string {
  switch (op) {
    case 1: {
      return num1 + num2;
    }
    case 2: {
      return num1 - num2;
    }
    case 3: {
      return num1 * num2;
    }
    case 4: {
      return num1 / num2;
    }
    default: {
      return `${op} is not a valid input`;
    }
  }
}



/* write a function that receives a number (n), the function receives from the user series of numbers (n)
 and returns the length of the biggest upwards going mini series.
 example:
    for series:
    20 3 4 5 5 5 5 5 -1 8 9 50 7
    the function will return 4 because the biggest upwards mini series is -1 8 9 50
*/


function biggestUpCount(n: number): number {
  let privNum = parseInt(prompt(`Please enter the first number`) || "0");
  let biggestCount: number = 0;
  let currentCount = 1;
  for (let i = 1; i < n; i++) {
    let currNum = parseInt(prompt(`Please enter the ${i + 1}th number`) || "0");
    if (currNum > privNum) {
      currentCount++;
      console.log(`the current count is${currentCount}`);
      if (currentCount > biggestCount) {
        biggestCount = currentCount;
        console.log(`the biggest count is${biggestCount}`);
      } else {
        currentCount = 0;
      }
    }
  }
  return biggestCount;
}
// console.log(negateNum(-50));
// console.log(largerNum(10, 20));
// console.log(fahrenheitToCelsius(100));
// console.log(MathSelect(3, 5, 6));
console.log(biggestUpCount(9));
