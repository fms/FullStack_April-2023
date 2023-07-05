// var a = 5
// var b = 3

// if (a > b) {
//     console.log("The expression is true");

// }
// else {
//     console.log("The expression is false");
// }


// var height = prompt("Enter height")
// if (!Number.isNaN(height) && height) {
//     var heightAsNum = parseInt(height);
//     if (heightAsNum >= 150) {
//         console.log("Your are tall");
//     }
//     else {
//         console.log("You are short");
//     }
// }

var weight = prompt("Enter Weight")
var height = prompt("Enter Height")

if (weight && height) {
    var parsedWeight = parseInt(weight);
    var parsedHeight = parseInt(height) / 100;
    if (!Number.isNaN(parsedHeight) && !Number.isNaN(parsedWeight)) {
        var bmi = Math.round(parsedWeight / (parsedHeight * parsedHeight));
        console.log(bmi);
    } else {
        console.log("Invalid Text");
    }
} else {
    console.log("Invalid Text");
}