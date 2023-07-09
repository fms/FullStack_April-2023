"use strict";
for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0 || i % 10 == 7) {
        console.log("Boom");
    }
    else {
        console.log(i);
    }
}
