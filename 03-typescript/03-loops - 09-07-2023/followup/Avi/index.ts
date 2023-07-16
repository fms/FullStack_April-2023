const max = 100;
for (let i = 1; i <= max; i++) {
    if (i % 7 === 0) {
        console.log(`${i} BOOM!`);
    } else {
        console.log(i);
    }
}