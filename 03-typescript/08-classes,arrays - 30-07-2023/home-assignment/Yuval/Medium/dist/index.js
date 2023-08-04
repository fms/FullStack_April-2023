"use strict";
const followers = [];
class Person {
    constructor(firstName, lastName, genre) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre !== null && genre !== void 0 ? genre : "";
    }
    get fullName() {
        return (`${this.lastName} ${this.firstName}`);
    }
    set fullName(newName) {
        let splitName = newName.split(" ");
        this.firstName = splitName[1];
        this.lastName = splitName[0];
    }
}
class SocialNetwork {
    constructor(socialNetworkName, accountIdentifier) {
        this.socialNetworkName = socialNetworkName;
        this.accountIdentifier = accountIdentifier;
    }
    findFollower(fullName) {
        if (followers.indexOf(fullName) == -1) {
            return false;
        }
        return true;
    }
    addFollower(person) {
        // let fullName: string;
        if (this.findFollower(person.fullName)) {
            console.log(`Already a follower.`);
        }
        else {
            followers.push(person.fullName);
            console.log(person.fullName);
        }
    }
    removeFollower(fullName) {
        let splitName = fullName.split(" ");
        let firstName = splitName[1];
        let lastName = splitName[0];
        let person = new Person(firstName, lastName, "");
        if (this.findFollower(fullName)) {
            followers.splice(followers.indexOf(fullName), 1);
            console.log(person);
            return person;
        }
        return null;
    }
    get followersList() {
        return followers;
    }
    alphabetic() {
        let alphabeticFollowers = followers.sort();
        return alphabeticFollowers;
    }
    print() {
        console.log(`${this.socialNetworkName}: ${this.alphabetic()}`);
    }
}
let yuval = new Person("Yuval", "Lavi", "Actor");
let yuvalTwitter = new SocialNetwork("Twitter", "@yuval__lavi");
let theRock = new Person("Dwayne", "Johnson", "Actor");
let mjf = new Person("Max", "Friedman", "Wrestler");
let jamesGunn = new Person("James", "Gunn", "Director");
let ld77 = new Person("Luka", "Doncic", "Basketball player");
yuvalTwitter.addFollower(theRock);
yuvalTwitter.print();
yuvalTwitter.addFollower(mjf);
yuvalTwitter.print();
yuvalTwitter.addFollower(ld77);
yuvalTwitter.print();
yuvalTwitter.addFollower(jamesGunn);
yuvalTwitter.print();
yuvalTwitter.removeFollower("Doncic Luka");
console.log(ld77.fullName);
yuvalTwitter.print();
