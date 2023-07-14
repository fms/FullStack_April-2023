function temperatureConvert (f: number) : number
{
    let c = (f - 32) * 5 / 9;
    return c;
}

console.log(`32F = ${temperatureConvert(32)}C`);
console.log(`100F = ${temperatureConvert(100)}C`);
console.log(`-400F = ${temperatureConvert(-400)}C`);
console.log(`212F = ${temperatureConvert(212)}C`);