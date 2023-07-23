class Car {
    maker: string;
    model: string;
    year: number;
    milage: number;
    fuel: number;

    constructor(maker: string, year: number, milage: number, fuel: number, model?: string) {
        this.maker = maker;
        this.model = model ?? "";
        this.year = year;
        this.milage = milage;
        this.fuel = fuel;
    }

    fuelConsumption(): void{
        console.log(`This car's fuel consumption is ${this.milage / this.fuel}`);
    }     
}

let car1 = new Car(`Corvette`, 2017, 10000, 100, `Z06`);
car1.fuelConsumption();

let car2 = new Car(`Tesla`, 2023, 19008, 57);
car2.fuelConsumption();