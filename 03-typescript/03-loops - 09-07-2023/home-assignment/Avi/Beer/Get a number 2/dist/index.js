var userinput = prompt("Enter a number");
if (userinput != null) {
    var input = parseInt(userinput);
    var sum = 0;
    var sum2 = 0;
    for (var i = 0; i <= input; i++) {
        sum = sum + i;
        for (var j = 0; j <= i; j++) {
            sum2 = sum2 + j;
        }
    }
    console.log("total is: " + sum2);
}
