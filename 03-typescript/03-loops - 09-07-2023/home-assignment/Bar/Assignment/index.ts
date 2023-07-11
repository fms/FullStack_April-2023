let bottles = 99;

while (bottles <= 99 && bottles > 0) {
    if (bottles === 1) {
        console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, there are no more bottles of beer on the wall!");
    } else {
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, now there are ${bottles - 1} bottles of beer on the wall!`);
    }
    bottles--;
}