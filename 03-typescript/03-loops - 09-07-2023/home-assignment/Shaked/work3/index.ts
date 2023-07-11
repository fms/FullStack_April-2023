let input = prompt(`Please input a number:`) || "0";
let output = parseInt(input);
let total = 0;
let total1 = 0;
if(Number.isNaN(output)){
    alert("This is not a number.");
} else {
    for (let i = 1; i <= output; i++) { 
        for (let j = 1; j <= i; j++) { 
            total1 += j;
        }
        total += i;
    }
    alert(`Inner loop - ${total}\nOuter loop - ${total1}`);
}

