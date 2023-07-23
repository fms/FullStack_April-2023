var car1 = {
    maker: "Seat",
    model: "Ibiza",
    manufactureYear: 2015,
    milage: 156000,
    fuelCons: 16,
    totalDist: function () {
        return this.milage / this.fuelCons;
    }
};
console.log(car1.totalDist());
