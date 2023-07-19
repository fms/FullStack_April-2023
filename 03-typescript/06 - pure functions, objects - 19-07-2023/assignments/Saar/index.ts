// Write a method for creating a new Car object.
// Properties include: maker, model, year, milage, fuel consumption (km/l)
// Add a method for calculating total fuel consumption (milage / fuel consunmption)

interface car {
    maker :string,
    model :string,
    year :number,
    milage :number,
    fuel : number,
}

let bugatti = carObjects(`Bugatti`,`Divo`,2018,75000,50.0007232,)


function carObjects(maker :string , model :string, year :number, milage :number , fuel :number) {
    let totalFuelConsumtion :number = (milage / fuel)
    let carProperties :any = `Car maker: ${maker}, Car model: ${model}, Car year: ${year}, Car milage ${milage}, Car fuel ${fuel}.`;
    return `${carProperties}, your total Fuel Consumtion is ${totalFuelConsumtion}`
}

console.log(carObjects('Mazda', 'Mazda 3', 2023 , 100000 , 60.008388))      // log car propreties, get back "total fuel consumtion".

console.log(bugatti)
