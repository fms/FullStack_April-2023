class Car {
    maker: string;
    model: string;
    year: number;
    mileage: number;
    fuelConsumption: number;
  
    constructor(maker: string, model: string, year: number, mileage: number, fuelConsumption: number) {
      this.maker = maker;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.fuelConsumption = fuelConsumption;
    }
  
    calculateTotalFuelConsumption(): number {
      return this.mileage / this.fuelConsumption;
    }
  }
  
  // Creating a new car object
  const myCar = new Car("Toyota", "Corolla", 2022, 5000, 15);
  
  // Accessing the object's properties
  console.log(`Car: ${myCar.maker} ${myCar.model}`);
  console.log(`Year: ${myCar.year}`);
  console.log(`Mileage: ${myCar.mileage}`);
  console.log(`Fuel Consumption: ${myCar.fuelConsumption}`);
  
  // Calculating and displaying the total fuel consumption
  console.log(`Total Fuel Consumption: ${myCar.calculateTotalFuelConsumption()}`);