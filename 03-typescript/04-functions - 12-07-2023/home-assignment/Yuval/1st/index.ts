function negative (num: number) : number
{
    let negativeNum: number;
    return (negativeNum = num - num - num);
}

console.log(`Original number: 5, negated number: ${negative(5)}`);
console.log(`Original number: -21, negated number: ${negative(-21)}`);
