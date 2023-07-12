let userInput = parseInt(prompt("Enter a number")|| "0")
let total = 0;
let totalOfTotal = 0

if (!Number.isNaN(userInput)) {
    for (let i = 0; i <= userInput; i++) {
        total += i
        for (let j = 0; j <= i; j++) {
            totalOfTotal += j
        }
    }
    console.log(total);
    console.log(totalOfTotal);
}
else{
    console.log("Invalid value");
}
