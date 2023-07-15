let number_user: string | null = prompt("Enter a number")
if(number_user){
    
    let newnumber_user = parseInt(number_user);
    let sum = 0;
    for(let i = 1; i <= newnumber_user; i++){
        sum = i + sum;
    }
    console.log(`total is: ${sum}`)
}
























