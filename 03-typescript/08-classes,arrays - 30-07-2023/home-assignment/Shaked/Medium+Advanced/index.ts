class Person1 {
    firstName: string;
    lastName: string;
    genre: string;

    constructor(firstName: string, lastName: string, genre: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
    }
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class SocialNetwork1 {
    socialName: string;
    accountID: string;
    followers: Person1[] = [];

    constructor(socialName: string, accountID: string) {
        this.socialName = socialName;
        this.accountID = accountID;
    }
    addFollower(person: Person1) {
        if (this.socialName === person.firstName) {
            console.log('Cannot add a follower');
        } else {
            this.followers.push(person);
            console.log(`A new follower has been added : \n${person.fullName}`);
        }
    }
    removeFollower(name: string): Person1 | null {
        const followerName = this.searchFollower(name);
        if (followerName) {
            const index = this.followers.findIndex(follower => follower.fullName === followerName);
            if (index !== -1) {
                const removedFollower = this.followers.splice(index, 1)[0];
                return removedFollower;
            }
        }
        return null;
    }

    searchFollower(name: string): string {
        for (let i = 0; i < this.followers.length; i++) {
            if (this.followers[i].fullName.includes(name)) {
                return this.followers[i].fullName;
            }
        }
        return `${name} Name is not exist`;
    }
    print() {
        const list = this.followers.map((name) => name.fullName);
        return `${this.socialName} Followers : ${list}`;
    }
}

class Celeb1 extends Person1 {
    socialNetworks: SocialNetwork1[] = [];

    addFollower(socialNetwork: SocialNetwork1, person: Person1) {
        const isFollowerExist = socialNetwork.followers.some(follower => follower.fullName === person.fullName);
        if (!isFollowerExist) {
            socialNetwork.addFollower(person);
        } else {
            console.log(`Cannot add ${person.fullName} as a follower. Already a follower.`);
        }
    }

    addSocialNetwork(socialNetwork: SocialNetwork1) {
        this.socialNetworks.push(socialNetwork);
    }

    details() {
        const networkDetails = this.socialNetworks.map(network => {
            const count = network.followers.filter(follower => follower.fullName !== this.fullName).length;
            return { network: network.socialName, count };
        });

        return {
            firstName: this.firstName,
            lastName: this.lastName,
            socialNetworks: networkDetails,
        };
    }
}

function mostPopular(celebs: Celeb1[], socialNetwork: string): Celeb1[] {
    const popularCelebs: Celeb1[] = [];

    for (const celeb of celebs) {
        const isFollower = celeb.socialNetworks.some(network => network.socialName === socialNetwork);

        if (isFollower) {
            popularCelebs.push(celeb);
        }
    }

    return popularCelebs;
}

const name1: Person1 = new Person1('Shaked', 'Edri', '');
const name2: Person1 = new Person1('Avi', 'Dahan', '');
const name3: Person1 = new Person1('Shimon', 'Abukasis', '');

const social: SocialNetwork1 = new SocialNetwork1('Instagram', '@shakededri');
const social1: SocialNetwork1 = new SocialNetwork1('Facebook', 'Shaked Edri');
const tw1tter: SocialNetwork1 = new SocialNetwork1('Twitter', 'Shmuel Fishman');

const shmue1: Celeb1 = new Celeb1('Shmuel', 'Fishman', '');
const johndoe: Celeb1 = new Celeb1('John', 'Doe', 'Actor');
const emmawa: Celeb1 = new Celeb1('Emma', 'Watson', 'Actress');
const celebs: Celeb1[] = [johndoe, emmawa, shmue1, /* וכל הסלבים האחרים */];
const popularCelebsOnInstagram: Celeb1[] = mostPopular(celebs, 'Instagram');

social.addFollower(name1);
social.addFollower(name2);
social.removeFollower('Shaked Edri');

console.log(social.followers);
console.log(social.searchFollower('Yossi'));
console.log(social.removeFollower('Yossi'));
console.log(social.followers);

social.addFollower(name1);
social1.addFollower(name3);

console.log(social.followers);
console.log(social.print());
console.log(social1.followers);
console.log(social1.print());

johndoe.addFollower(social, johndoe);

shmue1.addSocialNetwork(social);
shmue1.addSocialNetwork(social1);
shmue1.addSocialNetwork(tw1tter);
shmue1.addFollower(social, name1);
shmue1.addFollower(social, name2);
shmue1.addFollower(tw1tter, name3);
const details = shmue1.details();

const networksInfo = details.socialNetworks.map(network => `${network.network} (${network.count})`).join(' ');
console.log(`${shmue1.fullName}: ${networksInfo}`);
console.log('Most popular celebs on Instagram:', popularCelebsOnInstagram);