// ### Medium

// 1. Write a class named `Person`
//     * In the constructor accept `first name`, `last name` and `genre`
//     * Add a getter to get the fullName (\``${lastName} ${firstName}`\`)
// 2. Write a class named `SocialNetwork`
//     * In the constructor accept the `Social Network name` and the `account identifier`
//     * Add method `addFollower(person: Person)`
//       * Don't add a follower if it's already in the list (use `fullName` to identify the user)
//     * Add method `removeFollower(fullName: string) : Person`
//       * Removes the follower from the list of followers
//       * Returns the removed follower, `null` is the follower was not found.
//     * Add a method `print()` to output the type of the social network and the list of followers (full name) in alphabetical order.
//         > **Example:**
//         >
//         > Twitter: Fishman Shmuel, Nachshon Alon
// ***

// ### Advanced
// 1. Write a class names `Celeb` which is based on `Person`.
//     * Add method `addFollower(socialNetwork, person: Person)`
//       * Add the follower to the correct social network
//        * Don't add a follower if it's already in the list (use `fullName` to identify the user)
//     * Add method `removeFollower(socialNetwork, fullName: string) : Person`
//       * Removes the follower from the list of followers of the specific social network
//       * Returns the removed follower, `null` is the follower was not found.
//     * Add method `details()` to return the details of the celeb, the list of networks and the number of followers for each network
//         ```javascript
//         {
//             firstName: "Shmuel",
//             lastName:  "Fishman",
//             socialNetworks: [
//                 {network: "twitter",  count: 5},
//                 {network: "facebook", count: 3},
//             ]
//         }
//         ```
//     * Add method `print(minFollowers?: number)` to print the details of the celeb, the list of networks and the number of followers for each network, sorted by the number of followers in ascending order
//         > **Example:**<br>
//         >
//         > Shmuel Fishman: Facebook (3) Twitter (5)<br>
    
//         The optional `minFollowers` will only include social networks with at least that number of followers.
//         > **Example: `print(4)`**<br>
//         > Shmuel Fishman: Twitter (5)<br>
// ***
// 2. Write a function `mostPopular(celeb[], socialNetwork): Celeb[]` to return the celebs with the most followers on that specific social media.

class Person {
    genre :string;
    networkObject: { [key: string]: string[] } = {};
    constructor(
        private firstName :string,
        private lastName :string,
        genre? :string,
    ){
        this.genre = genre ?? " ";
    }

    get fullName() :string {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(newName :string){
        [this.firstName,this.lastName] = newName.split(" ")
    }

    follow(socialNetwork :string, person :Person) {
        if(person.networkObject[socialNetwork]) {
            if(person.networkObject[socialNetwork].some((user) => this.fullName === user)){
                return true;
            }
        } else {
            person.networkObject[socialNetwork] = []
            return false;
        }
    }
    

    addFollower(socialNetwork :socialNetwork, person: Person) {
        if(this.follow(socialNetwork.socialNetworkName,person)) {
            console.log(`${this.fullName} allready following after ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        } else {
            person.networkObject[socialNetwork.socialNetworkName].push(this.fullName);
            person.networkObject[socialNetwork.socialNetworkName]
            ++socialNetwork.accountIdentifier
            console.log(`${this.fullName} started following after ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        }
    }

    removeFollower(socialNetwork :socialNetwork, person: Person) {
        if(this.follow(socialNetwork.socialNetworkName,person)) {
            let personNum = person.networkObject[socialNetwork.socialNetworkName].indexOf(this.fullName)
            person.networkObject[socialNetwork.socialNetworkName].splice(personNum,1)
            --socialNetwork.accountIdentifier
            console.log(`${this.fullName} removed follower from ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        } else {
            console.log(`${this.fullName} allready following after ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        }
    }
}

class socialNetwork {
    socialNetworkName :string;
    accountIdentifier :number = 0
    userArray :Person[] = []
    constructor(
        socialNetworkName :string,
    ) {
        this.socialNetworkName = socialNetworkName;
    }

    private follow(person :Person) :boolean {
        if(this.userArray.some(user => (person.fullName === user.fullName))) {
            return true
        }
            return false
    }

    addFollower(person :Person){
        if(this.follow(person)) {
            console.log(`allready following`);
        }else {
            this.userArray.push(person)
            console.log(`follower added!`);
        }
    }
    
    removeFollower(person :Person){
        if(this.follow(person)){
            let personNum = this.userArray.indexOf(person)
            this.userArray.splice(personNum,1)
            console.log(`follow removed!`);
        } else {
            console.log(`cant remove follow if not following.`);
        }
    }

    print(){
        let fullNameArray :string[] = []
        this.userArray.forEach((user) => {
            fullNameArray.push(user.fullName)
        })
        console.log(`${this.socialNetworkName}: ${fullNameArray.slice().sort()}`);
    }
}



class Celeb extends Person {
    networkObject: { [key: string]:string[] } = {};
    constructor(
        firstName :string,
        lastName :string,
        genre? :string,
    ) {
        super(firstName,lastName,genre);
    }

    follow(socialNetwork :string, person :Person) {
        if(person.networkObject[socialNetwork]) {
            if(person.networkObject[socialNetwork].some((user) => this.fullName === user)){
                return true;
            }
        } else {
            person.networkObject[socialNetwork] = []
            return false;
        }
    }
    
    addFollower(socialNetwork :socialNetwork, person: Person) {
        if(this.follow(socialNetwork.socialNetworkName,person)) {
            console.log(`${this.fullName} allready following after ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        } else {
            person.networkObject[socialNetwork.socialNetworkName].push(this.fullName);
            person.networkObject[socialNetwork.socialNetworkName]
            ++socialNetwork.accountIdentifier
            console.log(`${this.fullName} started following after ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        }
    }

    removeFollower(socialNetwork :socialNetwork, person: Person) {
        if(this.follow(socialNetwork.socialNetworkName,person)) {
            let personNum = person.networkObject[socialNetwork.socialNetworkName].indexOf(this.fullName)
            person.networkObject[socialNetwork.socialNetworkName].splice(personNum,1)
            --socialNetwork.accountIdentifier
            console.log(`${this.fullName} removed follower from ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        } else {
            console.log(`${this.fullName} allready following after ${person.fullName} on ${JSON.stringify(socialNetwork.socialNetworkName)}`);
        }
    }

    detail(){
        console.log(this);
    }


    printMi(minNumber? :number) {
        let socialArray: {[key :(string)] :(number | string)[]} = {}
        for(const social in this.networkObject) {
            if(this.networkObject[social].length >= (minNumber ?? 0) ){
                socialArray[social] = []
                socialArray[social].push(this.networkObject[social].length)
            }
        }

        console.log(`${this.fullName}: ${JSON.stringify(socialArray)}`)
    }

    mostPopular(celebsArray: Celeb[], socialNetwork: socialNetwork) {
        let mostFollowed: Celeb | null = null
        let maxFollowers = -1;

        celebsArray.forEach((celeb) => {
            const followersCount = celeb.networkObject[socialNetwork.socialNetworkName].length
            if (followersCount > maxFollowers) {
                maxFollowers = followersCount
                mostFollowed = celeb
            }
        })
        console.log(`${mostFollowed!.fullName} is very popular on ${socialNetwork.socialNetworkName} with followers count of ${maxFollowers}`);
    }

}



let saar = new Person(`Saar`,`Israeli`)
let bar = new Person(`Bar`, `Abulher`)
let amit = new Person(`Amit`,`Hilf`)
let omer = new Person(`Omer`, `Gal`)

let asaf = new Celeb(`asaf`,`kfir`)
let sagi = new Celeb(`sagi`,`franko`)

let twitter = new socialNetwork(`Twitter`)
let facebook = new socialNetwork(`Facebook`)


twitter.addFollower(saar);
twitter.addFollower(saar);
twitter.addFollower(bar);
twitter.addFollower(amit);
twitter.removeFollower(saar);
twitter.print();


facebook.addFollower(saar);
facebook.addFollower(saar);
facebook.addFollower(bar);
facebook.addFollower(amit);
facebook.addFollower(omer);
facebook.removeFollower(saar);
facebook.print();

asaf.addFollower(twitter,sagi);
omer.addFollower(twitter,sagi);
amit.addFollower(twitter,sagi);
asaf.addFollower(facebook,sagi);
omer.addFollower(facebook,sagi);

sagi.detail();



sagi.addFollower(twitter,asaf);
omer.addFollower(twitter,asaf);
amit.addFollower(facebook,asaf);
sagi.addFollower(facebook,asaf);
omer.addFollower(facebook,asaf);


sagi.printMi(2)
asaf.printMi(2)

sagi.mostPopular([sagi,asaf],twitter)
sagi.mostPopular([sagi,asaf],facebook)