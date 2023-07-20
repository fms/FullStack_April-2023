interface ShakedCar {
    maker: string;
    model: string;
    year: number;
    mileage: number;
    fuel: number;
    FuelCon: Function;
    AddToString: Function;
}

function createCar(maker: string, model: string,
    year: number, mileage: number, fuel: number) {
    const createNew: ShakedCar = {
        maker, model, year, mileage, fuel,
        FuelCon: function () {
            return this.mileage / this.fuel;
        },
        AddToString: function () {
            return (
                'Maker: ' + this.maker + '\nModel: ' + this.model +
                '\nYear: ' + this.year + '\nMileage: ' + this.mileage +
                '\nFuel: ' + this.fuel + '\nFuel Consumption: ' + this.FuelCon());
        },
    };
    return createNew;
}

let createNewCar = createCar("BMW", "X6", 2023, 2450, 12);
console.log(createNewCar.AddToString());
