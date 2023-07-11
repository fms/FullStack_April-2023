let num = 1
while (num <= 100) {
    if (num % 7 === 0 || num % 10 === 7) {
        console.log("Boom");
    }
    else {
        console.log(num);
    }
    num++
}
