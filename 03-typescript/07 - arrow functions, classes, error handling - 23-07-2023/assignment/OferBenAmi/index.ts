class car {
  maker: string;
  model: string;
  year: number;
  milage: number;
  fuelConsumptionOfer: number;
  moneyWorth: number;

  constructor(
    maker: string,
    model: string,
    year: number,
    milage: number,
    fuelConsumptionOfer: number,
    moneyWorth: number
  ) {
    this.maker = maker;
    this.model = model;
    this.year = year;
    this.milage = milage;
    this.fuelConsumptionOfer = fuelConsumptionOfer;
    this.moneyWorth = moneyWorth;
  }

  totalFuelConsumption() {
    return this.milage / this.fuelConsumptionOfer;
  }

  logDescriptionOfTheCar(): void {
    console.log(
      `this car for sale for only ${this.moneyWorth}, it's a beautiful ${this.maker} ${this.model}, with ${this.milage} kilometers, does ${this.fuelConsumptionOfer} kilometers per liter in fuel`
    );
  }
}

const ofersCar = new car("nissan", "micra", 2014, 150_000, 19, 20_000);
console.log(ofersCar.totalFuelConsumption());
ofersCar.logDescriptionOfTheCar();
