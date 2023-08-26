function negate(num: number):number{
    return -num;
}

console.log(negate(-100));
console.log(negate(5));


function largerNum(num1: number, num2: number):number{
    if(num1<num2){
        return num2;
    }
    else if(num1>num2){
        return num1;
    }
    else if(num1==num2){
        return 0;
    }
    else{
        return -1;
    }
}

console.log(largerNum(5,9));
console.log(largerNum(10,8));

function fahToCel(num: number):number{
    return(
        (num-32)*(5/9)
    )
}

console.log(fahToCel(100));

function fourt(num1: number, num2: number, op: number):number|string{
    if(op==1){
        return num1+num2;
    }
    else if(op==2){
        return num1-num2;
    }
    else if(op==3){
        return num1*num2;
    }
    else if(op==4){
        return num1/num2;
    }
    else{
        return "There is an error!"
    }
}

console.log(fourt(1,2,4-2));






















