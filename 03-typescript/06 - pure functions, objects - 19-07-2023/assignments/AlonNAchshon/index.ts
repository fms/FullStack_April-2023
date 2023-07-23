
interface car{
  maker:string,
  model:string,
  year:number,
  miilage:number,
  fuelConsumption:Function
};

function printCarDet(car:car):string{
  return car.maker + " " + car.model + ", year:" + car.year + ", millage: " + car.miilage + ",  "+ car.fuelConsumption()+".";
}

function createCar(_maker:string,  _model:string,  _year:number,  _miilage:number){

  let newCar = {
    maker:_maker,
    model:_model,
    year:_year,
    miilage:_miilage,
    fuelConsumption:function (){
      return "fuel consuption for "+ this.maker +" " + this.model + " : " + this.miilage / 50 + " l\\km."
      }
    }
    
  return newCar
}

let workCar:car = createCar("Mazda", "6 LAZ", 2023, 17520)

console.log(printCarDet(workCar))
console.log(workCar["fuelConsumption"]())
