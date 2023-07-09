"use strict";
let num = 1;
while (num <= 100) {
    if (num % 7 == 0) {
        console.log(num + ' BOOM');
    }
    else {
        console.log(num);
    }
    num++;
}
