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
}
class socialNetwork {
    constructor(socialName, accountId) {
        this.followers = [];
        this.socialName = socialName;
        this.accountId = accountId;
    }
    addFollower(person) {
        if (this.socialName === person.fullName) {
            console.log(`${person.fullName} follows you already`);
        }
        else {
            this.followers.push(person);
            console.log(`Meet your new follower: ${person.fullName}`);
        }
    }
    removeFollower(fullName, person) {
        if (this.socialName === person.fullName) {
            console.log(`${person.fullName} follows you already`);
        }
        else {
            this.followers.pop(person);
            console.log(`${person.fullName} does not follow you`);
        }
    }
}
