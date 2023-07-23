"use strict";
let car1 = {
    maker: "mazda",
    model: "3",
    year: "2015",
    mileage: 500,
    fuel_consumption: 14,
};
let car2 = {
    maker: "Toyota",
    model: "Corola",
    year: "2018",
    mileage: 400,
    fuel_consumption: 17,
};
function FuelCalculate(car) {
    let sum = car.mileage / car.fuel_consumption;
    sum = Math.round(sum);
    return sum;
}
console.log(FuelCalculate(car1));
console.log(FuelCalculate(car2));
// console.log(`fuel consumption is: ` + FuelCalculate(car:car1));
