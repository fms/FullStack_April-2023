class APerson {
    firstName: string
    lastName: string
    genre: string

    constructor(firstName: string, lastName: string, genre: string,) {
        this.firstName = firstName
        this.lastName = lastName
        this.genre = genre
    }

    getFullName() {
        return ((`${this.firstName} ${this.lastName}`));
    }
}

class ACeleb extends APerson {
    networkObject: { [key: string]: string[] } = {};
    constructor(firstName: string, lastName: string, genre: string) {
        super(firstName, lastName, genre);
    }

    addFollower(socialNetwork: string, person: APerson) {
        if (!this.networkObject[socialNetwork]) {
            this.networkObject[socialNetwork] = [person.getFullName()];
        } else if (this.networkObject[socialNetwork].some(user => person.getFullName() === user)) {
            console.log("User is already in the social network");
            return null
        } else {
            this.networkObject[socialNetwork].push(person.getFullName());
        }
    }

    removeFollower(socialNetwork: string, person: APerson) {
        if (!this.networkObject[socialNetwork]) {
            console.log("Social network does not exist");
        } else {
            const index = this.networkObject[socialNetwork].findIndex(user => person.getFullName() === user);
            if (index !== -1) {
                this.networkObject[socialNetwork].splice(index, 1);
            } else {
                console.log("User does not exist");
            }
        }
    }

    details() {
        console.log(this);
    }
}

class ASocialNetwork {
    socialNetworkName: string
    accountIdentifier: number
    usersArray: APerson[] = []

    constructor(socialNetworkName: string, accountIdentifier: number, usersArray: APerson[] = []) {
        this.socialNetworkName = socialNetworkName
        this.accountIdentifier = accountIdentifier
        this.usersArray = usersArray
    }

    addFollower(person: APerson) {
        if (this.usersArray.some(user => (person.getFullName() === user.getFullName()))) {
            console.log("User is already in the social network");
        } else {
            this.usersArray.push(person);
        }
    }

    removeFollower(person: APerson) {
        if (this.usersArray.some(user => (person.getFullName() === user.getFullName()))) {
            this.usersArray.splice(this.usersArray.indexOf(person), 1);
            return person
        } else {
            console.log("User is not in the social network");
            return null
        }
    }

    print() {
        let fullNameArray: string[] = []
        this.usersArray.forEach((user) => {
            fullNameArray.push(user.getFullName())
        })
        return `${this.socialNetworkName}: ${fullNameArray}`
    }
}

let person1 = new APerson("Amit", "Gazub", "A")
let person2 = new APerson("Hofni", "Klark", "B")
let person3 = new APerson("Yoni", "Asark", "C")

let socialNetwork = new ASocialNetwork("Twitter", 10)

// socialNetwork.addFollower(person1)
// socialNetwork.addFollower(person2)
// socialNetwork.addFollower(person3)
// console.log(socialNetwork.print());

let celeb = new ACeleb("Amir", "Shlazag", "D")


celeb.addFollower("Twitter", person3);
celeb.addFollower("Facebook", person2)
celeb.addFollower("Facebook", person3)


// celeb.addFollower("Instagram", person2);
// celeb.addFollower("Twitter", person3);
// celeb.addFollower("Twitter", person1);
// celeb.addFollower("Twitter", person1);
celeb.details()

