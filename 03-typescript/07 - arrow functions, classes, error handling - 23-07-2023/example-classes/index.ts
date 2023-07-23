interface Person{
    firstName: string;
    lastName: string;
    fullName: () => string;
}

// Used a Factory function to create a new object
// function createPerson(/* params */ ): Person {
//     let newPerson: Person {
//         // Some init 
//     }
// 
//     return newPerson;
// }

enum food {
    vegi,
    carnivorn,
    vegan
}

// Encapulation - keep all related values and methods together
// Abstraction - hide implementation details
// Inheritence - the ability to add/alter functionailty of the class by creating a child class
// Polymorphism - a child can used instead of the parent
class Animal {
    
    color: string;
    legs: number ;
    vegi: food = food.vegi;

    constructor(color: string, legs?: number) {
        this.color = color;
        this.legs = legs ?? 0;      // ?? is used to explictly check for null
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
    firstName: string = "Alon";
}

let animal1 = new Animal("black", 4);
animal1.describe();
animal1.vegi = food.vegan;
animal1.eat();

let animal2 = new Animal("brown", 8);
animal2.describe();

class Spider extends Animal{
    constructor(color: string){
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
spider1.sleep();        // Spiders don't sleep

animal1.sleep();        /// zzzzz



// Ploymorphism
let animal3: Animal = spider1;
function showAnimal(theAnimal: Animal) {
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

