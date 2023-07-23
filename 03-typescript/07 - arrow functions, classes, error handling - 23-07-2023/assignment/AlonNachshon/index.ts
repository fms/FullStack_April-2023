class Car {
  #maker:string; //# is private
  #model:string;
  #year:number;
  #millage:number;

  constructor(maker?:string, model?:string, year?:number, millage?:number){

    this.#maker = maker ?? "NO MAKER WAS SET"; 
    this.#model = model ?? "No MODEL WAS SET"; 
    this.#year = year ?? 1900;
    this.#millage = millage ?? 0;

  }

  describe(){
    return `${this.#maker} ${this.#model} Car was built is ${this.#year} has ${this.#millage} on it and has fuel consumption of ${this.getFuelConsumption()}.`
  }
  
  getFuelConsumption (){
    let consumption:number = (this.#millage) / 12;
    return `${consumption}`
  }

  setMaker(maker:string){
    this.#maker = maker;
  }

  setModel(model:string){
    this.#model = model;
  }

  setYear(year:number){
    this.#year = year;
  }
  
  setMillage(millage:number){
    this.#millage = millage;
  }

}

let mazda = new Car()
console.log(mazda.describe())

let beatle = new Car("Beatle", "B1", 1998, 100)
console.log(beatle.describe())



// Access Modifiers
// private: available only inside the same class -> are also # before variables
// public: avilable to everyone inside the class and from outside -> are also _ before variables
// protected: avilable inside a class and his childrens only

