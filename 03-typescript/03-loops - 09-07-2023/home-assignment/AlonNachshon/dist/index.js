"use strict";
let i = 99;
while (i > 0) {
    console.log('${} bottles of beer on the wall, 99 bottles of beer.');
    if (i % 7 == 0 || i % 10 == 7 || (i >= 71 && i < 80)) {
        console.log("BOOM");
    }
    else {
        console.log(i);
    }
    i--;
}
