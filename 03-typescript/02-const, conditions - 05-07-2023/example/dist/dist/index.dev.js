"use strict";

var ageOfConsentInIsrael = 18;
var ageOfConsentInUSA = 21; // ageOfConsentInUSA = 22;          // Invalid: can't update a constant

var age = prompt("What is you age?"); // if (age == null)         // Make sure age is not null
// {
//     age = "0";
// }
// var ageAsNum = parseInt(age);    // age is now string type only
// && - and: both conditions should be true, short-circuit
// || - or: at least one condition should be true, short-circuit
// var a:number;
// var b:number;
// a = b = 5;
// console.log(a);
// console.log(b);
// possible values for age:
// age = null        ==> false
// age = ""          ==> false
// age = "some text" ==> true

var ageToParse = age || "0";

if (age) {
  // age != null && age != "" 
  var ageAsNum = parseInt(age); // NaN if can't be parsed to number

  console.log(ageAsNum);

  if (!Number.isNaN(ageAsNum)) {
    if (ageAsNum >= ageOfConsentInUSA) {
      console.log("Alcohol is fine, but don't overdo it!");
    } else if (ageAsNum >= ageOfConsentInIsrael) {
      // if (ageAsNum > 18 || ageAsNum == 18) {
      console.log("Ok in Israel, not in the USA");
    } else {
      console.log("No alcohol for you!");
    }
  } else {
    console.log("Can't convert age to number!");
  }
} else if (age == null) // if (age == null)
  {
    console.log("You canceled!");
  } else {
  console.log("You didn't specify an age!");
} // oprators:
// ==  !=  compare two values, converting type if needed
// === !== compare two values including their type