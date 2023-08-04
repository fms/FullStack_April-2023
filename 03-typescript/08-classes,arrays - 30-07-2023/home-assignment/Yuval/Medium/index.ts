const followers: string[] = [];
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

    constructor(socialNetworkName: string, accountIdentifier: string) {
        this.socialNetworkName = socialNetworkName;
        this.accountIdentifier = accountIdentifier;
    }

    findFollower(fullName: string): boolean {
        if(followers.indexOf(fullName) == -1) {
            return false;
        }
        return true;
    }

    addFollower(person: Person) {
        // let fullName: string;
        if(this.findFollower(person.fullName)) {
            console.log(`Already a follower.`);
        }
        else {
            followers.push(person.fullName);
            console.log(person.fullName);
        }
    }

    removeFollower(fullName: string): Person | null {
        let splitName = fullName.split(" ");
        let firstName = splitName[1];
        let lastName = splitName[0];
        let person = new Person(firstName, lastName, "");
        if(this.findFollower(fullName)) {
            followers.splice(followers.indexOf(fullName), 1);
            console.log(person);
            return person;
        }
        return null;
    }

    get followersList(): string[] {
        return followers;
    }

    alphabetic(): string[] {
        let alphabeticFollowers: string[] = followers.sort();
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

