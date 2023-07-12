
for (let num = 1; num <= 100; num++)
{
    if (num % 7 === 0 || (num.toString()).includes("7"))
    {
        console.log(`${num} BOOM`);
    }
    else
    {
        console.log(num);
    }
}