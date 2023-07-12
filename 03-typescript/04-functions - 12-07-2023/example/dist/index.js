"use strict";
separator();
/**
 * get a msg to prompt user to enter an integer, assuming the number is positive and > 0
 * @param msg msg to prompt user
 * @returns an int if possible or zero if failed
 */
function getUserInputInt(msg) {
    if (msg) {
        let user_int = prompt(msg);
        user_int = user_int == null ? 0 : parseInt(user_int);
        return user_int;
    }
    return 0;
}
/**
 * print a msg to console.log() and add n lines after
 * @param n = number of lines - default 1 line
 * @param msg = msg to print to console
 */
function print(msg = "", n = 1) {
    console.log(msg);
    if (n) {
        for (let j = 0; j < n; j++) {
            console.log("");
        }
    }
}
let user_input;
print("2. Get a number (n) from the user, Calculate and print the total: 1+2+3+...+n. ", 0);
user_input = getUserInputInt("Give me a number to Calculate and print the total: 1+2+3+...+n. : ");
if (user_input) {
    // let total = 0;
    // for(let i = 1; i <= user_input ;i++){
    //     total += i;
    // }
    let total = triangularNumber(user_input);
    console.log("You gave the number: " + user_input + ", The total of 1+2+3+...+n. : " + total);
}
else {
    console.log(user_input + "- NOT a valid input");
}
print();
print("3. Get a number (n) from the user. calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n)", 0);
// user_input = getUserInputInt("Give me a number to calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n: ")
separator();
if (user_input) {
    let total = 0;
    for (let currentDepth = 1; currentDepth <= user_input; currentDepth++) {
        // console.log("i "+ currentDepth)
        total += triangularNumber(currentDepth);
    }
    console.log("You gave the number: " + user_input + ", The total of (1 + 1+2 + 1+2+3 + ... + 1+2+...+n): " + total);
}
else {
    console.log(user_input + "- NOT a valid input");
}
// Function definition
function triangularNumber(depth) {
    // let total = 0;
    // for(let j= 1; j <= depth ; j++){
    //     total += j;
    // }
    let total = (depth * (depth + 1)) / 2;
    return total;
}
function separator() {
    console.log("---------------------------");
}
