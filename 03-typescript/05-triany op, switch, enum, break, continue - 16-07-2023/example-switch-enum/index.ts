let input = 5;
console.log(`The number ${input} is ${input % 2 === 0 ? "even" : "odd"}`);

// This is the same as:
if (input % 2 === 0)
{
    console.log(`The number ${input} is even`);
}
else
{
    console.log(`The number ${input} is odd`);
}

// Nested trinary operator
console.log(`The number ${input} divides by ${input % 3 === 0 ? (input % 5 === 0 ? "15" :"3"): "something else"}`)

// This is equivelent to 
let divisorAsString:string;
if (input % 3 === 0 && input % 5 === 0) {
    divisorAsString = "15";
}
else if (input % 3 === 0) {
    divisorAsString = "3";
}
else
{
    divisorAsString = "something else";
}

console.log(`The number ${input} divides by ${divisorAsString}`);
