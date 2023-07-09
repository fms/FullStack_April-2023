let i:number = 1;

while(i<=100){
    if(i%7 == 0 || i%10 == 7 || i >=71 && i<80){
        console.log("BOOM")
    }else{
        console.log(i)
    }
    i++;
}