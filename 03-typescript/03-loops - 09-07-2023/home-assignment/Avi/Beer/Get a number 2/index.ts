let userinput: string | null = prompt("Enter a number");
if (userinput != null) {
    let input = parseInt(userinput);
    let sum = 0;
    let sum2 = 0


    for (let i = 0; i <= input; i++) {

        sum = sum + i;
        
        for (let j = 0; j <= i; j++) {
            
            sum2 = sum2 + j;
        }

    }
    console.log(`total is: ${sum2}`)
}