"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _maker, _model, _year, _millage;
class Car {
    constructor(maker, model, year, millage) {
        _maker.set(this, void 0); //# is private
        _model.set(this, void 0);
        _year.set(this, void 0);
        _millage.set(this, void 0);
        __classPrivateFieldSet(this, _maker, maker !== null && maker !== void 0 ? maker : "NO MAKER WAS SET");
        __classPrivateFieldSet(this, _model, model !== null && model !== void 0 ? model : "No MODEL WAS SET");
        __classPrivateFieldSet(this, _year, year !== null && year !== void 0 ? year : 1900);
        __classPrivateFieldSet(this, _millage, millage !== null && millage !== void 0 ? millage : 0);
    }
    describe() {
        return `${__classPrivateFieldGet(this, _maker)} ${__classPrivateFieldGet(this, _model)} Car was built is ${__classPrivateFieldGet(this, _year)} has ${__classPrivateFieldGet(this, _millage)} on it and has fuel consumption of ${this.getFuelConsumption()}.`;
    }
    getFuelConsumption() {
        let consumption = (__classPrivateFieldGet(this, _millage)) / 12;
        return `${consumption}`;
    }
    setMaker(maker) {
        __classPrivateFieldSet(this, _maker, maker);
    }
    setModel(model) {
        __classPrivateFieldSet(this, _model, model);
    }
    setYear(year) {
        __classPrivateFieldSet(this, _year, year);
    }
    setMillage(millage) {
        __classPrivateFieldSet(this, _millage, millage);
    }
}
_maker = new WeakMap(), _model = new WeakMap(), _year = new WeakMap(), _millage = new WeakMap();
let mazda = new Car();
console.log(mazda.describe());
let beatle = new Car("Beatle", "B1", 1998, 100);
console.log(beatle.describe());
// Access Modifiers
// private: available only inside the same class -> are also # before variables
// public: avilable to everyone inside the class and from outside -> are also _ before variables
// protected: avilable inside a class and his childrens only
