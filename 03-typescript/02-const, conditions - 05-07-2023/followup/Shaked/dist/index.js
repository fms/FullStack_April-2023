// let age = prompt("Hey, what's your age?");
var weight = prompt("Hey, what's your weight?");
var height = prompt("And your height? (example 1.62)");
// let intage = parseInt(age || "0");
var intweight = parseInt(weight || "0");
var floatheight = parseFloat(height || "0.1");
var bmi = intweight / Math.pow(floatheight, 2);
if (intweight <= 0 || floatheight <= 0) {
    alert("It is illegal to enter 0 or below");
}
else if (intweight != null && floatheight != null) {
    alert('Your bmi is: ' + bmi);
}
else {
    alert("You must type something!");
}
if (intweight >= 140) {
    alert("It is not healthy to be at this weight");
}
