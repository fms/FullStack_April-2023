var shlomi = 100;
{
    var shlomi_1 = 10;
    var shlomi1 = 10;
    console.log("inside let: " + shlomi_1);
}
console.log("outside let: " + shlomi);
// Error: shlomi1 is unknown outside the block
// console.log(`outside let: ${shlomi1}`);
var shmuel = 100;
{
    var shmuel = 10;
    var shmuel1 = 10;
    console.log("inside var: " + shmuel);
}
console.log("outside var: " + shmuel);
// Known, despite being declared inside the block.
// Known in the entire file
console.log("outside var: " + shmuel1);
