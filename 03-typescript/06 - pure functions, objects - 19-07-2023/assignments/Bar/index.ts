interface Car {
    maker: string;
    model: string;
    year: number;
    mileage: number;
    fuelConsumption: number;
    totalFuelConsumption: Function;
}

let carExample: Car = {
    maker: "Honda",
    model: "Civic",
    year: 2019,
    mileage: 30500,
    fuelConsumption: 15 / 1,
    totalFuelConsumption: function () {
        return this.mileage / this.fuelConsumption;
    },
};

console.log(carExample.totalFuelConsumption());

function functionCarExample(maker: string, model: string, year: number, mileage: number, fuelConsumption: number) {
    const totalFuelConsumption = mileage / fuelConsumption;
    return `Maker: ${maker}, Model: ${model}, Year: ${year}, Mileage: ${mileage}, Fuel Consumption: ${fuelConsumption}, Total Fuel Consumption: ${totalFuelConsumption}`;

}

console.log(functionCarExample("kia", "picanto", 2019, 30000, 15 / 1));
