interface Car {
    maker: string;
    model: string;
    manufactureYear: number;
    milage: number;
    fuelCons: number;
    totalDist: Function;
}

let car1: Car = {
    maker: "Seat",
    model: "Ibiza",
    manufactureYear: 2015,
    milage: 156000,
    fuelCons: 16,
    totalDist() {
        return this.milage / this.fuelCons
    }
}

console.log(car1.totalDist())
