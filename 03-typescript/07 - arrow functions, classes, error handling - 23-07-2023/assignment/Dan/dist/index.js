"use strict";
class car {
    constructor(maker, model, year, milage, fuel) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuel = fuel;
        this.fuelConsumption = fuelConsumption;
    }
}
() => {
    console.log(`The car's fuel consumption is ${this.milage} / ${this.fuel}`);
};
let car1 = new car(`Toyota`, `Corola`, 2010, 100000, 50);
car1.fuelConsumption();
