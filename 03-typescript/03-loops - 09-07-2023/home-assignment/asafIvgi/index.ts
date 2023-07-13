let counter = 99;
while (counter > 0) {
    console.log(`${counter} bottles of beer on the wall, ${counter} bottles of beer.`)
    if (counter == 1){
        console.log("Take one down and pass it around, there's no more bottles of beer on the wall!")
        counter--
    } else {
    console.log(`Take one down and pass it around, now there's ${--counter} more bottles of beer on the wall!`)
    }
}




let total: number = 0;
let userInput: string | null = prompt("Pick a Number (n):");
// console.log(userInput)
let n = parseInt(userInput)
// console.log(n)
if (Number.isNaN(n)) {
    console.log("Not a number, try again.")
} else {
    for (let nCount = 1; nCount <= n; nCount++) {
        total += nCount;
    }
}
console.log(total)




let outTotal = 0;
let innerTotal = 0;
let secUserInput: string | null = prompt("Pick a Number (secN):");
let secN = parseInt(secUserInput);
if (Number.isNaN(secN)) {
    console.log("Not a number, try again.");
} else {
    for (let outNCount = 1; outNCount <= secN; outNCount++) {
        for (let innerNCount = outNCount; innerNCount <= secN; innerNCount++) {
            innerTotal += innerNCount
        }
        outTotal += innerTotal
    }
}
console.log(outTotal)
