class Car {
    maker: string;
    model: string;
    year: number;
    mileage: number;
    fuelConsumption: number;
    carIsDriving: false;

    totalFuelConsumption() {
        console.log(this.mileage / this.fuelConsumption);
    }

    drive() {
        if (this.carIsDriving == false)
            console.log("The car started driving");
        else {
            console.log("The car is already driving");
        }
    }

    stop() {
        console.log("The car is not moving");
    }


    constructor(maker: string, model: string, year: number, mileage: number, fuelConsumption: number) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.fuelConsumption = fuelConsumption;
        this.carIsDriving = false
    }
}

let car1 = new Car("kia", "picanto", 2019, 30000, 15 / 1)

car1.drive()
car1.stop()
car1.totalFuelConsumption()