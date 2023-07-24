// Create a Car class:
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)
// - Add any methods you'd like


class Car {
    maker: string ;
    model: string ;
    year: number;
    milage: number;
    fuelConsunmption: number;

    constructor(maker: string , model :string, year :number, milage:number, fuelConsunmption: number,) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsunmption = fuelConsunmption;
    }

    describe = () => console.log(`Car maker is ${this.maker} , the model is ${this.model} and the year is ${this.year}`);

    totalFuelConsumtionlog = () => console.log(this.milage / this.fuelConsunmption);
}

let mazda = new Car("Mazda", "Mazda 3" , 2023 , 100000 , 60.008388);
mazda.describe();
mazda.totalFuelConsumtionlog();

class RaceCar extends Car {
    kmPH: number;
    constructor(maker: string , model :string, year :number, milage:number, fuelConsunmption: number,kmPH: number) {
        super(maker, model, year, milage, fuelConsunmption)
        this.kmPH = kmPH;
    }
    maxKmPerHour = () => console.log(`max speed is ${this.kmPH} km/h`);
}

let bugatti = new RaceCar("Bugatti", "Divo" , 2018 , 75000 , 50.0007232 , 440);
bugatti.describe();
bugatti.totalFuelConsumtionlog();
bugatti.maxKmPerHour();
