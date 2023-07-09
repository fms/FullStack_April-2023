"use strict";
let i = 1;
while (i <= 100) {
    if (i % 7 == 0 || i % 10 == 7 || (i >= 71 && i < 80)) {
        console.log(i + " BOOM");
    }
    else {
        console.log(i);
    }
    i++;
}
