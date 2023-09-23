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
let myBride = {
    maker: "Honda",
    model: "Civic",
    year: 2011,
    milage: 148000,
    fuelConsumption: 12.9,
    calcFuelConsumption() {
        return this.milage / this.fuelConsumption;
    },
    hatchback: true,
    color: "Blue metalic",
};
