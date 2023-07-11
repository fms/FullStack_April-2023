"use strict";
let height = prompt("What is your height?");
let age = prompt("What is your age?");
let playersInTeam = 5;
const minHeight = 193;
const minAge = 18;
const maxAge = 27;
while (playersInTeam <= 9) {
    if (height && age) {
        let parseHeight = parseInt(height);
        let parseAge = parseInt(age);
        if (Number.isNaN(parseHeight) && Number.isNaN(parseAge)) {
            console.log("Invalid number");
        }
        else if (parseAge <= minAge && parseAge >= maxAge && parseHeight <= minHeight) {
            console.log(`Your parameters is not good what we are searching for, try somowhere else, good luck!`);
            playersInTeam++;
        }
        else {
            console.log("You can be in our team!");
        }
        height = prompt("What is your height?");
        age = prompt("What is your age?");
    }
}
if (parseInt(height || "0") == 0) {
    console.log("you didnt put any parameter.");
}
else {
    console.log(`Your number of players in the team is ${playersInTeam}`);
}
