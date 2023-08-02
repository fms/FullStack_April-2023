"use strict";
class Person {
    // genre: string;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.genre = genre;
    }
    fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
}
class SocialNetwork {
    constructor(socialNetworkName) {
        this.accountIdentifier = [];
        this.socialNetworkName = socialNetworkName;
    }
    findFollower(person) {
        if (this.accountIdentifier.findIndex(person.fullName) == -1) {
            return false;
        }
        return true;
    }
    addFollower(person) {
        let fullName;
        if (this.findFollower(person)) {
            console.log(`Already a follower.`);
        }
        else {
            fullName = person.fullName();
            this.accountIdentifier.push(fullName);
        }
    }
    removeFollower(fullName) {
        let person = new Person(fullName.slice(fullName.indexOf(" "), fullName.lastIndexOf(fullName, 0)), fullName.slice(0, fullName.indexOf(" ")));
        if (this.findFollower(person)) {
            this.accountIdentifier.splice(this.accountIdentifier.findIndex(person.fullName));
            return person;
        }
        return null;
    }
}
let yuval = new Person("Yuval", "Lavi");
let avi = new Person("Avi", "Lavi");
let twitter = new SocialNetwork("Twitter");
twitter.addFollower(yuval);
twitter.addFollower(avi);
twitter.removeFollower("Lavi Avi");
