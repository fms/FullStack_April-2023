class Car {
    maker: string;
    model: string;
    year: number;
    milage: number;
    fuel: number;

    constructor(maker: string, model?: string, year: number, milage: number, fuel: number) {
        this.maker = maker;
        this.model = model ?? "";
        this.year = year;
        this.milage = milage;
        this.fuel = fuel;
    }

    fuelConsumption(){
        console.log(`This car's fuel consumption is ${this.milage / this.fuel}`);
    }     
}

let car1 = new Car(`Corvette`, `Z06`, 2017, 10000, 100);
car1.fuelConsumption();

let car2 = new Car(`Tesla`, undefined, 2023, 19008, 57);
car2.fuelConsumption();