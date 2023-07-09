let userNum = prompt("Give me a number");
let inTotal: number = 0;

if (userNum)
{
    let n = parseInt(userNum);
    if (!isNaN(n))
    {
        for (let outer = 1; outer <=n; outer++)
        {
            for (let calc = 1; calc <= outer; calc++)
            {
                inTotal = inTotal + calc;
            }
        }
        console.log(inTotal);
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