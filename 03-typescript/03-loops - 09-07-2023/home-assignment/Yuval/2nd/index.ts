let userInput = prompt("Give me a number");
let total: number = 0;

if (userInput)
{
    let n = parseInt(userInput);
    if (!isNaN(n))
    {
        for (let calc = 1; calc <= n; calc++)
        {
            total = total + calc;
        }
        console.log(total);
    }
    else
    {
        console.log("Not a number");
    }
}
else
{
    console.log("Not a number");
}
