var Car = /** @class */ (function () {
    function Car(maker, model, manufactureYear, milage, fuelCons) {
        this.maker = maker;
        this.model = model;
        this.manufactureYear = manufactureYear;
        this.milage = milage;
        this.fuelCons = fuelCons;
    }
    Car.prototype.describe = function () {
        console.log("This is a " + this.manufactureYear + " " + this.maker + " " + this.model + " with " + this.milage + " on it. And it does " + this.fuelCons + " km per liter!");
    };
    Car.prototype.totalDist = function () {
        console.log(this.milage / this.fuelCons);
    };
    return Car;
}());
var car1 = new Car("seat", "ibiza", 2015, 156000, 16);
car1.totalDist();
car1.describe();
