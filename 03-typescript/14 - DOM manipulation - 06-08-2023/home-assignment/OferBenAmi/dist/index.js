"use strict";
class Animal {
    constructor(name, legs, eyes, predator, img) {
        this.name = name;
        this.legs = legs;
        this.eyes = eyes;
        this.predator = predator;
        this.img = img;
    }
}
const animals = [
    new Animal(`tiger`, 4, 2, true, `imges/tiger.jpeg`),
    new Animal(`human`, 2, 2, false, `imges/human.jpeg`),
    new Animal(`spider`, 8, 4, true, `imges/spider.jpg`)
];
const container = document.querySelector(`.container`);
if (animals) {
    animals.forEach(animal => {
        const thisAnimalName = document.createElement("h1");
        const thisAnimal = document.createElement(`h4`);
        const thisAninalImg = document.createElement(`img`);
        thisAnimalName.classList.add(`name-class`);
        thisAnimal.classList.add(`description-class`);
        thisAninalImg.classList.add(`img-class`);
        thisAnimalName.textContent = animal.name;
        thisAnimal.innerText = `The ${animal.name} is ${animal.predator ? `` : `not`} a predator, it has ${animal.legs} legs and has ${animal.eyes} eyes`;
        thisAninalImg.src = animal.img;
        thisAninalImg.style.width = `300px`;
        container === null || container === void 0 ? void 0 : container.appendChild(thisAnimalName);
        container === null || container === void 0 ? void 0 : container.appendChild(thisAninalImg);
        container === null || container === void 0 ? void 0 : container.appendChild(thisAnimal);
    });
}
