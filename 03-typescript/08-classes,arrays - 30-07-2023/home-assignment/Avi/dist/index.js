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
class SocialNetwork {
    constructor(SocialNetworkname, accountIdentifier) {
        this.SocialNetworkname = SocialNetworkname;
        this.accountIdentifier = accountIdentifier;
        this.followers = new Array;
    }
    addFollower(person) {
        if (this.followers.includes(person)) {
            console.log(`You are already following`);
        }
        else {
            this.followers.push(person);
        }
    }
    removeFollower(fullName) {
        for (let i = 0; i < this.followers.length; i++) {
            if (this.followers[i].fullName == fullName) {
                this.followers.splice(i);
                console.log(`The follower ${fullName} was deleted`);
            }
        }
    }
    print() {
        console.log(`${this.SocialNetworkname}: `);
    }
}
let ShlomoArtzi = new Person(`Shlomo`, `Artzi`, `Singer`);
let LionelMessi = new Person(`Lionel`, `Messi`, `football`);
let TwitterShlomo = new SocialNetwork(`Twitter`, `@Shlomo`);
let instagramMessi = new SocialNetwork(`instagram`, `@Messi`);
let NewPerson3 = new Person(`Eli`, `David`);
let NewPerson4 = new Person(`Eli`, `Cohen`);
let NewPerson5 = new Person(`Dani`, `Dani`);
TwitterShlomo.addFollower(NewPerson3);
TwitterShlomo.addFollower(NewPerson4);
TwitterShlomo.addFollower(NewPerson5);
instagramMessi.addFollower(NewPerson5);
instagramMessi.addFollower(NewPerson4);
console.log(TwitterShlomo);
TwitterShlomo.removeFollower(` `);
console.log(instagramMessi);
instagramMessi.removeFollower(` `);
instagramMessi.print();
