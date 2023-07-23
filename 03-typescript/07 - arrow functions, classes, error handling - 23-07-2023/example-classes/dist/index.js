"use strict";
// Used a Factory function to create a new object
// function createPerson(/* params */ ): Person {
//     let newPerson: Person {
//         // Some init 
//     }
// 
//     return newPerson;
// }
var food;
(function (food) {
    food[food["vegi"] = 0] = "vegi";
    food[food["carnivorn"] = 1] = "carnivorn";
    food[food["vegan"] = 2] = "vegan";
})(food || (food = {}));
// Encapulation - keep all related values and methods together
// Abstraction - hide implementation details
// Inheritence - the ability to add/alter functionailty of the class by creating a child class
// Polymorphism - a child can used instead of the parent
class Animal {
    constructor(color, legs) {
        this.vegi = food.vegi;
        this.color = color;
        this.legs = legs !== null && legs !== void 0 ? legs : 0; // ?? is used to explictly check for null
        // || is used to check for false values (including null)
    }
    describe() {
        console.log(`Out color is ${this.color} and we have ${this.legs} legs`);
    }
    sleep() {
        console.log('zzzzz');
    }
    eat() {
        switch (this.vegi) {
            case food.vegi:
                console.log('We eats grass!');
                break;
            case food.carnivorn:
                console.log(`We eat meat!`);
                break;
            case food.vegan:
                console.log("We also don't eat dairy products");
        }
    }
}
class Alon {
    constructor() {
        this.firstName = "Alon";
    }
}
let animal1 = new Animal("black", 4);
animal1.describe();
animal1.vegi = food.vegan;
animal1.eat();
let animal2 = new Animal("brown", 8);
animal2.describe();
class Spider extends Animal {
    constructor(color) {
        super(color, 8);
    }
    climb() {
        console.log("I climb the web");
    }
    sleep() {
        console.log("Spiders don't sleep!");
        super.sleep();
    }
}
let spider1 = new Spider("brown");
spider1.climb();
spider1.describe();
spider1.sleep(); // Spiders don't sleep
animal1.sleep(); /// zzzzz
// Ploymorphism
let animal3 = spider1;
function showAnimal(theAnimal) {
    theAnimal.describe();
}
showAnimal(animal1);
showAnimal(spider1);
// const color = "black";
// const legs = 4;
// const vegi = true;
// const describe = function (color: string, legs: number) {
//     console.log(`Out color is ${color} and we have ${legs} legs`);
// }
// Access modifiers
// public: available to everyone, inside the class and from outside.
// private: available only inside the same class.
// protected: available inside the class and its children
class Age {
    // protected readonly age: number = _age;
    constructor(age) {
        this.firstName = 'aaa';
        this._age = age;
    }
    yearOfBirth() {
        return new Date().getFullYear() - this._age;
    }
}
class Age1 {
    constructor(age, firstName) {
        this.age = age;
        this.firstName = firstName;
    }
    yearOfBirth() {
        return new Date().getFullYear() - this.age;
    }
}
class newAge extends Age {
    anotherYear() {
        return new Date().getFullYear() - this.age;
    }
}
let age1 = new Age(50);
// age1._age = 20;
console.log(age1.yearOfBirth());
let age2 = new Age1(10, "Sam");
console.log(Object.keys(age2));
for (let property of Object.keys(age2)) {
    console.log(`Property: ${property}`);
}
