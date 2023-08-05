"use strict";
//     * Add a method `print()` to output the type of the social network and the list of followers (full name) in alphabetical order.
//         > **Example:**
//         >
//         > Twitter: Fishman Shmuel, Nachshon Alon
class SocialNetwork {
    constructor(socialNetworkName, accoundIdentifier, listPerson) {
        this.accoundIdentifier = accoundIdentifier;
        this.socialNetworkName = socialNetworkName;
        this.listPerson = listPerson;
    }
    addFollower(person) {
        if (!this.listPerson.find(FromListPerson => FromListPerson.fullName2 == person.fullName2)) {
            console.log(`New User added - Welcome: ${person.fullName2}`);
            this.listPerson.push(person);
        }
        else {
            console.log("User already exists");
        }
    }
    removeFollower(person) {
        let index = this.listPerson.indexOf(person);
        if (index != -1) {
            this.listPerson.splice(index, 1);
            console.log(`User Deleted: ${person.fullName2}`);
        }
        else {
            console.log("User doesn't exists");
        }
    }
}
class Person {
    constructor(firstname, lastname, genre) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.genre = genre;
        this.fullName = firstname + lastname;
    }
    get fullName2() {
        return `${this.lastName} ${this.firstName}`;
    }
}
let Shlomi = new Person('shlomi', 'asus', 'male');
console.log(Shlomi);
console.log("in get form:" + Shlomi.fullName2);
let twitter = new SocialNetwork("twitter", "shlomiasus@gmail.com", [Shlomi]);
console.log(twitter);
let shanni = new Person('shanni', 'asus', 'female');
twitter.addFollower(shanni);
console.log(twitter.listPerson);
twitter.removeFollower(shanni);
