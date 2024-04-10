export default interface User {
    id: number; //
    firstName: string; //
    lastName: string; //
    maidenName: string;
    age: number; //
    gender: Gender; //
    email: string; //
    phone: string; //
    username: string; //
    password: string;
    birthDate: Date;
    image: string; //
    bloodGroup: BloodGroup;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string
    };
    domain: string;
    ip: string;
    address: {
        address: string;
        city: string;
        coordinates: {
            lat: string,
            lng: string
        };
        postalCode: number;
        state: string;
    };
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    company: {
        address: {
            address: string;
            city: string;
            coordinates: {
                lat: string;
                lng: string
            };
            postalCode: number;
            state: string
        };
        department: string;
        name: string;
        title: string;
    };
    ein: string;
    ssn: string;
    userAgent: string;
}

export enum Gender {
    male,
    female
}

export enum BloodGroup {
    "A-",
    "A+",
    "B-",
    "B+",
    "AB-",
    "AB+",
    "O-",
    "O+"
}