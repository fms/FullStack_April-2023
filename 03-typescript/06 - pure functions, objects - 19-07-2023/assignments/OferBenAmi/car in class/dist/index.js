var createCarOfer = function (maker, model, year, milage, fuelConsumption) {
    var newCarOfer = {
        maker: maker,
        model: model,
        year: year,
        milage: milage,
        fuelConsumption: fuelConsumption,
        totalFuelConsumption: function () {
            return this.milage / this.fuelConsumption;
        }
    };
    return newCarOfer;
};
var OfersCar = {
    maker: "nissan",
    model: "micra",
    year: 2014,
    milage: 150000,
    fuelConsumption: 19,
    totalFuelConsumption: function () {
        return this.milage / this.fuelConsumption;
    }
};
var NewCarOfer1 = createCarOfer("Mercedes", "Maybach", 2020, 11345, 22);
console.log(NewCarOfer1);
var car = /** @class */ (function () {
    function car(maker, model, year, milage, fuelConsumptionOfer) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsumptionOfer = fuelConsumptionOfer;
    }
    car.prototype.totalFuelConsumption = function () {
        return this.milage / this.fuelConsumptionOfer;
    };
    return car;
}());
var ofersCar = new car("nissan", "micra", 2014, 150000, 19);
console.log(ofersCar.totalFuelConsumption());
