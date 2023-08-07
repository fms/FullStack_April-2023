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

    print(minFollowers: number) {
        if (minFollowers) {
            for (const socialNetwork in this.networkObject) {
                if (this.networkObject[socialNetwork].length >= minFollowers) {
                    console.log(`${this.getFullName()}: ${socialNetwork}, Followers:${this.networkObject[socialNetwork].length} `);
                }
                else {
                    console.log(`Not enough followers in ${socialNetwork}`);
                }
            }
        }
        else {
            console.log("Error");
        }
    }

    mostPopular(celebsArray: ACeleb[], socialNetwork: string) {
        let mostFollowed: ACeleb | null = null
        let maxFollowers = -1;

        celebsArray.forEach((celeb) => {
            const followersCount = celeb.networkObject[socialNetwork].length
            if (followersCount > maxFollowers) {
                maxFollowers = followersCount
                mostFollowed = celeb
            }
        })
        return `${mostFollowed!.getFullName()} is very popular with followers count of ${maxFollowers}`;
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

let personA = new APerson("Amit", "Gazub", "A")
let personB = new APerson("Hofni", "Klark", "B")
let personC = new APerson("Yoni", "Asark", "C")

let socialNetworkA = new ASocialNetwork("Twitter", 10)

// socialNetwork.addFollower(person1)
// socialNetwork.addFollower(person2)
// socialNetwork.addFollower(person3)
// console.log(socialNetwork.print());

let celebA = new ACeleb("Ofir", "Eldar", "D")
let celebB = new ACeleb("Avatiah", "Sameah", "F")
let celebC = new ACeleb("Simcha", "Biton", "H")


celebA.addFollower("Twitter", personC);
celebA.addFollower("Facebook", personB)
celebA.addFollower("Facebook", personC)
celebB.addFollower("Twitter", personC);
celebB.addFollower("Facebook", personC)
celebC.addFollower("Twitter", personC);
celebC.addFollower("Facebook", personB)
celebC.addFollower("Instagram", personC)

// celeb.print(2)
// celeb.details()
console.log(celebA.mostPopular([celebA, celebB, celebC], "Facebook"));