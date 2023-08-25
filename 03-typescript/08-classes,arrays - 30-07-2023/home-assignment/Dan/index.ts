class Person {
    firstName: string;
    lastName: string;
    genre: string;

        constructor(firstName: string, lastName: string, genre: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.genre = genre;
        }

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
}

class socialNetwork {
    socialName: string;
    accountId: string;
    followers: Person[] = [];

        constructor(socialName: string, accountId: string) {
            this.socialName = socialName;
            this.accountId = accountId;
    }

    addFollower (person: Person) {
        if (this.socialName === person.fullName) {
            console.log(`${person.fullName} follows you already`);
        }
        else {
            this.followers.push(person);
            console.log(`Meet your new follower: ${person.fullName}`);
        }
    }

    removeFollower (fullName: string, person: Person): Person | null {
        if (this.socialName === person.fullName) {
            console.log(`${person.fullName} follows you already`);
        }
        else {
            this.followers.pop(person);
            console.log(`${person.fullName} does not follow you`);
        }
    }
    }

    




