let userNum = parseInt( prompt("Enter your number!") || "0");
let total = "";
let plus = "+"
let sum = 0;

while (Number.isNaN(userNum) || userNum == 0){
    userNum = parseInt( prompt("This is not a valid number!! Enter your number!") || "0");
}

for (let counter = 1; counter <= userNum; counter++){
    if (counter == userNum){
        plus = "=";
    }

    total += `${counter} ${plus} `;
    sum += counter; 
}

console.log(`${total}${sum}`);