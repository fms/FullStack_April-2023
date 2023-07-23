interface car {
    maker: string
    model: string
    year: number
    mileage: number
    fuelconsumption:number
    calculatefuelconsumption: Function 
    }



const mycar:car = {
    maker: 'hyundai',
    model: 'i10',
    year: 2023,
    mileage: 3000,
    fuelconsumption: 200,
    calculatefuelconsumption: function () {
        return this.mileage / this.fuelconsumption;
}
}

console.log(mycar.calculatefuelconsumption());








