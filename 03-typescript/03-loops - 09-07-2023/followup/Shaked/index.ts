
let num = 7;
for (let i = 0; i <= 100; i++) {
    if ((i % 10) === num) {
        console.log(`${i} - BOOM`);
    }
    else if (Math.floor(i / 10) === num) {
        console.log(`${i} - BOOM`);
    }
    while (i % num === 0) {
        console.log(`${i} - Boom`);
        i++;
    }
    console.log(i);
}

