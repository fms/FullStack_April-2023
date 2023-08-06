"use strict";
class Person {
    constructor(fname, lName, gender) {
        this.fName = fname;
        this.lName = lName;
        this.gender = gender;
    }
    getFullName() {
        return `${this.fName} ${this.lName}`;
    }
    getFirstName() {
        return this.fName;
    }
    getLastName() {
        return this.lName;
    }
}
class SocialNetwork {
    constructor(name, accountId) {
        this.name = name;
        this.accountId = accountId;
        this.followers = [];
    }
    addFollower(person) {
        if (!(this.inList(person.getFullName()))) {
            this.followers.push(person);
            console.log(`User ${person.getFullName()} added to ${this.accountId} followers on ${this.name}.`);
        }
        else {
            console.log(`User ${person.getFullName()} already exsist in followers.`);
        }
    }
    removeFollower(fullName) {
        let p;
        if (this.inList(fullName)) {
            let n = this.followers.findIndex((person) => person.getFullName() === fullName);
            if (n != -1) {
                p = this.followers.splice(n, 1).pop();
                console.log(`User ${fullName} was removed from ${this.accountId} followers on ${this.name}.`);
                this.print();
                return p;
            }
        }
        console.log(`User ${fullName} wasn't found in ${this.accountId} followers on ${this.name}.`);
        p = null;
        return p;
    }
    print() {
        if (this.followers.length === 0)
            console.log(`This ${this.name} account has no followers yet.`);
        else
            console.log(`${this.name}: ${(this.followers.map((person) => person.getFullName()).join(', '))}`);
    }
    inList(fullName) {
        for (let i = 0; i < this.followers.length; i++) {
            if (this.followers[i].getFullName() === fullName) {
                return true;
            }
        }
        return false;
    }
}
class Celeb extends Person {
}
const p1 = new Person("Ploni", "Almoni", "a");
// console.log(p1.getFullName());
// console.log(p1.getFirstName());
// console.log(p1.getLastName());
const p2 = new Person("Tip", "Tipon", "b");
const p3 = new Person("Gar", "Gamel", "c");
const p4 = new Person("Tedy", "Bear", "e");
const s1 = new SocialNetwork("Twitter", "@tip598");
const s2 = new SocialNetwork("Facebook", "gargame1954");
// s1.print();
// s2.print();
s1.addFollower(p1);
s1.addFollower(p1);
s1.addFollower(p2);
s1.addFollower(p3);
s1.print();
s1.removeFollower(p1.getFullName());
console.log(s1.removeFollower("Ali"));
s1.addFollower(p4);
s1.print();
s1.removeFollower(p2.getFullName());
s1.removeFollower(p2.getFullName());
s1.removeFollower(p3.getFullName());
s1.removeFollower(p4.getFullName());
s1.removeFollower(p4.getFullName());
// s1.addFollower(p1);
// s1.addFollower(p2);
// s1.addFollower(p4);
// s1.addFollower(p4);
// s1.print();
// s1.addFollower(p3);
// s1.addFollower(p3);
// s1.print();
// s1.removeFollower("Ploni Almoni");
// console.log(s1.inList("Ploni Almoni");)
