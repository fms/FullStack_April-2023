// Classic function definition
function negative(param: number) {
    console.log(`before: ${param}`);
    return -param;
}

// Classic function definition in a variable
const negative1 = function (param: number) {
    console.log(`before: ${param}`);
    return -param;
}

// Arrow function of the same 
const negative2 = (param: number) => {
    console.log(`before: ${param}`);
    return -param;
}

// Arrow function with single statement. We skip the return and the
// braces
const negative3 = (param: number) => -param;

negative(10);
negative1(10);
negative2(10);
negative3(10);

// Example of callback with array
let array = [10, 20, 30, 40];
const filterProductof20 = function (value: number) {
    return value % 20 == 0;
}

// identical examples - get array values that devide by 20
console.log(array.filter((value)=>value % 20 == 0));
console.log(array.filter(filterProductof20));



