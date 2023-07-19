var carExample = {
    maker: "Honda",
    model: "Civic",
    year: 2019,
    mileage: 30500,
    fuelConsumption: 15 / 1,
    totalFuelConsumption: function () {
        return this.mileage / this.fuelConsumption;
    }
};
console.log(carExample.totalFuelConsumption());
