if (2) {console.log("true")} else {console.log("false")}          // true: 2 != 0
if (0) { console.log("true")} else {console.log("false")}         // false: 0 != 0
if ("") { console.log("true")} else {console.log("false")}        // false: "" != ""
if ("0") { console.log("true")} else {console.log("false")}       // true: "0" != ""
if (null) { console.log("true")} else {console.log("false")}      // false
if (undefined) { console.log("true")} else {console.log("false")} // false

var a = 2;
var b = 3;
console.log( a > b );       // false: 2 > 3

// NaN is an unknown value
console.log(NaN == NaN);    // false: Always. unknown == different unknown
console.log(NaN != NaN);    // true:  Always. unknown != different unknown
console.log(Number.isNaN(NaN)); // true check for NaN

a = 0;
b = "0";
console.log( 0 == "0");     // true: "0" (converted from 0) == "0"
console.log( 0 === "0");    // false: different types (number, string)
console.log( a == b);       // true: "0" (converted from 0) == "0"
console.log( a === b);      // false: different types (number, string)

console.log( null == null);        // true
console.log( null == undefined);   // true, false == false
console.log( null === undefined);  // false
console.log( null == "" );         // false, null != empty string

// Negating conditions
a = 5;
b = 6;
console.log(a != b);                // true, different values
console.log( !(a == b) );           // true, different values

// Making sure there's a value
var text = "some value";
console.log( !!text );              // true

text = undefined;
console.log( !!text );              // false

text = "";
console.log( !!text );              // false

// False values in Javascript:
// Type             False   True
// Number               0   != 0
// String              ""   != ""
// null             Always  Never
// undefined        Always  Never    
