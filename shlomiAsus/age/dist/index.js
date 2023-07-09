var age = prompt("what is your age?") || "0";
var ageAsNum = parseInt(age);
if (ageAsNum) {
    if (ageAsNum > 21) {
        if (ageAsNum > 30) {
            if (ageAsNum > 40) {
                if (ageAsNum > 50) {
                    if (ageAsNum > 60) {
                        if (ageAsNum > 70) {
                            prompt("your old!!");
                        }
                        else {
                            prompt("your very old more then 60!!");
                        }
                    }
                    else {
                        prompt("your not so old!! (50)");
                    }
                }
                else {
                    prompt("your still at your best!!(40)");
                }
            }
            else {
                prompt("30 is the new 30!");
            }
        }
        else {
            prompt("20 means your young!!");
        }
    }
    else {
        prompt("your baby!!");
    }
}
else {
    alert("you didnt press number", age);
}
