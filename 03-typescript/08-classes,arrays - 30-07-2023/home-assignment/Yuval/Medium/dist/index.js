"use strict";
// Medium
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
        this.followers = [];
        this.socialNetworkName = socialNetworkName;
        this.accountIdentifier = accountIdentifier;
    }
    findFollower(fullName) {
        if (this.followers.indexOf(fullName) == -1) {
            return false;
        }
        return true;
    }
    addFollower(person) {
        if (this.findFollower(person.fullName)) {
            console.log(`Already a follower.`);
        }
        else {
            this.followers.push(person.fullName);
            // console.log(person.fullName);
        }
    }
    removeFollower(fullName) {
        let splitName = fullName.split(" ");
        let firstName = splitName[1];
        let lastName = splitName[0];
        let person = new Person(firstName, lastName, "");
        if (this.findFollower(fullName)) {
            this.followers.splice(this.followers.indexOf(fullName), 1);
            console.log(person);
            return person;
        }
        return null;
    }
    get followersList() {
        return this.followers;
    }
    alphabetic() {
        let alphabeticFollowers = this.followers.sort();
        return alphabeticFollowers;
    }
    print() {
        console.log(`${this.accountIdentifier} followers on ${this.socialNetworkName}: ${this.alphabetic()}`);
    }
}
//Advanced
class Celeb extends Person {
    constructor(firstName, lastName, genre) {
        super(firstName, lastName, genre !== null && genre !== void 0 ? genre : "Celeb");
        this.socialNetworks = [];
    }
    findSocialNetwork(socialNetwork) {
        if (this.socialNetworks.indexOf(socialNetwork) == -1) {
            return false;
        }
        return true;
    }
    addSocialNetwork(socialNetwork) {
        if (!this.findSocialNetwork(socialNetwork)) {
            this.socialNetworks.push(socialNetwork);
        }
    }
    addFollower(socialNetwork, person) {
        socialNetwork.addFollower(person);
    }
    removeFollower(socialNetwork, fullName) {
        socialNetwork.removeFollower(fullName);
    }
    howManyFollowers(socialNetwork) {
        return `${socialNetwork.socialNetworkName}, count: ${socialNetwork.followers.length}`;
    }
    followersAcrossNetworks() {
        for (let index = 0; index <= this.socialNetworks.length - 1; index++) {
            console.log(this.howManyFollowers(this.socialNetworks[index]));
        }
    }
    details() {
        console.log(`First name: ${this.firstName}`);
        console.log(`Last name: ${this.lastName}`);
        console.log(`socialNetworks:`);
        this.followersAcrossNetworks();
    }
    print(minFollowers) {
        let tempArray = this.socialNetworks.map(x => ({
            name: x.socialNetworkName,
            followers: x.followers.length - 1,
        }));
        tempArray.sort((a, b) => a.followers - b.followers);
        tempArray = tempArray.filter((y) => y.followers >= (minFollowers || 0));
        let endString = `${this.fullName}: `;
        if (!minFollowers) {
            minFollowers = 0;
        }
        for (let index = 0; index <= tempArray.length - 1; index++) {
            endString = endString + `${tempArray[index].name} (${tempArray[index].followers}) `;
        }
        console.log(endString);
    }
}
function space() {
    console.log("");
}
let yuval = new Celeb("Yuval", "Lavi", "Actor");
let yuvalTwitter = new SocialNetwork("Twitter", "@yuval__lavi");
let yuvalInstagram = new SocialNetwork("Instagram", "@yuval__lavi");
let yuvalTikTok = new SocialNetwork("TikTok", "@yuval__lavi");
yuval.addSocialNetwork(yuvalTwitter);
yuval.addSocialNetwork(yuvalTikTok);
yuval.addSocialNetwork(yuvalInstagram);
let theRock = new Celeb("Dwayne", "Johnson", "Actor");
let rockTwitter = new SocialNetwork("Twitter", "@therock");
let rockInstagram = new SocialNetwork("Instagram", "@therock");
let rockFacebook = new SocialNetwork("Facebook", "Dwayne Johnson");
theRock.addSocialNetwork(rockTwitter);
theRock.addSocialNetwork(rockInstagram);
theRock.addSocialNetwork(rockFacebook);
let mjf = new Celeb("Max", "Friedman", "Wrestler");
let mjfTwitter = new SocialNetwork("Twitter", "@the_mjf");
let mjfInstagram = new SocialNetwork("Instagram", "@the_mjf");
let jamesGunn = new Celeb("James", "Gunn", "Director");
let jgTwitter = new SocialNetwork("Twitter", "@jamesgunn");
let jgInstagram = new SocialNetwork("Instagram", "@jamesgunn");
let jgThreads = new SocialNetwork("Threads", "@jamesgunn");
let ld77 = new Celeb("Luka", "Doncic", "Basketball player");
let ldTwitter = new SocialNetwork("Twitter", "@lukadoncic");
let ldInstagram = new SocialNetwork("Instagram", "@lukadoncic");
yuval.addFollower(yuvalTwitter, theRock);
yuval.addFollower(yuvalTwitter, mjf);
yuval.addFollower(yuvalTikTok, mjf);
yuval.addFollower(yuvalTwitter, ld77);
yuval.addFollower(yuvalTwitter, jamesGunn);
yuval.addFollower(yuvalInstagram, ld77);
yuval.addFollower(yuvalInstagram, jamesGunn);
theRock.addFollower(rockTwitter, mjf);
theRock.addFollower(rockTwitter, yuval);
theRock.addFollower(rockTwitter, jamesGunn);
theRock.addFollower(rockInstagram, mjf);
theRock.addFollower(rockInstagram, yuval);
theRock.addFollower(rockInstagram, jamesGunn);
theRock.addFollower(rockInstagram, ld77);
let celeb = [];
celeb.push(yuval, theRock, mjf, jamesGunn, ld77);
space();
yuval.details();
space();
yuval.print(2);
theRock.print();
