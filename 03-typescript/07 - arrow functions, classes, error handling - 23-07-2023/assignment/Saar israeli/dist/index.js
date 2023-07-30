"use strict";
// Create a Car class:
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)
// - Add any methods you'd like
class Car {
    constructor(maker, model, year, milage, fuelConsunmption) {
        this.describe = () => console.log(`Car maker is ${this.maker} , the model is ${this.model} and the year is ${this.year}`);
        this.totalFuelConsumtionlog = () => console.log(this.milage / this.fuelConsunmption);
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsunmption = fuelConsunmption;
    }
}
let mazda = new Car("Mazda", "Mazda 3", 2023, 100000, 60.008388);
mazda.describe();
mazda.totalFuelConsumtionlog();
class RaceCar extends Car {
    constructor(maker, model, year, milage, fuelConsunmption, kmPH) {
        super(maker, model, year, milage, fuelConsunmption);
        this.maxKmPerHour = () => console.log(`max speed is ${this.kmPH} km/h`);
        this.kmPH = kmPH;
    }
}
let bugatti = new RaceCar("Bugatti", "Divo", 2018, 75000, 50.0007232, 440);
bugatti.describe();
bugatti.totalFuelConsumtionlog();
bugatti.maxKmPerHour();
var food;
(function (food) {
    food[food["vegan"] = 0] = "vegan";
    food[food["vegetarian"] = 1] = "vegetarian";
    food[food["carnivorous"] = 2] = "carnivorous";
})(food || (food = {}));
// Abstract class //
class Animal {
    constructor(legs, tail, color) {
        this.food = food.vegan;
        this.describe = () => console.log(`This animal have ${this.legs} legs , ${this.tail} tail , and he is ${this.color}.`);
        this.legs = legs;
        this.tail = tail;
        this.color = color;
    }
    eat() {
        switch (this.food) {
            case food.vegan:
                console.log(`We are vegan!`);
                break;
            case food.vegetarian:
                console.log(`We are vegetarian!`);
                break;
            case food.carnivorous:
                console.log(`We are carnivorous!`);
                break;
        }
    }
}
class Bugs extends Animal {
    constructor(tail, color) {
        super(8, tail, color);
        this.food = food.vegetarian;
        this.climb = () => console.log(`can walk on the wall`);
        this.describe = () => console.log(`This bug have ${this.legs} legs , ${this.tail} tail , and he is ${this.color}.`);
    }
}
let firstSpider = new Bugs(0, "black");
firstSpider.describe();
firstSpider.climb();
firstSpider.eat();
class Cows extends Animal {
    constructor(color) {
        super(4, 1, color);
    }
    sound() {
        console.log('Mooooo');
    }
}
let firstCow = new Cows(`brown`);
firstCow.describe();
firstCow.eat();
firstCow.sound();
class Lions extends Animal {
    constructor(color, kmph) {
        super(4, 1, color);
        this.food = food.carnivorous;
        this.describe = () => console.log(`He is the king of the jungle!`);
        this.kmph = kmph;
    }
    speed() {
        console.log(`Running ${this.kmph} km/h`);
    }
}
let firstLion = new Lions(`bright orange`, 80);
firstLion.speed();
firstLion.describe();
firstLion.eat();
