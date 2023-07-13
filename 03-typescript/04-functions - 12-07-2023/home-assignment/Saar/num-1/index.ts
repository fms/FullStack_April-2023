// 1. Write a function to negate the number passed to it:
// - 5 ==> -5
// - -100  ==> 100


let numFromUser = parseInt(prompt("Write a number") || "0")

function  negate(num :number): void
{
    if (Number.isNaN(numFromUser))
     {
        console.log("invalid number");
    }
    else if (num == 0)
     {
        console.log(0);
    }
    else 
    {
        num *= -1;
        console.log(num)
    }
}

negate(numFromUser)