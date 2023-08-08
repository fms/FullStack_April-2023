console.log("connected");
function writeThis(text) {
    console.log(text);
    return "resuls printed";
}
function crazyCalc(a, b) {
    return a * b;
}
var x = "dor";
var num = crazyCalc(2, 3); //7
var firstName = "gili";
console.log(firstName);
// function change(text) {
//     firstName = text
// }
// change("roni")
// console.log(firstName)
var Animal = /** @class */ (function () {
    function Animal(legs, fur, animalName, sound) {
        this.legs = legs;
        this.fur = fur;
        this.animalName = animalName;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var cat = new Animal(4, "black", "kitty", "meow");
cat.makeSound();
