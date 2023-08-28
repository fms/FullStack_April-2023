"use strict";
// Create a Car class:
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)
// - Add any methods you'd like
var carMaker;
(function (carMaker) {
    carMaker["nisan"] = "Nissan";
    carMaker["mazda"] = "Mazda";
    carMaker["kia"] = "Kia";
    carMaker["hyundai"] = "Hyundai";
})(carMaker || (carMaker = {}));
class car {
    constructor(maker, model, year, milage, calc, fuelConsumption) {
        this.maker = maker || "Mazda";
        this.model = model;
        this.fuelConsumption = fuelConsumption || 0;
        this.year = year;
        this.milage = milage;
        this.calc = calc || 0;
    }
    // createCar(modelNew: string, yearNew: number, milageNew: number, fuelConsumptionNew: number) {
    //     let car1: car = {
    //         maker: carMaker.kia,
    //         model: modelNew,
    //         year: yearNew,
    //         milage: milageNew,
    //         fuelConsumption: fuelConsumptionNew,
    //         calc: milageNew / fuelConsumptionNew
    //     }
    // }
    totalFuelConsumption() { return this.milage / this.fuelConsumption; }
    printCar() {
        console.log(`maker:  ${this.maker}`);
        console.log(`model:  ${this.model}`);
        console.log(`year:  ${this.year}`);
        console.log(`milagr:  ${this.milage}`);
        console.log(`fuel Consumption:  ${this.fuelConsumption}`);
        console.log(`fuel Consumption:  ${this.totalFuelConsumption()}`);
    }
}
function seperator() {
    console.log("____________________________________________________________________________");
}
let newcar2 = new car(carMaker.mazda, "sdfdsf", 2000, 5050, 15);
seperator();
// Write a method for creating a new Car object.
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)
