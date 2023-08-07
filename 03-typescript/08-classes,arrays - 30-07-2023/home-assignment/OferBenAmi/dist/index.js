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
        if (this.followers.includes(person)) {
            return;
        }
        this.followers.push(person);
    }
    removeFollower(fullName) {
        const removedFollower = this.followers.find(person => person.fullName === fullName);
        if (removedFollower) {
            this.followers.splice(this.followers.indexOf(removedFollower), 1);
            return removedFollower;
        }
        else {
            return null;
        }
    }
    print() {
        let allNamesArray = [];
        this.followers.forEach(x => allNamesArray.push(x.fullName));
        console.log(`${this.SocialNetworkName}:  ${allNamesArray.sort()}`);
    }
}
const ofer = new Person(`Ofer`, `Ben-Ami`, `worker`);
const roni = new Person(`Roni`, `ya`, `student`);
const avi = new Person(`Avi`, `asdasd`, `dadaad`);
const golan = new Person(`Golan`, `dididi`, `football player`);
const oferSocialNetwork = new SocialNetwork(`instagram`, `ofer134`);
const roniSocialNetwork = new SocialNetwork(`instagram`, `roniYa`);
const aviSocialNetwork = new SocialNetwork(`instagram`, `aviGO`);
const golanSocialNetwork = new SocialNetwork(`instagram`, `golanha`);
oferSocialNetwork.addFollower(roni);
oferSocialNetwork.addFollower(ofer);
oferSocialNetwork.addFollower(avi);
oferSocialNetwork.addFollower(golan);
console.log(oferSocialNetwork.print());
