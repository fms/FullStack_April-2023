"use strict";
var carMaker;
(function (carMaker) {
    carMaker["nisan"] = "Nissan";
    carMaker["mazda"] = "Mazda";
    carMaker["kia"] = "Kia";
    carMaker["hyundai"] = "Hyundai";
})(carMaker || (carMaker = {}));
function createCar(modelNew, yearNew, milageNew, fuelConsumptionNew) {
    let car = {
        maker: carMaker.kia,
        model: modelNew,
        year: yearNew,
        milage: milageNew,
        fuelConsumption: fuelConsumptionNew,
        totalFuelConsumption() { return this.milage / this.fuelConsumption; },
        calc: milageNew / fuelConsumptionNew
    };
    printCar(car);
}
let car1 = {
    maker: carMaker.mazda,
    model: "cx3",
    year: 2023,
    milage: 30000,
    fuelConsumption: 12,
    calc: 30000 / 12,
    totalFuelConsumption() { return this.milage / this.fuelConsumption; },
};
function printCar(car) {
    console.log(`maker:  ${car.maker}`);
    console.log(`model:  ${car.model}`);
    console.log(`year:  ${car.year}`);
    console.log(`milagr:  ${car.milage}`);
    console.log(`fuel Consumption:  ${car.fuelConsumption}`);
    console.log(`fuel Consumption:  ${car.totalFuelConsumption()}`);
}
function seperator() {
    console.log("____________________________________________________________________________");
}
printCar(car1);
seperator();
createCar("cx5", 1998, 500000, 12);
seperator();
////how to put a function automatic in object?
// Write a method for creating a new Car object.
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)
