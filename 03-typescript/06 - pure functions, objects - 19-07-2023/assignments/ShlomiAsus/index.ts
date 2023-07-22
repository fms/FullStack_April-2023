
enum carMaker {
    nisan = "Nissan",
    mazda = "Mazda",
    kia = "Kia",
    hyundai = "Hyundai",
}

interface newCar {
    maker: carMaker;
    model: string;
    year: number;
    milage: number;
    fuelConsumption: number;
    totalFuelConsumption: Function;
    calc: number;
}


function createCar(modelNew: string, yearNew: number, milageNew: number, fuelConsumptionNew: number) {
    let car: newCar = {

        maker: carMaker.kia,
        model: modelNew,
        year: yearNew,
        milage: milageNew,
        fuelConsumption: fuelConsumptionNew,
        totalFuelConsumption: function () { let a = this.milage / this.fuelConsumption },
        calc: milageNew / fuelConsumptionNew
    }
    printCar(car);
}

let car1: newCar = {
    maker: carMaker.mazda,
    model: "cx3",
    year: 2023,
    milage: 30000,
    fuelConsumption: 12,
    calc: 30000/12,
    totalFuelConsumption() { return this.milage / this.fuelConsumption }, // ---> not giving me the value
    //calc : car1.milage/car1.fuelConsumption,     ----->can't assign like this

}

function printCar(car: newCar) {
    console.log(`maker:  ${car.maker}`);
    console.log(`model:  ${car.model}`);
    console.log(`year:  ${car.year}`);
    console.log(`milagr:  ${car.milage}`);
    console.log(`fuel Consumption:  ${car.fuelConsumption}`);
    //   console.log(`total fuel consumption----> ` +`  ${car.totalFuelConsumption}`);
    console.log(`fuel Consumption2222:  ${car.calc}`);

}

function seperator() {

    console.log("____________________________________________________________________________");
}
printCar(car1);

seperator();
createCar("cx5", 1998, 500000, 12);
seperator();


////how to put a function automatic in object?


// Write a method for creating a new Car object.
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)