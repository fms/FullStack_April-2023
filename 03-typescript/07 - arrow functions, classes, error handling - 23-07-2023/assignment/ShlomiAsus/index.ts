// Create a Car class:
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)
// - Add any methods you'd like

enum carMaker {
    nisan = "Nissan",
    mazda = "Mazda",
    kia = "Kia",
    hyundai = "Hyundai",
}

class car {
    maker: carMaker;
    model: string;
    year: number;
    milage: number;
    fuelConsumption: number;
    // totalFuelConsumption: Function;
    calc: number;

    constructor(maker: carMaker, model: string, year: number, milage: number, calc: number, fuelConsumption?: number) {
        this.maker = maker || "Mazda";
        this.model = model;
        this.fuelConsumption = fuelConsumption || 0;
        this.year = year;
        this.milage = milage;
        this.calc = calc || 0;
    }


    // createCar(modelNew: string, yearNew: number, milageNew: number, fuelConsumptionNew: number) {
    //     let car1: car = {
    //         maker: carMaker.kia,
    //         model: modelNew,
    //         year: yearNew,
    //         milage: milageNew,
    //         fuelConsumption: fuelConsumptionNew,
    //         calc: milageNew / fuelConsumptionNew
    //     }
    // }
    totalFuelConsumption() { return this.milage / this.fuelConsumption; }

    printCar() {
        console.log(`maker:  ${this.maker}`);
        console.log(`model:  ${this.model}`);
        console.log(`year:  ${this.year}`);
        console.log(`milagr:  ${this.milage}`);
        console.log(`fuel Consumption:  ${this.fuelConsumption}`);
        console.log(`fuel Consumption:  ${this.totalFuelConsumption()}`);
    }
}
function seperator() {

    console.log("____________________________________________________________________________");
}
let newcar2 :car = new car(carMaker.mazda,"sdfdsf",2000,5050,15);
seperator();






// Write a method for creating a new Car object.
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)