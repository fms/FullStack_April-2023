// Write a method for creating a new Car object.
// Properties include: maker, model, year, milage, fuel consumption (km/l)
// Add a method for calculating total fuel consumption (milage / fuel consunmption)

interface car 
{
    maker :string,
    model :string,
    year :number,
    milage :number,
    fuelConsunmption : number,
}

let bugatti = carObjects(`Bugatti` ,`Divo` ,2018 ,75000 ,50.0007232)


function carObjects(maker :string , model :string, year :number, milage :number , fuelConsunmption :number)
{
    let totalFuelConsumtion :number = (milage / fuelConsunmption)
    let carProperties :any = `Car maker: ${maker}, Car model: ${model}, Car year: ${year}, Car milage ${milage}, Car fuelConsunmption ${fuelConsunmption}.`;
    return `${carProperties}, your total Fuel Consumtion is ${totalFuelConsumtion}`
}

console.log(carObjects('Mazda', 'Mazda 3', 2023 , 100000 , 60.008388))

console.log(bugatti)
