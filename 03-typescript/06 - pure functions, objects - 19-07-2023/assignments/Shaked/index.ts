interface ShakedCar {
    maker: string;
    model: string;
    year: number;
    mileage: number;
    fuel: number;
    FuelCon: () => number;
    AddToString: () => string;
}

function createCar(maker: string, model: string,
    year: number, mileage: number, fuel: number): ShakedCar {
    const createNew: ShakedCar = {
        maker, model, year, mileage, fuel,
        FuelCon: () => {
            return createNew.mileage / createNew.fuel;
        },
        AddToString: () => {
            const formattedDetails = `
            Shaked's car details :
Maker: ${createNew.maker}
Model: ${createNew.model}
Year: ${createNew.year}
Mileage: ${createNew.mileage}
Fuel: ${createNew.fuel}
Fuel Consumption: ${createNew.FuelCon()} `;
            return formattedDetails;
        },
    };
    return createNew;
}

let createNewCar: ShakedCar = createCar("BMW", "X6", 2023, 2450, 12);
alert(createNewCar.AddToString());
