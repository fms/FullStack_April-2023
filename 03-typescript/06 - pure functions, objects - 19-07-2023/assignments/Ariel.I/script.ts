// interface carNames {
//   maker: string;
//   model: string;
//   hatchback: boolean;
//   year: number;
//   milage: number;
//   fuelConsumption: number;
//   totalFuelConsumption: Function;
// }

// const creatorCar = (
//   maker: string,
//   model: string,
//   hatchback: boolean,
//   year: number,
//   milage: number,
//   fuelConsumption: number
// ): any => {
//   let newCarOfer: carNames = {
//     maker: maker,
//     model: model,
//     hatchback: hatchback,
//     year: year,
//     milage: milage,
//     fuelConsumption: fuelConsumption,
//     totalFuelConsumption: function () {
//       return this.milage / this.fuelConsumption;
//     },
//   };
// };

// const ArielsBride = creatorCar("Honda", "Civic", true, 2011, 148, 12.6);
// console.log(ArielsBride);

// const ArielsBride: carNames = {
//   maker: "Honda",
//   model: "civic",
//   hatchback: true,
//   year: 2014,
//   milage: 148000,
//   fuelConsumption: 12.9,
//   totalFuelConsumption: function () {
//     return this.milage / this.fuelConsumption;
//   },
// };

// // attempt #2
// interface carProps {
//   maker: string;
//   model: string;
//   hatcback?: boolean;
//   year: number;
//   milage: number;
//   fuelConsumption: number;
//   totalFuelConsumptionCalc: Function;
// }

// function carMethoda(
//   maker: string,
//   model: string,
//   hatcback: boolean,
//   year: number,
//   milage: number,
//   fuelConsumption: number
// ) {
//   let carDetailsIn: carProps = {
//     maker,
//     model,
//     hatcback,
//     year,
//     milage,
//     fuelConsumption,
//     totalFuelConsumptionCalc() {
//       return this.milage / this.fuelConsumption;
//     },
//   };
//   return carDetailsIn;
// }
// let ArielsCar = carMethoda("Honda", "Civic", true, 2011, 148000, 13 / 100);
// console.log(ArielsCar);

// attempt #3
interface carPropsNames {
  maker: string;
  model: string;
  year: number;
  milage: number;
  fuelConsumption: number;
  calcFuelConsumption: Function;
  hatchback?: boolean;
  color?: string;
}

let myBride: carPropsNames = {
  maker: "Honda",
  model: "Civic",
  year: 2011,
  milage: 148000,
  fuelConsumption: 12.9,
  calcFuelConsumption() {
    return this.milage / this.fuelConsumption;
  },
  hatchback: true,
  color: "Blue metalic",
};
