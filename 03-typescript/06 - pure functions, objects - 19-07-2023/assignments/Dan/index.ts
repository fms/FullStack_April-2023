interface car {
    maker: string,
    model: string,
    year: number,
    milage: number,
    fuel: number,
    fuelConsumption: Function,
}

let car1: car = {
    maker: `Toyota`,
    model: `corola`,
    year: 2010,
    milage: 100000,
    fuel: 50,
    fuelConsumption: function () {
        return this.milage / this.fuel;
    }
}

console.log(car1.fuelConsumption);