"use strict";

console.log("hey");
var counter = 99;

while (counter >= 0) {
  console.log(counter + " bottles of beer on the wall, " + counter + " bottles of beer.");
  console.log("Take one down and pass it around, now there's " + --counter + " more bottles of beer on the wall!");
  counter--;
}