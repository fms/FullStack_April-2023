"use strict";
class Animal {
    constructor(name, legs, eyes, predator) {
        this.name = name;
        this.legs = legs;
        this.eyes = eyes;
        this.predator = predator;
    }
}
const animals = [
    new Animal(`tiger`, 4, 2, true),
    new Animal(`human`, 2, 2, true),
    new Animal(`spider`, 8, 4, true)
];
let a = ``;
let fullStr = animals.forEach(animal => `The name of the animal is ${animal.name}, it has ${animal.legs} legs and ${animal.predator ? `is` : `is not`} a predator, it has ${animal.eyes} eyes`);
console.log(fullStr);
