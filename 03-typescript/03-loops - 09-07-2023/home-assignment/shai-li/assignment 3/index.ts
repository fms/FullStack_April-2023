// 3. Get a number (n) from the user.
//     - Use nested loops and calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n).
//     - Use an outer loop from 1 to n (outer)
//     - Use an inner loop for the 1+2+...outer (again, loop, not formula)

let getNumber: string | null = prompt("Give me a number please");

if (getNumber) {
  let num = parseInt(getNumber);
  let sum = 0;
  let total = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
    console.log(sum);
    for (let j = 0; j <= i; j++) {
      total += j;
      console.log(total);
    }
  }
  if (Number.isNaN(num)) {
    console.log("You didn't gave me number!");
  }
  console.log(`The sum is: ${sum}`);
  console.log(`The total is: ${total}`);
}
