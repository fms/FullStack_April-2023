function createCar(maker, model, year, mileage, fuel) {
    var createNew = {
        maker: maker, model: model, year: year, mileage: mileage, fuel: fuel,
        FuelCon: function () {
            return createNew.mileage / createNew.fuel;
        },
        AddToString: function () {
            var formattedDetails = "\n            Shaked's car details :\nMaker: " + createNew.maker + "\nModel: " + createNew.model + "\nYear: " + createNew.year + "\nMileage: " + createNew.mileage + "\nFuel: " + createNew.fuel + "\nFuel Consumption: " + createNew.FuelCon() + " ";
            return formattedDetails;
        }
    };
    return createNew;
}
var createNewCar = createCar("BMW", "X6", 2023, 2450, 12);
alert(createNewCar.AddToString());
