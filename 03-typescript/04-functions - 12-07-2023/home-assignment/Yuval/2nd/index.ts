function larger (num1: number, num2: number) : any
{
    if (num1 > num2)
    {
        return (num1);
    }
    else if (num2 > num1)
    {
        return (num2);
    }
    else
    {
        return ("neither because they are equal");
    }
}

console.log(`The larger number between 15 and 22 is ${larger(15 , 22)}`);
console.log(`The larger number between 27 and 2 is ${larger(27 , 2)}`);
console.log(`The larger number between -99999 and 0 is ${larger(-99999 , 0)}`);
console.log(`The larger number between 14523 and 14523 is ${larger(14523 , 14523)}`);
