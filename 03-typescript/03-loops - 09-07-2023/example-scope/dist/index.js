"use strict";
let shlomi = 100;
{
    let shlomi = 10;
    let shlomi1 = 10;
    console.log(`inside let: ${shlomi}`);
}
console.log(`outside let: ${shlomi}`);
// Error: shlomi1 is unknown outside the block
// console.log(`outside let: ${shlomi1}`);
var shmuel = 100;
{
    var shmuel = 10;
    var shmuel1 = 10;
    console.log(`inside var: ${shmuel}`);
}
console.log(`outside var: ${shmuel}`);
// Known, despite being declared inside the block.
// Known in the entire file
console.log(`outside var: ${shmuel1}`);
