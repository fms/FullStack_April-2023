// 4. Write a function that accepts three arguments: two numbers and an operation (1-4): a, b , op
// - If operation is 1, return the sum of both numbers (a + b)
// - If operation is 2, return the difference of both numbers (a -b)
// - If operation is 3, return the product of both numbers (a * b)
// - If operation is 4, return the quotient of both numbers (a / b)
// - Otherwise, report an error

function operations(a: number, b: number, op: number) {
  if (op == 1) {
    const sum = a + b;
    return sum;
  } else if (op == 2) {
    const sub = a - b;
    return sub;
  } else if (op == 3) {
    const multiplication = a * b;
    return multiplication;
  } else if (op == 4) {
    const div = a / b;
    return div;
  } else {
    console.log("Error");
  }
}

console.log(operations(6, 2, 1));
console.log(operations(6, 2, 2));
console.log(operations(6, 2, 3));
console.log(operations(6, 2, 4));
console.log(operations(6, 2, 5));
