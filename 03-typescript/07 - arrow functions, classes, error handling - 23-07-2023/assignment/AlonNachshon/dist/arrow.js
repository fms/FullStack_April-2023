"use strict";
function negative(n) {
    return -n;
}
const negative1 = function (n) {
    return -n;
};
const negative2 = (n) => {
    return -n;
};
const negative3 = (n) => -n;
let array = [10, 20, 40, 80, 90];
let ar2 = array.filter((value) => value % 20 === 0);
console.log(ar2);
const dividedByThree = (n) => n % 3 === 0;
console.log(dividedByThree(90));
let ar3 = array.filter(dividedByThree);
console.log(ar3);
