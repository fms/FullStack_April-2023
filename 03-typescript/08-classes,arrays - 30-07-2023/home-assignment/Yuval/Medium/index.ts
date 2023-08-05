// Medium
class Person {
    firstName: string;
    lastName: string;
    genre: string;
    
    constructor(firstName: string, lastName: string, genre?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre ?? "";
    }
    
    get fullName() :string {
        return (`${this.lastName} ${this.firstName}`);
    }

    set fullName(newName: string) {
        let splitName = newName.split(" ");
        this.firstName = splitName[1];
        this.lastName = splitName[0];
    }
}

class SocialNetwork {
    socialNetworkName: string;
    accountIdentifier: string;
    followers: string[] = [];

    constructor(socialNetworkName: string, accountIdentifier: string) {
        this.socialNetworkName = socialNetworkName;
        this.accountIdentifier = accountIdentifier;
    }

    findFollower(fullName: string): boolean {
        if(this.followers.indexOf(fullName) == -1) {
            return false;
        }
        return true;
    }

    addFollower(person: Person) {
        if(this.findFollower(person.fullName)) {
            console.log(`Already a follower.`);
        }
        else {
            this.followers.push(person.fullName);
            console.log(person.fullName);
        }
    }

    removeFollower(fullName: string): Person | null {
        let splitName = fullName.split(" ");
        let firstName = splitName[1];
        let lastName = splitName[0];
        let person = new Person(firstName, lastName, "");
        if(this.findFollower(fullName)) {
            this.followers.splice(this.followers.indexOf(fullName), 1);
            console.log(person);
            return person;
        }
        return null;
    }

    get followersList(): string[] {
        return this.followers;
    }

    alphabetic(): string[] {
        let alphabeticFollowers: string[] = this.followers.sort();
        return alphabeticFollowers;
    }

    print() {
        console.log(`${this.accountIdentifier} followers on ${this.socialNetworkName}: ${this.alphabetic()}`);
    }
}

//Advanced
class Celeb extends Person {
    constructor(firstName: string, lastName: string, genre?: string){
        super(firstName, lastName, genre ?? "Celeb");
    }

    addFollower(socialNetwork: SocialNetwork, person: Person) {
        socialNetwork.addFollower(person);
    }

    removeFollower(socialNetwork: SocialNetwork, fullName: string) {
        socialNetwork.removeFollower(fullName);
    }

    details() {
        console.log(`First name: ${this.firstName}
        Last name: ${this.lastName}
        socialNetworks:
        `)
    }

    
}

let yuval = new Celeb("Yuval", "Lavi", "Actor");
let yuvalTwitter = new SocialNetwork("Twitter", "@yuval__lavi");
let yuvalInstagram = new SocialNetwork("Instagram", "@yuval__lavi");
let yuvalTikTok = new SocialNetwork("TikTok", "@yuval__lavi");

let theRock = new Celeb("Dwayne", "Johnson", "Actor");
let rockTwitter = new SocialNetwork("Twitter", "@therock");
let rockInstagram = new SocialNetwork("Instagram", "@therock");
let rockFacebook = new SocialNetwork("Facebook", "Dwayne Johnson");

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
yuvalTwitter.print();

yuval.addFollower(yuvalTwitter, mjf);
yuvalTwitter.print();

yuval.addFollower(yuvalTwitter, ld77);
yuvalTwitter.print();

yuval.addFollower(yuvalTwitter, jamesGunn);
yuvalTwitter.print();

yuval.removeFollower(yuvalTwitter, "Doncic Luka");
console.log(ld77.fullName);
yuvalTwitter.print();

theRock.addFollower(rockTwitter, mjf);
rockTwitter.print();

yuval.details();

