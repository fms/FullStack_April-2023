"use strict";

var Car =
/** @class */
function () {
  function Car(_maker, _model, _year, _millage) {
    this.maker = _maker !== null && _maker !== void 0 ? _maker : "NO MAKER WAS SET";
    this.model = _model !== null && _model !== void 0 ? _model : "No MODEL WAS SET";
    this.year = _year !== null && _year !== void 0 ? _year : 1900;
    this.millage = _millage !== null && _millage !== void 0 ? _millage : 0;
  }

  Car.prototype.describe = function () {
    return this.maker + " " + this.model + " Car was built is " + this.year + " has " + this.millage + " on it and has fuel consumption of " + this.getFuelConsumption() + ".";
  };

  Car.prototype.getFuelConsumption = function () {
    var consumption = this.millage / 12;
    return "" + consumption;
  };

  Car.prototype.setMaker = function (_maker) {
    this.maker = _maker;
  };

  Car.prototype.setModel = function (_model) {
    this.model = _model;
  };

  Car.prototype.setYear = function (_year) {
    this.year;
  };

  Car.prototype.setMillage = function (_millage) {
    this.millage = _millage;
  };

  return Car;
}();

var mazda = new Car();
console.log(mazda.describe());
var beatle = new Car("Beatle", "B1", 1998, 100);
console.log(beatle.describe());
console.log(beatle.millage); // Access Modifiers
// private: available only inside the same class
// public: avilable to everyone inside the class and from outside
// protected: avilable inside a class and his childrens only