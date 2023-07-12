"use strict";
/**
 * get a msg to prompt user to enter an integer, assuming the number is positive and > 0
 * @param msg msg to prompt user
 * @returns an int if possible or zero if failed
 */
function getUserInputInt(msg) {
    let user_int = prompt(msg);
    user_int = user_int == null ? 0 : parseInt(user_int);
    return user_int;
}
/**
 * print a msg to console.log() and add n lines after
 * @param n = number of lines - default 1 line
 * @param msg = msg to print to console
 */
function print(msg, n = 1) {
    if (msg) {
        console.log(msg);
    }
    for (let j = 0; j < n; j++) {
        console.log("");
    }
}
let user_input;
print();
print("1. Do you know the '99 Bottles of Beer on the wall' song?");
let i = 99;
while (i > 0) {
    if (!(i == 1)) {
        console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
        console.log("Take one down and pass it around, now there's " + (i - 1) + " more bottles of beer on the wall!");
    }
    else {
        console.log("1 bottle of beer on the wall, 1 bottle of beer.");
        console.log(" Take one down and pass it around, there's no more bottles of beer on the wall!");
    }
    i--;
}
print();
print("2. Get a number (n) from the user, Calculate and print the total: 1+2+3+...+n. ", 0);
user_input = getUserInputInt("Give me a number to Calculate and print the total: 1+2+3+...+n. : ");
if (user_input) {
    let total = 0;
    for (let i = 1; i <= user_input; i++) {
        total += i;
    }
    console.log("You gave the number: " + user_input + ", The total of 1+2+3+...+n. : " + total);
}
else {
    console.log(user_input + "- NOT a valid input");
}
print();
print("3. Get a number (n) from the user. calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n)", 0);
user_input = getUserInputInt("Give me a number to calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n: ");
if (user_input) {
    let total = 0;
    for (let i = 1; i <= user_input; i++) {
        for (let j = 1; j < i; j++) {
            total += j;
        }
        total += i;
    }
    console.log("You gave the number: " + user_input + ", The total of (1 + 1+2 + 1+2+3 + ... + 1+2+...+n): " + total);
}
else {
    console.log(user_input + "- NOT a valid input");
}
print();
print("4. Bonus -  7 Boom for any given number", 0);
user_input = getUserInputInt("Give me a Number to play 7 BOOM with: ");
if (user_input) {
    let msg = "BOOM";
    if (user_input < 7) {
        console.log("No " + msg + " :( found");
    }
    else {
        let i = 1;
        while (i <= user_input) {
            if (i % 7 == 0) {
                console.log(i + " " + msg);
            }
            else {
                let tmp = i;
                while (tmp >= 1) {
                    if (Math.floor(tmp % 10) == 7) {
                        tmp = -1;
                        break;
                    }
                    tmp = Math.floor(tmp / 10);
                }
                if (tmp == -1) {
                    console.log(i + " " + msg);
                }
                else {
                    console.log(i);
                }
            }
            i++;
        }
    }
}
else {
    console.log(user_input + "- NOT a valid input");
}
