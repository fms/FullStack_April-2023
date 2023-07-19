
interface car{
  maker:string,
  model:string,
  year:number,
  miilage:number,
  fuelConsumption:number
};

function totalFuelConsumtion(car:car): string{
  return "Fuel consuption for "+ car.maker +" " + car.model + " : " + car.miilage / car.fuelConsumption + " l\\km.";
}

let workCar:car = { 
  maker:"Mazda",
  model:"6 LAX",
  year:2023,
  miilage:1000,
  fuelConsumption:50
}

function printCarDet(car:car):string{
  return car.maker + " " +car.model + ", year:" + car.year + ", millage: " + car.miilage + ", fuel consumtion: "+ car.fuelConsumption+".";
}

console.log(printCarDet(workCar))
console.log(totalFuelConsumtion(workCar))
