var car = /** @class */ (function () {
    function car(maker, model, year, milage, fuelConsumptionOfer, moneyWorth) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsumptionOfer = fuelConsumptionOfer;
        this.moneyWorth = moneyWorth;
    }
    car.prototype.totalFuelConsumption = function () {
        return this.milage / this.fuelConsumptionOfer;
    };
    car.prototype.logDescriptionOfTheCar = function () {
        console.log("this car for sale for only " + this.moneyWorth + ", it's a beautiful " + this.maker + " " + this.model + ", with " + this.milage + " kilometers, does " + this.fuelConsumptionOfer + " kilometers per liter in fuel");
    };
    return car;
}());
var ofersCar = new car("nissan", "micra", 2014, 150000, 19, 20000);
console.log(ofersCar.totalFuelConsumption());
ofersCar.logDescriptionOfTheCar();
