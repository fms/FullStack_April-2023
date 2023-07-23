
class Car {
  maker:string;
  model:string;
  year:number;
  millage:number;

  constructor(_maker?:string, _model?:string, _year?:number, _millage?:number){
    this.maker = _maker ?? "NO MAKER WAS SET"; 
    this.model = _model ?? "No MODEL WAS SET"; 
    this.year = _year ?? 1900;
    this.millage = _millage ?? 0;
  }

  describe(){
    return `${this.maker} ${this.model} Car was built is ${this.year} has ${this.millage} on it and has fuel consumption of ${this.getFuelConsumption()}.`
  }
  
  getFuelConsumption (){
    let consumption:number = (this.millage) / 12;
    return `${consumption}`
  }

}

let mazda = new Car()
console.log(mazda.describe())

let beatle = new Car("Beatle", "B1", 1998, 18000)
console.log(beatle.describe())
