"use strict";
class car {
    constructor(maker, model, year, milage, fuelConsumptionOfer, moneyWorth, carType) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsumptionOfer = fuelConsumptionOfer;
        this.moneyWorth = moneyWorth;
        this.carType = carType;
    }
    totalFuelConsumption() {
        return this.milage / this.fuelConsumptionOfer;
    }
    drive() {
        console.log(`driving the ${this.maker} ${this.model}.`);
    }
    logDescriptionOfTheCar() {
        console.log(`this car for sale for only ${this.moneyWorth}, it's a beautiful ${this.maker} ${this.model}, with ${this.milage} kilometers, does ${this.fuelConsumptionOfer} kilometers per liter in fuel.`);
    }
    test() {
        console.log(this.carType);
    }
}
class truck extends car {
    constructor(maker, model, year, milage, fuelConsumptionOfer, moneyWorth, carType, pullCapacityInPounds, bedSize, is4x4) {
        super(maker, model, year, milage, fuelConsumptionOfer, moneyWorth, carType);
        this.pullCapacityInPounds = pullCapacityInPounds;
        this.bedSize = bedSize;
        this.is4x4 = is4x4;
    }
    drive() {
        console.log(`driving the ${this.maker} ${this.model} ${this.carType}. this model is ${this.is4x4 === true ? `4x4` : `not 4x4`}`);
    }
}
class superCar extends car {
    constructor(maker, model, year, milage, fuelConsumptionOfer, moneyWorth, carType, maxSpeed, oneTo100, qurterMileInSeconds) {
        super(maker, model, year, milage, fuelConsumptionOfer, moneyWorth, carType);
        this.maxSpeed = maxSpeed;
        this.oneTo100 = oneTo100;
        this.qurterMileInSeconds = qurterMileInSeconds;
    }
    drive() {
        console.log(`driving the ${this.maker} ${this.model} ${this.carType}. this model does 1Kmh to 100Kmh in ${this.oneTo100} secondes`);
    }
}
const ofersTruck = new truck(`Ford`, `F150`, 2023, 1000, 10, 250000, `Truck`, 14000, `5.5 feet, 6.5 feet, and 8 feet`, true);
const oferSuperCar = new superCar(`Ferrari`, `LaFerrari`, 2015, 10000, 5, 2000000, `super car`, 352, 2.6, 9.7);
console.log(ofersTruck.drive());
console.log(oferSuperCar.drive());
