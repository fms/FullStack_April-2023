class Person {
    firstName: string;
    lastName: string;
    // genre: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.genre = genre;
    }
    
    fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }
}

class SocialNetwork {
    socialNetworkName: string;
    accountIdentifier: string[] = [];

    constructor(socialNetworkName: string) {
        this.socialNetworkName = socialNetworkName
    }

    findFollower(person: Person): boolean {
        if(this.accountIdentifier.findIndex(person.fullName) == -1) {
            return false;
        }
        return true;
    }

    addFollower(person: Person) {
        let fullName: string;
        if(this.findFollower(person)) {
            console.log(`Already a follower.`);
        }
        else {
            fullName = person.fullName();
            this.accountIdentifier.push(fullName);
        }
    }

    removeFollower(fullName: string): Person | null {
        let person = new Person(fullName.slice(fullName.indexOf(" "), fullName.lastIndexOf(fullName, 0)), fullName.slice(0, fullName.indexOf(" ")));
        if(this.findFollower(person)) {
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