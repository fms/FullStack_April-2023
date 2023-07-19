var carExample = {
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
carExample.totalFuelConsumption(carExample.fuelConsumption, carExample.mileage);
