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
