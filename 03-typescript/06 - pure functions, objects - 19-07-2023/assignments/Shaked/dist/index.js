function createCar(maker, model, year, mileage, fuel) {
    var createNew = {
        maker: maker, model: model, year: year, mileage: mileage, fuel: fuel,
        FuelCon: function () {
            return this.mileage / this.fuel;
        },
        AddToString: function () {
            return ('Maker: ' + this.maker + '\nModel: ' + this.model +
                '\nYear: ' + this.year + '\nMileage: ' + this.mileage +
                '\nFuel: ' + this.fuel + '\nFuel Consumption: ' + this.FuelCon());
        }
    };
    return createNew;
}
var createNewCar = createCar("BMW", "X6", 2023, 2450, 12);
console.log(createNewCar.AddToString());
