console.log("connected");

function writeThis(text: string) {
  console.log(text);
  return "resuls printed";
}

function crazyCalc(a: number, b: number) {
  return a * b;
}

let x = "dor";

const num = crazyCalc(2, 3); //7

const firstName = "gili";
console.log(firstName);

// function change(text) {
//     firstName = text
// }

// change("roni")

// console.log(firstName)

class Animal {
  legs: number;
  fur: string;
  animalName: string;
  sound: string

  constructor(legs, fur, animalName, sound) {
    this.legs = legs;
    this.fur = fur;
    this.animalName = animalName;
    this.sound = sound
  }

  makeSound() {
    console.log(this.sound)
  }
}

const cat = new Animal(4, "black", "kitty", "meow")

cat.makeSound()