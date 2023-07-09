var weight = document.getElementById("weight");
var height = document.getElementById("height");
var submit = document.getElementById("submit");
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", function (event) {
    var weightInt = parseInt((weight === null || weight === void 0 ? void 0 : weight.value) || "0");
    var heightInt = parseFloat((height === null || height === void 0 ? void 0 : height.value) || "0");
    console.log(weightInt);
    console.log(heightInt);
    if (weightInt === 0 || heightInt === 0) {
        alert("Your values are not correct");
    }
    else
        alert("Your BMI is " + weightInt / Math.pow(heightInt, 2));
});
