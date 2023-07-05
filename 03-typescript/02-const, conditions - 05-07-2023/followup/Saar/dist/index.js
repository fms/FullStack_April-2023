var ageOfConsentInIsrael = 18;
var ageOfConsentInUSA = 21;
var age = prompt("what is your age?");
if (age) {
    var ageAsNum = parseInt(age);
    console.log(ageAsNum);
    if (!Number.isNaN(ageAsNum)) {
        if (ageAsNum >= 21) {
            console.log("Alcohol is fine, but don't overdo it!");
        }
        else if (ageAsNum >= 18) {
            console.log("Ok in israel, not in USA");
        }
        else {
            console.log("you cant drink!");
        }
    }
    else {
        console.log("Can't convert age to number!");
    }
}
else {
    console.log("You didn't specify an age!");
}
