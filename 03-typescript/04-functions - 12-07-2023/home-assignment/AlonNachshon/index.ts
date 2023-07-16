/**
 * Shortcut to print a msg to console.log
 * @param msg 
 */
const p = (msg?: any) => {
    if(!msg)console.log(" ");
    else console.log(msg);
}

/**
 * Create an indent, each 1 space = 4 whitespace
 * @param space equivellent to 4 whitespace. 
 * @returns a string of whitespaces
 */
const indent = (space: number = 1) => {
    let singleSpace = "    "
    for(let i = 1; i < space ; i++){
        singleSpace += "    "
    }
    return singleSpace
}

/**
 * Print in console a sepoerator equivelent to 4*4 white spaces '-' as defult.
* @param timesRepeat how many times to repeat
* @return a string of seperators repeat.
 */
const sep = (timesRepeat:number = 16):string => {
    let speType = '-'.repeat(timesRepeat)
    p(speType)
    return speType
} 


/**
 * get a msg to prompt user to enter an integer, assuming the number is positive and > 0
 * @param msg msg to prompt user
 * @returns an int if possible or null if failed
 */
function getUserInputInt(msg:string):number | null {
    if(msg){
        let user_int:string | number | null = prompt(msg)
        user_int = user_int == null? user_int:parseFloat(user_int);
        return user_int
    }
    return null
}

/**
 * 1. Write a function to negate the number passed to it.
 * Get a number and change its sign. 
 * @param n number to change the sign '+' => '-' ; '-' => '+'
 * @returns the number with changed sign 
 */
function signChang(n:number):number {
    return -n;
}


/**
 * 2. Write a function that returns the larger of two numbers.
 * @param a first number
 * @param b second number
 * @returns the max between a, b
 */
function max(a:number, b:number): number{
    return a > b ? a:b;
}


/**
 * 3. Convert a Fahrenheit temperature to a Celsius one.
 * @param f Fahrenheit to be converted to Celsius
 * @returns the temperture in Celsius
 */
function fahrenheitToCelsius(f:number): number{
    return (f - 32) * 5 / 9
}

/**
 * Sum of both numbers (a + b)
 * @param a first number
 * @param b second number
 * @returns  a + b
 */
function sum(a:number, b:number):number{
    return a + b
}

/**
 * Difference of both numbers (a - b)
 * @param a first number
 * @param b second number
 * @returns  a - b
 */
function difference(a:number, b:number):number{
    return a - b
}

/**
 * Product of both numbers (a * b)
 * @param a first number
 * @param b second number
 * @returns  a * b
 */
function product(a:number, b:number):number{
    return a * b
}

/**
 * Quotient of both numbers (a / b)
 * @param a first number
 * @param b second number
 * @returns  a / b
 */
function quotient(a:number, b:number):number{
    return a / b
}

function calc():number | void{
    alert("Calculator Function stared, it will accepts three arguments: two numbers and an operation (1-4)")
    let a = getUserInputInt("Provide the 1st number for the calculation")
    if(!a){p("Error with user input."); return}
    let b = getUserInputInt("Provide the 2nd number for the calculation")
    if(!b){p("Error with user input."); return}
    let op = getUserInputInt("Provide an operator (1-4)")
    if(!op){p("Error with user input."); return}
    switch(op){
        case 1: p(`${indent()}${a} + ${b} =`);return sum(a,b);break;
        case 2: p(`${indent()}${a} - ${b} =`);return difference(a,b); break;
        case 3: p(`${indent()}${a} * ${b} =`);return product(a,b); break;
        case 4: p(`${indent()}${a} / ${b} =`);return quotient(a,b); break;
        default:return
    }
}

p("function signChang(n:number)")
p(sep("function signChang(n:number)".length))
p(indent()+"10 => "+signChang(10))
p(indent()+"-1 => "+signChang(-1))
p()

p("function max(a:number, b:number)")
p(sep("function max(a:number, b:number)".length))
p(indent()+"10, 100 => "+max(10,100))
p(indent()+"-1, -15 => "+max(-1, -15))
p(indent()+"-2, 2 => "+max(-2, 2))
p()

p("function fahrenheitToCelsius(f:number)")
p(sep("function fahrenheitToCelsius(f:number)".length))
p(indent()+"32 => "+fahrenheitToCelsius(32))
p(indent()+"100 => "+fahrenheitToCelsius(100).toFixed(2))
p()

p("function calc()")
p(sep("function calc()".length))
p(indent()+calc())
