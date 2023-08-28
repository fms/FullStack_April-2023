const array = [10, 20, 30, /* empty */, /* empty */ ,8, /* empty */, /* empty */ , /* empty */];
//              0   1   2      3           4         5      6           7        ^-- Last comma is ignored

//
// Example of loops
// 

// for loop converts empty to undefined and includes all array elements
// Recommendation: Don't use!!!
console.log("for loop");

for(let index = 0; index < array.length; index++) {
    console.log(`array[${index}] = ${array[index]}`);
}

// Array.forEach()
console.log("foreach with function");

function print(value:any) {
    console.log(value);
    
}

// Call the function print() for each element in array
// Skips empty elements
array.forEach(print);

console.log("foreach with anonymous function");

// The same using anonymous function
array.forEach(function (value) {
    console.log(value);
});

// The same using arrow function
console.log("foreach with anonymous arrow function");
array.forEach((value) => console.log(value));

// for in
console.log("for in loop");

for(let index in array) {
    console.log(`array[${index}] = ${array[index]}`);
}

// for of - don't use
console.log("for of loop");
for(let element of array) {
    console.log(element);
}
