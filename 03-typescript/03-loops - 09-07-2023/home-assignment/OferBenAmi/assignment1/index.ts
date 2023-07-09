console.log(`bottles of beer.`);

for (let i = 99; i >= 1; i--) {
  if (i == 1) {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    console.log(`Take one down and pass it around, there's no more bottles of beer on the wall`);
    break;
  }
  console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
  console.log(
    `Take one down and pass it around, now there's ${
      i - 1
    } more bottles of beer on the wall!`
  );
}
