// console.log('1. Do you know the "99 Bottles of Beer on the wall" song?');

// let i:number = 99;

// while(i > 1){
//     console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
//     console.log(`Take one down and pass it around, now there's ${--i} more bottles of beer on the wall!`);
// }

// console.log("1 bottle of beer on the wall, 1 bottle of beer.")
// console.log(" Take one down and pass it around, there's no more bottles of beer on the wall!")

//2. Get a number (n) from the user.
// - Calculate and print the total: 1+2+3+...+n.
// - Use a loop and not the formula for this arithmetic sequence.
debugger;
const getNumber: string | null = prompt("Give me a number please :)");
if (getNumber) {
    let num = parseInt(getNumber);
    console.log(num);
    if (!Number.isNaN(num)) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
            console.log(sum);
        }
    }
    else {
        console.log("You didn't gave me number!");
    }
}
