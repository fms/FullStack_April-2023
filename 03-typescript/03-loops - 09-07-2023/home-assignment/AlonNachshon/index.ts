/**
 * get a msg to prompt user to enter an integer, assuming the number is positive and > 0
 * @param msg msg to prompt user
 * @returns an int if possible or zero if failed
 */
function getUserInputInt(msg:string):number {
    if(msg){
        let user_int:string | number | null = prompt(msg)
        user_int = user_int == null? 0:parseInt(user_int);
        return user_int
    }
    return 0
}


/**
 * print a msg to console.log() and add n lines after
 * @param n = number of lines - default 1 line
 * @param msg = msg to print to console
 */
function print(msg:string = "", n:number = 1):void{
    console.log(msg);

    if (n){
        for(let j = 0; j < n; j++){
            console.log("")
        }
    }
}

let user_input:number

print("1. Do you know the '99 Bottles of Beer on the wall' song?")

let i:number = 99;

while(i > 1){
    console.log( i + ' bottles of beer on the wall, '+i+' bottles of beer.')
    console.log("Take one down and pass it around, now there's "+(--i)+" more bottles of beer on the wall!")   
}

console.log("1 bottle of beer on the wall, 1 bottle of beer.")
console.log(" Take one down and pass it around, there's no more bottles of beer on the wall!")



print()
print("2. Get a number (n) from the user, Calculate and print the total: 1+2+3+...+n. ",0)
user_input = getUserInputInt("Give me a number to Calculate and print the total: 1+2+3+...+n. : ")

if(user_input){
    let total = 0;

    for(let i = 1; i <= user_input ;i++){
        total += i;
    }
    console.log("You gave the number: "+user_input+", The total of 1+2+3+...+n. : "+total)

}else{
    console.log(user_input+ "- NOT a valid input")
}

print()
print("3. Get a number (n) from the user. calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n)",0)

user_input = getUserInputInt("Give me a number to calculate the total of 1+2+...+n for the series of length 1 to n. (1 + 1+2 + 1+2+3 + ... + 1+2+...+n: ")


if(user_input){
    let total = 0;

    for(let i = 1; i <= user_input ;i++){
        console.log("i "+ i)
        for(let j= 1; j <= i ; j++){
        console.log("j "+ i)
            total += j;
        }
    }

    console.log("You gave the number: "+user_input+", The total of (1 + 1+2 + 1+2+3 + ... + 1+2+...+n): "+total)

}else{
    console.log(user_input+ "- NOT a valid input")
}

print()
print("4. Bonus -  7 Boom for any given number", 0)
user_input = getUserInputInt("Give me a Number to play 7 BOOM with: ")


if(user_input){

    let msg:string = "BOOM"
    if (user_input < 7){
        console.log("No 7 "+msg+" :( found")
    }else{
        let i =1;
        while(i <= user_input){
            if(i % 7 == 0 ){
                console.log(i+" "+msg)
            }else{
                let tmp = i
                while(tmp >= 1){
                    if(Math.floor(tmp % 10) == 7){
                        tmp = -1
                        break
                    }
                    tmp = Math.floor(tmp / 10)
                }
                if(tmp == -1){
                    console.log(i+" "+msg)
                }else{
                    console.log(i)
                }
            }
            i++;
        }
    }
}else{
    console.log(user_input+ " - NOT a valid input")
}



