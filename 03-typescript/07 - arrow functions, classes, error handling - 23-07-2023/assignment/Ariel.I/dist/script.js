"use strict";
class carMethoda {
    constructor(maker, model, year, milage, fuelConsumption, hatcback) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsumption = fuelConsumption;
        this.hatcback = hatcback;
    }
    totalFuelConsumptionCalc() {
        return this.milage / this.fuelConsumption;
    }
}
class typeR extends carMethoda {
    constructor(maker, model, year, milage, fuelConsumption, hatcback, isTheCivicTypeR) {
        super(maker, model, year, milage, fuelConsumption, hatcback);
        this.isTheCivicTypeR = isTheCivicTypeR;
    }
    toConsole() {
        console.log(`My friend, if your ${this.maker} ${this.model} is Type-R, please chatch your RED H EMBLEM and begin to burn your fuel!`);
    }
}
const ari = new typeR("Honda", "Civic", 2011, 148000, 13 / 100, true, true);
console.log(ari.toConsole());
