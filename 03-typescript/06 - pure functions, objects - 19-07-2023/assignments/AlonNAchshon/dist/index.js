"use strict";
;
function printCarDet(car) {
    return car.maker + " " + car.model + ", year:" + car.year + ", millage: " + car.miilage + ", fuel consumtion: " + car.fuelConsumption() + ".";
}
function createCar(_maker, _model, _year, _miilage) {
    let newCar = {
        maker: _maker,
        model: _model,
        year: _year,
        miilage: _miilage,
        fuelConsumption: function () {
            return "Fuel consuption for " + this.maker + " " + this.model + " : " + this.miilage / 50 + " l\\km.";
        }
    };
    return newCar;
}
let workCar = createCar("Mazda", "6 LAZ", 2023, 17520);
console.log(printCarDet(workCar));
console.log(workCar["fuelConsumption"]());
