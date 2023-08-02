"use strict";
// interface carNames {
//   maker: string;
//   model: string;
//   hatchback: boolean;
//   year: number;
//   milage: number;
//   fuelConsumption: number;
//   totalFuelConsumption: Function;
// }
function carMethoda(maker, model, hatcback, year, milage, fuelConsumption) {
    let carDetailsIn = {
        maker,
        model,
        hatcback,
        year,
        milage,
        fuelConsumption,
        totalFuelConsumptionCalc() {
            return this.milage / this.fuelConsumption;
        },
    };
    return carDetailsIn;
}
let ArielsCar = carMethoda("Honda", "Civic", true, 2011, 148000, 13 / 100);
console.log(ArielsCar);
