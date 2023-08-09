var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var array2 = array.map(function (value) { return value * 2; });
console.log(array);
console.log(array2);
var array3 = array.filter(evenNumber);
console.log(array3);
var array4 = array.filter(biggerThanPrevious);
console.log(array4);
var array5 = array.filter(function (value, index, array) { return index > 0 && array[index - 1] < value; });
console.log(array5);
function biggerThanPrevious(value, index, array) {
    return (index > 0 && array[index - 1] < value);
}
function timesTwo(value, index, array) {
    console.log("timesTwo value: " + value + " " + index + " " + array);
    return value * 2;
}
function evenNumber(value, index, array) {
    console.log("evenNumber value: " + value + ", " + ((value % 2) == 0));
    return (value % 2) == 0;
}
