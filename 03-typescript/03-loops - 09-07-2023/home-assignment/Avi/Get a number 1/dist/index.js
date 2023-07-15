var number_user = prompt("Enter a number");
if (number_user) {
    var newnumber_user = parseInt(number_user);
    var sum = 0;
    for (var i = 1; i <= newnumber_user; i++) {
        sum = i + sum;
    }
    console.log("total is: " + sum);
}
