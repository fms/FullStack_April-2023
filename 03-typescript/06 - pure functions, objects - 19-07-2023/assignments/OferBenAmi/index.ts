interface carOfer {
  maker: string;
  model: string;
  year: number;
  milage: number;
  fuelConsumption: number;
  totalFuelConsumption: Function;
}

const createCarOfer = (
  maker: string,
  model: string,
  year: number,
  milage: number,
  fuelConsumption: number
): object => {
  let newCarOfer: carOfer = {
    maker: maker,
    model: model,
    year: year,
    milage: milage,
    fuelConsumption: fuelConsumption,
    totalFuelConsumption: function () {
      return this.milage / this.fuelConsumption;
    },
  };
  return newCarOfer;
};

let OfersCar: carOfer = {
  maker: "nissan",
  model: "micra",
  year: 2014,
  milage: 150_000,
  fuelConsumption: 19,
  totalFuelConsumption: function () {
    return this.milage / this.fuelConsumption;
  },
};

const NewCarOfer1 = createCarOfer("Mercedes", "Maybach", 2020, 11_345, 22);
console.log(NewCarOfer1);
