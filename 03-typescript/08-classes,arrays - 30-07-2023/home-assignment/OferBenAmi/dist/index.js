"use strict";
class Person {
    constructor(firstName, lastName, genre) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(newName) {
        [this.firstName, this.lastName] = newName.split(" ");
    }
}
class SocialNetwork {
    constructor(SocialNetworkName, accountIdentifier) {
        this.SocialNetworkName = SocialNetworkName;
        this.accountIdentifier = accountIdentifier;
    }
}
const Ofer = new Person(`Ofer`, `Ben-Ami`, `programmer`);
// Ofer.fullName = `Ofer1 BenAmi2`
console.log(Ofer.fullName);
