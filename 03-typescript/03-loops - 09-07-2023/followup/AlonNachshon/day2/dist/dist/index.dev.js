"use strict";
/*
let vs var => Variables declared by let are only available inside the block where they're defined.
Variables declared by var are available throughout the function in which they're declared.
*/

console.log("Header - This will be printed after the page was loaded althogh in <Header> because i used defer");
var x = 15;
console.log(x);
var y = 20;
console.log(y);
var n = 5; // number

var d = 5.5; //number

var str = "str"; //string

var emptyStr = ""; // "" => false

var thisIsUndefined; // undifined => false

var bool = true; // boolean => false = 0 , true = 1

var nullValue = null; //object => false
// Tis is an object

var userDetails = {
  firstName: "A",
  lastName: "n",
  age: 13
};
var field = "email";
var firstName = "B";
console.log(userDetails['firstName']);
console.log(userDetails.firstName);
console.log(userDetails.lastName);
userDetails.firstName = "Ploni";
console.log(userDetails.firstName);
var size = 10;
var i = 0;

function logName(name) {
  console.log("Hi " + name.firstName + " " + name.lastName);
}

function birthday(age) {
  if (age.age == 13) {
    console.log("Mazal tov for your Bar mitsva!");
  } else if (age.age > 13) {
    console.log("You are too old!");
  } else {
    console.log("You are a baby!");
  }

  ;
}

logName(userDetails);
birthday(userDetails);
userDetails.age = 90;
birthday(userDetails);
userDetails.age = 3;
birthday(userDetails); // document.body.innerHTML = JSON.stringify(userDetails);

console.log(userDetails);
var app = document.getElementById("app");
var p = document.createElement("p");
p.textContent = "Hello World!";
var p1 = document.createElement("p");
p1.textContent = "Alon's World";
var p2 = document.createElement("p");
app === null || app === void 0 ? void 0 : app.appendChild(p);
app === null || app === void 0 ? void 0 : app.appendChild(p1);
var j = 2;
var k = j == 2 ? 3 : 5;
p2.textContent = k.toString();
app === null || app === void 0 ? void 0 : app.appendChild(p2);