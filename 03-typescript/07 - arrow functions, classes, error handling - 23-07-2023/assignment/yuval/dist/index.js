var Car = /** @class */ (function () {
    function Car(maker, model, year, milage, fuel) {
        this.maker = maker;
        this.model = model !== null && model !== void 0 ? model : "";
        this.year = year;
        this.milage = milage;
        this.fuel = fuel;
    }
    Car.prototype.fuelConsumption = function () {
        console.log("This car's fuel consumption is " + this.milage / this.fuel);
    };
    return Car;
}());
var car1 = new Car("Corvette", "Z06", 2017, 10000, 100);
car1.fuelConsumption();
var car2 = new Car("Tesla", undefined, 2023, 19008, 57);
car2.fuelConsumption();
