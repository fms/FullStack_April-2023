
/*99 Bottles of Beer*/

for(let bottleCount = 99 ; bottleCount > 0 ; bottleCount--)
{
    if(bottleCount == 1){
        console.log('${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.`Take one down and pass it around, Take one down and pass it around, theres no more bottles of beer on the wall!')      
    }
    else {
    console.log(`${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.`);
    console.log(
      `Take one down and pass it around, now there's ${
        bottleCount - 1
      } more bottles of beer on the wall!`
    );
  }
}

/*Get a number (n) from the user.

Calculate and print the total: 1+2+3+...+n.
Use a loop and not the formula for this arithmetic sequence.*/

/*let userInput = parseInt(prompt('Please Write some numbers to calculate the total');
let sum = 0;

if(userInput <= 0){
  
}
sum+=userInput;*/

let userInput = parseInt(prompt("Please Enter numbers for the total calculation") || "0");
let sum = 0;

for (let i = 0; i <= userInput; i++){

  if (!Number.isNaN(userInput)) {
    
     sum+=userInput;
  }
  else {
    console.log("its  not a number");
  }
}

/*Get a number (n) from the user.

Use nested loops and calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n).
Use an outer loop from 1 to n (outer)
Use an inner loop for the 1+2+...outer (again, loop, not formula)*/

let totalOfTotal = 0

if (!Number.isNaN(userInput)) {
    for (let i = 0; i <= userInput; i++) {
        sum += i
        for (let j = 0; j <= i; j++) {
            totalOfTotal += j
        }
    }
    console.log(sum);
    console.log(totalOfTotal);
}
else{
    console.log("Invalid value");
}



