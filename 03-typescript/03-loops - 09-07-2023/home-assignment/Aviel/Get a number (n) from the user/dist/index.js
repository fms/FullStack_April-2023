var userInput = parseInt(prompt("your number ?") || "0");
var total = 0;
if (Number.isNaN(userInput)) {
    console.log("Invalid number");
}
else if (userInput == 0) {
    console.log("You didnt put any number");
}
else {
    for (var i = 1; i <= userInput; i += 2) {
        console.log(i);
        total += i;
    }
    console.log("The total of numbers is: " + total);
}
