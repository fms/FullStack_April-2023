class Person {
    constructor(public firstName: string, public lastName: string, public gender: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class SocialNetwork {
    followers: Person[] = [];
    constructor(public socNetName: string, public accId: string) {
        this.socNetName = socNetName;
        this.accId = accId;
    }

    checkFollower(person: Person): boolean {
        let checker = true;
        this.followers.forEach((x) => {
            if (x.fullName == person.fullName) {
                checker = false;
            } else {
                checker = true;
            }
        })
        return checker
    }

    addFollower(person: Person) {
        if (this.followers.length == 0) {
            this.followers.push(person);
        } else {
            if (this.checkFollower(person)) {
                this.followers.push(person);
            } else {
                console.log(`${person.fullName} is allready a follower.`)
            }
        }
    }

    removeFollower(person: Person) {
        let startIn = this.followers.indexOf(person);
        this.followers.splice(startIn, 1);
        return console.log(`${person.fullName} was removed from your followers.`);
    }

    print() {
        let namesArray: string[] = [];
        this.followers.forEach((fol) => namesArray.push(fol.fullName));
        namesArray.sort();
        console.log(`${this.socNetName} Followers: ${namesArray}`)
    }
}

let person1 = new Person("asaf", "Ivgi", "Male")
let person2 = new Person("bfdsf", "kfoe", "Male")
let person3 = new Person("hotkoals", "fsd", "Male")
let person4 = new Person("asds", "Ivgi", "Male")
let person5 = new Person("grkosaf", "Ivgi", "Male")
let person6 = new Person("pqwsaf", "Ivgi", "Male")
let facebook = new SocialNetwork("Facebook", "Asaf Ivgi")
facebook.followers.push(person1, person2, person3, person4, person5, person6);
