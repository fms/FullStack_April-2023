// Create a Car class:
// - Properties include: maker, model, year, milage, fuel consumption (km/l)
// - Add a method for calculating total fuel consumption (milage / fuel consunmption)
// - Add any methods you'd like


class Car {
    maker: string ;
    model: string ;
    year: number;
    milage: number;
    fuelConsunmption: number;

    constructor(maker: string , model :string, year :number, milage:number, fuelConsunmption: number,) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.fuelConsunmption = fuelConsunmption;
    }

    describe = () => console.log(`Car maker is ${this.maker} , the model is ${this.model} and the year is ${this.year}`);

    totalFuelConsumtionlog = () => console.log(this.milage / this.fuelConsunmption);
}

let mazda = new Car("Mazda", "Mazda 3" , 2023 , 100000 , 60.008388);
mazda.describe();
mazda.totalFuelConsumtionlog();

class RaceCar extends Car {
    kmPH: number;
    constructor(maker: string , model :string, year :number, milage:number, fuelConsunmption: number,kmPH: number) {
        super(maker, model, year, milage, fuelConsunmption)
        this.kmPH = kmPH;
    }
    maxKmPerHour = () => console.log(`max speed is ${this.kmPH} km/h`);
}

let bugatti = new RaceCar("Bugatti", "Divo" , 2018 , 75000 , 50.0007232 , 440);
bugatti.describe();
bugatti.totalFuelConsumtionlog();
bugatti.maxKmPerHour();


enum food {
    vegan,
    vegetarian,
    carnivorous,
}


// Abstract class //

abstract class Animal {
    legs :number;
    tail :number;
    color :string;
    food :food = food.vegan;

    constructor(legs :number, tail :number, color :string,) {
        this.legs = legs;
        this.tail = tail;
        this.color = color;
    }

    eat() {
        switch(this.food) {
            case food.vegan :
                console.log(`We are vegan!`);
                break;
            case food.vegetarian :
                console.log(`We are vegetarian!`);
                break;
            case food.carnivorous :
                console.log(`We are carnivorous!`);
                break;
        }
    }

    describe = () => console.log(`This animal have ${this.legs} legs , ${this.tail} tail , and he is ${this.color}.`);
}

class Bugs extends Animal {
    food :food = food.vegetarian;
    constructor(tail :number, color :string,) {
    super(8,tail,color);

}
    climb = () => console.log(`can walk on the wall`)

    describe = () => console.log(`This bug have ${this.legs} legs , ${this.tail} tail , and he is ${this.color}.`);
}
    



let firstSpider = new Bugs(0,"black");
firstSpider.describe();
firstSpider.climb();
firstSpider.eat();

class Cows extends Animal {
    constructor(color :string,) {
        super(4,1,color);
    }
    
    sound() {
        console.log('Mooooo')
    }
}

let firstCow = new Cows(`brown`);
firstCow.describe();
firstCow.eat();
firstCow.sound();

class Lions extends Animal {
    kmph :number;
    food :food = food.carnivorous;
    constructor(color :string, kmph :number){
        super(4,1,color)
        this.kmph = kmph;
    }

    speed() {
        console.log(`Running ${this.kmph} km/h`);
    }

    describe = () => console.log(`He is the king of the jungle!`);
}

let firstLion = new Lions (`bright orange`,80);
firstLion.speed();
firstLion.describe();
firstLion.eat();