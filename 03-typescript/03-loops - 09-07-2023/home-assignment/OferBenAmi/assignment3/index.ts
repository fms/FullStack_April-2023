const n = parseInt(prompt(`enter a number`) || "0");
console.log(typeof n);
let total = 0,
  totalbaribua = 0;
for (let i = 1; i <= n; i++) {
  console.log(i);
  for (let j = 1; j <= i; j++) {
    totalbaribua += j;
  }
  total += i;
}
console.log(`the total is: ${total}`);
console.log(`the totalbaribua is: ${totalbaribua}`);
