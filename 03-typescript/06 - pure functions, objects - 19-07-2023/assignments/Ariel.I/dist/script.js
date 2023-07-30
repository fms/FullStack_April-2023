"use strict";
const creatorCar = (maker, model, hatchback, year, milage, fuelConsumption) => {
    let newCarOfer = {
        maker: maker,
        model: model,
        hatchback: hatchback,
        year: year,
        milage: milage,
        fuelConsumption: fuelConsumption,
        totalFuelConsumption: function () {
            return this.milage / this.fuelConsumption;
        },
    };
    return newCarOfer;
};
const ArielsBride = creatorCar("Honda", "Civic", true, 2011, 148, 12.6);
console.log(ArielsBride);
// const ArielsBride: carNames = {
//   maker: "Honda",
//   model: "civic",
//   hatchback: true,
//   year: 2014,
//   milage: 148000,
//   fuelConsumption: 12.9,
//   totalFuelConsumption: function () {
//     return this.milage / this.fuelConsumption;
//   },
// };
