var car1 = {
    maker: "Honda",
    model: "Civic",
    year: 2019,
    mileage: 30500,
    fuelConsumption: 15 / 1,
    totalFuelConsumption: totalFuelConsumption
};
function totalFuelConsumption(fuelConsumption, mileage) {
    console.log(mileage / fuelConsumption);
}
car1.totalFuelConsumption(car1.fuelConsumption, car1.mileage);
