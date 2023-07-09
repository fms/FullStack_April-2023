for (var i = 1; i <= 100; i++) {
    if (i % 7 === 0)
        console.log("boom");
    else if (i % 10 === 7)
        console.log(Math.floor(i / 10) + "boom");
    else if (Math.floor(i / 10) === 7)
        console.log("boom" + i % 10);
    else
        console.log(i);
}
