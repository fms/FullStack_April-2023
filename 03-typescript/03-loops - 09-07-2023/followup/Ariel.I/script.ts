let numberCounter = 0;

for (let num = 0; num <= 100; num++) {
  if (num % 7 == 0 || num % 10 == 7) {
    console.log(`${num} BOOM!`);
  } else {
    console.log(num);
  }
}

// const nisayon = prompt(`Drop an integer number`);

// console.log(`your number is ${nisayon}`);

// let x = 1;
// console.log(x);
// console.log(++x);
// console.log(x++);
