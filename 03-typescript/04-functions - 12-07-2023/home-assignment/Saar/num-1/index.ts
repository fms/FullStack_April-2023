// 1. Write a function to negate the number passed to it:
// - 5 ==> -5
// - -100  ==> 100


let numFromUser = parseInt(prompt("Write a number") || "0")

function  negate(num :number) :number
{
    if (Number.isNaN(num))
     {
        console.log("invalid number");
    }
    return (-num === -0 ? 0 : -num );
}

console.log(negate(numFromUser));
