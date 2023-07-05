var worker1 = {
    age: 24,
    job: "programmer",
    yearsOfExp: 4,
    isAvailableToWork: true
};
if (worker1.age >= 24 &&
    worker1.job == "programmer" &&
    worker1.yearsOfExp >= 3 &&
    worker1.isAvailableToWork == true)
    console.log("He can work here");
else
    console.log("He cannot work here");
var printEvens = function () {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
};
var printOdds = function () {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 != 0)
            console.log(i);
    }
};
var head1 = document.getElementById('head1');
head1 === null || head1 === void 0 ? void 0 : head1.classList.add("head1-from-ts");
head1 === null || head1 === void 0 ? void 0 : head1.classList.remove("head1");
