class Animal {
  constructor(
    public name: string,
    public legs: number,
    public eyes: number,
    public predator: boolean
  ) {}
}

const animals: Animal[] = [
    new Animal(`tiger`, 4, 2,true),
    new Animal(`human`,2,2,true),
    new Animal(`spider`,8,4,true)

];
let a = ``;
let fullStr = animals.forEach(animal => `The name of the animal is ${animal.name}, it has ${animal.legs} legs and ${animal.predator ? `is`: `is not`} a predator, it has ${animal.eyes} eyes`);
console.log(fullStr);
