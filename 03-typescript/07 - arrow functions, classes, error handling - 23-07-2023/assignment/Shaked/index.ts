class Cars {
    owner: string;
    maker: string;
    model: string;
    year: number;
    fuel: number;
    mileage: number;

    constructor(owner: string, maker: string, model: string, year: number, fuel: number, mileage: number) {
        this.owner = owner;
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
        this.mileage = mileage;
    }
    FuelCon = (): number => {
        return this.mileage / this.fuel;
    };

    newCar() {
        console.log(`Some details about ${this.owner}'s car :
        \nMaker: ${this.maker}
        \nModel: ${this.model}
        \nYear: ${this.year}
        \nFuel: ${this.fuel}
        \nMileage: ${this.mileage}
        \nFuel Consumption: ${this.FuelCon()}
        `);
    }

    static Below() {
        console.log('----------------------------------------');
    }

    static ShakedCar() {
        const ShakedCar1: Cars = new Cars("Shaked", "BMW", "X6", 2023, 12, 2450);
        ShakedCar1.newCar();
    }

    static YossiCar() {
        const YossiCar1: Cars = new Cars("Yossi", "Hyundai", "Tucson-Elite", 2022, 15, 9500);
        YossiCar1.newCar();
    }
}

Cars.ShakedCar();
Cars.Below();
Cars.YossiCar();