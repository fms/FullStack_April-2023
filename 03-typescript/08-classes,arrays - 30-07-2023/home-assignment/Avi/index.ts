class Person {
    firstName: string;
    lastName: string;
    genre?: string;
    static fullName: Person;

    constructor(firstName: string, lastName: string, genre?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class SocialNetwork {
    SocialNetworkname: string;
    accountIdentifier: string;
    followers: Array<Person>;
    fullName: Person;
    constructor(SocialNetworkname: string, accountIdentifier: string) {
        this.SocialNetworkname = SocialNetworkname;
        this.accountIdentifier = accountIdentifier;
        this.followers = new Array<Person>;
    }
    addFollower(person: Person) {
        if (this.followers.includes(person)) {
            console.log(`You are already following`);
        } else {
            this.followers.push(person);
        }
    }
    removeFollower(fullName: string) {
        for (let i = 0; i < this.followers.length; i++) {
            if (this.followers[i].fullName == fullName) {
                this.followers.splice(i);
                console.log(`The follower ${fullName} was deleted`);
            }
        }
    }
    print() {
        let followerList = this.followers.map(follower => ` ` + follower.fullName)
        console.log(`${this.accountIdentifier} ${this.SocialNetworkname}: ${followerList}`);
    }
}

let ShlomoArtzi = new Person(`Shlomo`, `Artzi`, `Singer`);
let LionelMessi = new Person(`Lionel`, `Messi`, `football`);

let TwitterShlomo = new SocialNetwork(`Twitter`, `@Shlomo`);
let instagramMessi = new SocialNetwork(`instagram`, `@Messi`);
let FacebookRonaldo = new SocialNetwork(`Facebook`, `@Ronaldo`);


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





