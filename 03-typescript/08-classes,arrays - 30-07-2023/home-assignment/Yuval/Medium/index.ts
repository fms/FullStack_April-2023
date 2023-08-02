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
        // [this.lastName, this.firstName] = newName.split(" ");
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
        if(this.accountIdentifier.indexOf(fullName) == -1) {
            return false;
        }
        return true;
    }

    addFollower(person: Person) {
        let fullName: string;
        if(this.findFollower(person.fullName)) {
            console.log(`Already a follower.`);
        }
        else {
            followers.push(person.fullName);
        }
    }

    removeFollower(fullName: string): Person | null {
        let splitName = fullName.split(" ");
        let firstName = splitName[1];
        let lastName = splitName[0];
        let person = new Person(firstName, lastName);
        if(this.findFollower(fullName)) {
            followers.splice(this.accountIdentifier.indexOf(fullName), 1);
            console.log(person);
            return person;
        }
        return null;
    }
}

let yuval = new Person("Yuval", "Lavi", "Actor");
let twitter = new SocialNetwork("Twitter", "@yuval__lavi");

yuval.fullName;
twitter.addFollower(yuval);
console.log(twitter);
twitter.removeFollower(`Lavi Yuval`);
console.log(twitter);

