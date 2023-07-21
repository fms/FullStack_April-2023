let x = 5;
let x1 = -100;
let randomn = Math.floor((Math.random() * 100));
let random = Math.floor((Math.random() * 100));
// --------------------
// Positive, Negative
// --------------------
console.log(`Negation of ${x} is ${posneg(x)},\nNegative of ${x1} is ${posneg(x1)}`);
console.log(`The negative of a random number:\n${randomn} : ${posneg(randomn)}`);
console.log('--------------------');
// --------------------
// Larger number
// --------------------
console.log(larger());
console.log('--------------------');
// --------------------
// Fahrenheit to Celsius number
// --------------------
console.log(`Fahrenheit : ${randomn}° is ${fahtocel(randomn)}° Celsius`);
console.log('--------------------');

// --------------------
// Arguments
// --------------------
let q = 20, w = 4;
console.log(`Operation 0: ${arguments(q, w, 0)}`);
console.log(`Operation 1: ${q} + ${w} = ${arguments(q, w, 1)}`);
console.log(`Operation 2: ${q} - ${w} = ${arguments(q, w, 2)}`);
console.log(`Operation 3: ${q} * ${w} = ${arguments(q, w, 3)}`);
console.log(`Operation 4: ${q} / ${w} = ${arguments(q, w, 4)}`);
console.log(`Operation 5: ${arguments(q, w, 5)}`);

function posneg(x: number): number {
    if (x > 0) {
        x *= -1;
    } else {
        x *= -1;
    }
    return x;
}

function larger() {
    let larger = Math.max(random, randomn);
    console.log(`Larger number between ${random} and ${randomn}\nIs : ${larger}`);
}

function fahtocel(f: number): number {
    let c = (f - 32) * 5 / 9;
    return c;
}

function arguments(num1: number, num2: number, op: number){
  if(op === 1){
    return num1 + num2;
  }
  if(op === 2){
    return num1 - num2;
  }
  if(op === 3){
    return num1 * num2;
  }
  if(op === 4){
    return num1 / num2;
  } else if( op < 1 || op > 4) {
    let msg = "Error";
    return msg;
  }
}