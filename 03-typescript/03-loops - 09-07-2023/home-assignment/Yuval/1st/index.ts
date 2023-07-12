let bottles: number = 99;

while (bottles > 1)
{
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);

    bottles--;

    console.log(`Take one down and pass it around, now there's ${bottles} more bottles of beer on the wall!`);
}

if (bottles == 1)
{
    console.log(` 1 bottle of beer on the wall, 1 bottle of beer.`);
    console.log(`Take one down and pass it around, there's no more bottles of beer on the wall!`);
}