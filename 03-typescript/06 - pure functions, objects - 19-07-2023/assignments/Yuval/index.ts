interface car {
    maker: string;
    model: string;
    year: number;
    milage: number;
    fuel: number;
    fuelConsumption: Function,
}

let myCar: car = {
    maker: `Corvette`,
    model: `Z06`,
    year: 2017,
    milage: 10000,
    fuel: 100,
    fuelConsumption: function(){
        return this.milage / this.fuel;
    }
}

console.log(myCar);