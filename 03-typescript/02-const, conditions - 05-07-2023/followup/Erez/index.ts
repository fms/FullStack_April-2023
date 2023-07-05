var weight: string | null = prompt("What is you weight?");
var weightToParse = weight || "0";
var height: string | null = prompt("What is you height?");
var heightToParse = height || "0";


if (weight) {                          
    var weightAsNum = parseInt(weight); 
    console.log(weightAsNum);
    
    if (!Number.isNaN(weightAsNum)) {
        if (weightAsNum >= ageOfConsentInUSA) {
            console.log("Alcohol is fine, but don't overdo it!");
        } else if (ageAsNum >= ageOfConsentInIsrael) {        // if (ageAsNum > 18 || ageAsNum == 18) {
                console.log("Ok in Israel, not in the USA");
        } else {
            console.log("No alcohol for you!");
        }
    }
    else {
        console.log("Can't convert age to number!");
    }
}
else if (age == null)                         // if (age == null)
{
    console.log("You canceled!");
}
else
{
    console.log("You didn't specify an age!");
}
