"use strict";
// Write a method for creating a new Car object.
// Properties include: maker, model, year, milage, fuel consumption (km/l)
// Add a method for calculating total fuel consumption (milage / fuel consunmption)
;
let bugatti = {
    maker: `Bugatti`,
    model: `Divo`,
    year: 2018,
    milage: 75000,
    fuelConsunmption: 50.0007232,
    totalFuelConsumtion() {
        return (this.milage / this.fuelConsunmption);
    }
};
console.log(bugatti);
console.log(bugatti.totalFuelConsumtion());
function carObjects(maker, model, year, milage, fuelConsunmption) {
    let totalFuelConsumtion = (milage / fuelConsunmption);
    let carProperties = `Car maker: ${maker}, Car model: ${model}, Car year: ${year}, Car milage ${milage}, Car fuelConsunmption ${fuelConsunmption}.`;
    return `${carProperties}, your total Fuel Consumtion is ${totalFuelConsumtion}`;
}
;
console.log(carObjects('Mazda', 'Mazda 3', 2023, 100000, 60.008388));
