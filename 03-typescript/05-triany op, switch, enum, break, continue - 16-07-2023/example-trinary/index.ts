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
console.log(`The number ${input} divides by ${input % 3 === 0 ? (input % 5 === 0 ?"15" :"3"): "something else"}`)

// This is equivelent to 
let dividorAsString:string;
if (input % 3 === 0) {                      // Outer trinary

    if (input % 5 === 0) {                  // Inner trinary - true of outer trinary
        dividorAsString = "15";             // True for inner trinary
    }
    else {
        dividorAsString = "3";              // False for inner trinary
    }
}
else
{
    dividorAsString = "something else";     // False of outer trinary
}

console.log(`The number ${input} divides by ${dividorAsString}`);
