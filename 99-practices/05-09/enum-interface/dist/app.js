// enum
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["IDLE"] = "idle";
    StatusEnum["LOADING"] = "loading";
    StatusEnum["FAILED"] = "failed";
})(StatusEnum || (StatusEnum = {}));
var AnimalLegsCount;
(function (AnimalLegsCount) {
    AnimalLegsCount["TWO"] = "two";
    AnimalLegsCount["FOUR"] = "four";
    AnimalLegsCount["EIGHT"] = "eight";
})(AnimalLegsCount || (AnimalLegsCount = {}));
function getStatus(status) {
    if (status === StatusEnum.IDLE) {
        console.log("not started");
    }
    else if (status === StatusEnum.LOADING) {
        console.log("loading");
    }
    else if (status === StatusEnum.FAILED) {
        console.log("function has failed!");
    }
    else {
        console.log("not valid status");
    }
}
getStatus(StatusEnum.IDLE);
console.log(AnimalLegsCount.EIGHT);
var gili = {
    name: "gili",
    year: 1990,
    lastName: "mena",
    legs: AnimalLegsCount.TWO,
    clacAge: function () {
        console.log(new Date().getFullYear() - gili.year);
    }
};
function multi(a, b, c, d) {
    if (!c) {
        return a * b;
    }
    else {
        return a * b * c * d;
    }
}
multi(1, 2, 3);
// const Dor: DeveloperType = {
//   name: "dor",
//   year: 1998,
//   legs: AnimalLegsCount.TWO,
// };
