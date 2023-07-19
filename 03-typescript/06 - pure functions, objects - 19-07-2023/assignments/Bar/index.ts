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
    totalFuelConsumption: totalFuelConsumption,
};

function totalFuelConsumption(fuelConsumption: number, mileage: number) {
    console.log(mileage / fuelConsumption);
}

carExample.totalFuelConsumption(carExample.fuelConsumption, carExample.mileage);
