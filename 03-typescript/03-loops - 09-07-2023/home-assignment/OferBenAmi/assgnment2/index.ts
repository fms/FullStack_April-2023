const n = parseInt(prompt(`enter a number`) || "0");
console.log(typeof n);
let total = 0;
for (let i = 1; i <= n; i++) {
  console.log(i);
  total += i;
}
console.log(`the total is: ${total}`);
