"use strict";
class Car {
    constructor(_maker, _model, _year, _millage) {
        this.maker = _maker !== null && _maker !== void 0 ? _maker : "NO MAKER WAS SET";
        this.model = _model !== null && _model !== void 0 ? _model : "No MODEL WAS SET";
        this.year = _year !== null && _year !== void 0 ? _year : 1900;
        this.millage = _millage !== null && _millage !== void 0 ? _millage : 0;
    }
    describe() {
        return `${this.maker} ${this.model} Car was built is ${this.year} has ${this.millage} on it and has fuel consumption of ${this.getFuelConsumption()}.`;
    }
    getFuelConsumption() {
        let consumption = (this.millage) / 12;
        return `${consumption}`;
    }
}
let mazda = new Car();
console.log(mazda.describe());
let beatle = new Car("Beatle", "B1", 1998, 18000);
console.log(beatle.describe());
