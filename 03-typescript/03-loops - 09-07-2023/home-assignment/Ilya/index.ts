function bottlesOfBeer(n: number): void {
  while (n > 0) {
    if (n === 1) {
      console.log(`1 bottle of beer on the wall, 1 bottle of beer.`);
    } else {
      console.log(`${n} bottles of beer on the wall, ${n} bottles of beer.`);
    }

    console.log(`Take one down and pass it around, now there's ${n-1} more bottles of beer on the wall!\n`);

    n--;
  }
}

function calculateTotal(n: number): number {
  let total = 0;
  
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  
  return total;
}

const userInput = Number(prompt("Enter a number:"));

bottlesOfBeer(userInput);

const total = calculateTotal(userInput);
console.log(`Total: ${total}`);