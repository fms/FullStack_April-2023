"use strict";
;
function totalFuelConsumtion(car) {
    return "Fuel consuption for " + car.maker + " " + car.model + " : " + car.miilage / car.fuelConsumption + " l\\km.";
}
let workCar = {
    maker: "Mazda",
    model: "6 LAX",
    year: 2023,
    miilage: 1000,
    fuelConsumption: 50
};
function printCarDet(car) {
    return car.maker + " " + car.model + ", year:" + car.year + ", millage: " + car.miilage + ", fuel consumtion: " + car.fuelConsumption + ".";
}
console.log(printCarDet(workCar));
console.log(totalFuelConsumtion(workCar));
