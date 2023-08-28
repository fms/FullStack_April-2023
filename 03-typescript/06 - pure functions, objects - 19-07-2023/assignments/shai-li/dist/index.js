"use strict";
// Write a method for creating a new Car object.
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consumption)
let car1 = {
    carMaker: "Toyota",
    model: "Corolla",
    year: 2011,
    milage: 150000,
    fuelConsumption: 150,
    totalFuelConsumption: function () {
        return this.milage / this.fuelConsumption;
    },
};
console.log(car1.totalFuelConsumption());
