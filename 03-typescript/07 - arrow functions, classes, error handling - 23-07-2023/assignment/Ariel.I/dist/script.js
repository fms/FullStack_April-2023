"use strict";
// class carMethoda {
//   maker: string;
//   model: string;
//   year: number;
//   milage: number;
//   fuelConsumption: number;
//   hatcback?: boolean;
//   constructor(
//     maker: string,
//     model: string,
//     year: number,
//     milage: number,
//     fuelConsumption: number,
//     hatcback: boolean
//   ) {
//     this.maker = maker;
//     this.model = model;
//     this.year = year;
//     this.milage = milage;
//     this.fuelConsumption = fuelConsumption;
//     this.hatcback = hatcback;
//   }
//   totalFuelConsumptionCalc() {
//     return this.milage / this.fuelConsumption;
//   }
// }
// class typeR extends carMethoda {
//   isTheCivicTypeR?: boolean;
//   constructor(
//     maker: string,
//     model: string,
//     year: number,
//     milage: number,
//     fuelConsumption: number,
//     hatcback: boolean,
//     isTheCivicTypeR: boolean
//   ) {
//     super(maker, model, year, milage, fuelConsumption, hatcback);
//     this.isTheCivicTypeR = isTheCivicTypeR;
//   }
//   toConsole() {
//     console.log(
//       `My friend, if your ${this.maker} ${this.model} is Type-R, please chatch your RED H EMBLEM and begin to burn your fuel!`
//     );
//   }
// }
// const ari = new typeR("Honda", "Civic", 2011, 148000, 13 / 100, true, true);
// console.log(ari.toConsole());
class carGenerator {
    constructor(maker, model, year, milage, fuelConsumption, hatchback, color) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsumption = fuelConsumption;
        this.hatchback = hatchback;
        this.color = color;
    }
    calcFuelConsumption() {
        return this.milage / this.fuelConsumption;
    }
}
class typeRCheck extends carGenerator {
    constructor(maker, model, year, milage, fuelConsumption, isTheCivicTypeR, hatchback, color) {
        super(maker, model, year, milage, fuelConsumption, hatchback, color);
        this.isTheCivicTypeR = isTheCivicTypeR;
    }
    consoleOut() {
        if (this.isTheCivicTypeR) {
            console.log(`My friend, if your ${this.maker} ${this.model} is Type-R, please chatch your RED H EMBLEM and begin to burn your fuel!`);
        }
    }
}
const ari = new typeRCheck("Honda", "Civic", 2011, 148000, 13 / 100, true, true, "Blue metalic");
console.log(ari.consoleOut());
