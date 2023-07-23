"use strict";
class Car {
    constructor(maker, model, year, mileage, fuelConsumption) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.fuelConsumption = fuelConsumption;
        this.carIsDriving = false;
    }
    totalFuelConsumption() {
        console.log(this.mileage / this.fuelConsumption);
    }
    drive() {
        if (this.carIsDriving == false)
            console.log("The car started driving");
        else {
            console.log("The car is already driving");
        }
    }
    stop() {
        console.log("The car is not moving");
    }
}
let car1 = new Car("kia", "picanto", 2019, 30000, 15 / 1);
car1.drive();
car1.stop();
car1.totalFuelConsumption();
