"use strict";
let myCar = {
    maker: `Corvette`,
    model: `Z06`,
    year: 2017,
    milage: 10000,
    fuel: 100,
    fuelConsumption: function () {
        return this.milage / this.fuel;
    }
};
console.log(myCar);
