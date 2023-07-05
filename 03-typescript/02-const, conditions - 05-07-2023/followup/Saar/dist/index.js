// const ageOfConsentInIsrael = 18;
// const ageOfConsentInUSA = 21;
// var age = prompt ("what is your age?");
// if (age) {
//    var ageAsNum = parseInt(age);
//    console.log(ageAsNum);
//    if (!Number.isNaN(ageAsNum)) {
//     if (ageAsNum >= 21) {
//         console.log("Alcohol is fine, but don't overdo it!")
//     }
//     else if (ageAsNum >= 18) {
//         console.log("Ok in israel, not in USA");
//     }
//     else {
//         console.log("you cant drink!");
//     }
//    }
//    else {
//     console.log("Can't convert age to number!");
//    }
// }
// else {
//     console.log("You didn't specify an age!");
// }
// BMI = Weight(KG) / Height ^2 (M)
var yourWeight = prompt("What is your weight?(Kilograms)");
var yourHeight = prompt("What is your height?(Meters)");
if (yourWeight && yourHeight) {
    var parseWeight = parseInt(yourWeight);
    var parseHeight = parseInt(yourHeight) / 100;
    if (!Number.isNaN(parseWeight) && !Number.isNaN(parseHeight)) {
        var BMI = (parseWeight / (parseHeight * parseHeight));
        console.log(Math.round(BMI));
    }
    else {
        console.log("Invalid Number");
    }
}
else {
    console.log("I guess we will never know");
}
