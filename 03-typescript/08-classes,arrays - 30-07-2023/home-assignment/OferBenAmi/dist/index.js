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
        this.followers = [];
    }
    addFollower(person) {
        if (this.followers.includes(person.fullName)) {
            return;
        }
        this.followers.push(person.fullName);
    }
    removeFollower(fullName) {
        if (this.followers.includes(fullName)) {
            this.followers.splice(this.followers.indexOf(fullName), 1); // removes the first accurance of fullName
        }
    }
}
const Ofer = new Person(`Ofer`, `Ben-Ami`, `programmer`);
const oferSocialNetwork = new SocialNetwork(`instagram`, `ofer134`);
console.log(Ofer.firstName);
