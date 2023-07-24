var Cars = /** @class */ (function () {
    function Cars(owner, maker, model, year, fuel, mileage) {
        var _this = this;
        this.FuelCon = function () {
            return _this.mileage / _this.fuel;
        };
        this.owner = owner;
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
        this.mileage = mileage;
    }
    Cars.prototype.newCar = function () {
        console.log("Some details about " + this.owner + "'s car :\n        \nMaker: " + this.maker + "\n        \nModel: " + this.model + "\n        \nYear: " + this.year + "\n        \nFuel: " + this.fuel + "\n        \nMileage: " + this.mileage + "\n        \nFuel Consumption: " + this.FuelCon() + "\n        ");
    };
    Cars.Below = function () {
        console.log('----------------------------------------');
    };
    Cars.ShakedCar = function () {
        var ShakedCar1 = new Cars("Shaked", "BMW", "X6", 2023, 12, 2450);
        ShakedCar1.newCar();
    };
    Cars.YossiCar = function () {
        var YossiCar1 = new Cars("Yossi", "Hyundai", "Tucson-Elite", 2022, 15, 9500);
        YossiCar1.newCar();
    };
    return Cars;
}());
Cars.ShakedCar();
Cars.Below();
Cars.YossiCar();
