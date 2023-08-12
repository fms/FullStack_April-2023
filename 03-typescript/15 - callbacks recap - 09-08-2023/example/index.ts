let array:number[] = [ 1 ,2,3, 4, 5, 6, 7, 8, 9, 0];

let array2 = array.map(value => value * 2);
console.log(array);
console.log(array2);

let array3 = array.filter(evenNumber);
console.log(array3);

let array4 = array.filter(biggerThanPrevious);
console.log(array4);

let array5 = array.filter(
    (value: number, index: number, array: number[]) => index > 0 && array[index - 1] < value);
console.log(array5);


function biggerThanPrevious(value: number, index: number, array: number[]) {
    return (index > 0 && array[index - 1] < value);
}

function timesTwo(value: number, index: number, array: number[]) {
    console.log(`timesTwo value: ${value} ${index} ${array}`);
    return value * 2;
}

function evenNumber(value: number, index: number, array: number[]) {
    console.log(`evenNumber value: ${value}, ${(value % 2) == 0}`);
    return (value % 2) == 0;
}
