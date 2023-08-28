/* a class named Person
In the constructor accept first name, last name and genre
Add a getter to get the fullName (`${lastName} ${firstName}`)
Write a class named SocialNetwork
In the constructor accept the Social Network name and the account identifier
Add method addFollower(person: Person)
Don't add a follower if it's already in the list (use fullName to identify the user)
Add method removeFollower(fullName: string) : Person
Removes the follower from the list of followers
Returns the removed follower, null is the follower was not found.
Add a method print() to output the type of the social network and the list of followers (full name) in alphabetical order.
Example:

Twitter: Fishman Shmuel, Nachshon Alon*/

class Person{

    firstName: string;
    lastName: string;
    genre: string;

    constructor(firstName: string, lastName: string, genre: string){
        this.firstName = firstName
        this.lastName = lastName
        this.genre = genre
    }

    getfullName(){
        return ((`${this.firstName} ${this.lastName}`));
    }
}
class Celeb extends Person {
    networkObject: { [key: string]: string[] } = {};
    constructor(firstName: string, lastName: string, genre: string) {
        super(firstName, lastName, genre)
    }
    
    addFollower(socialNetwork: string, person: Person){
        if(!this.networkObject[socialNetwork])
        {
            this.networkObject[socialNetwork] = [person.getFullName()];
        }
        else if(this.networkObject[socialNetwork].some(user => person.getFullName()=== user))
        {
            console.log('user is already in the network')
            return null
        }
        else
            this.networkObject[socialNetwork].push(person.getFullName())
    }

    removeFollower(socialNetwork: string, person:Person){
        if (!this.networkObject[socialNetwork]){
            console.log('social network dont exist')
        }
        else {
            const index = this.networkObject[socialNetwork].findIndex(user => person)
            if(index !== -1){
                this.networkObject[socialNetwork].splice(index, 1)
            }
            else{
                console.log('user dont exist')
            }
        }
    }

    print(minimumFollowers: number){
        if(minimumFollowers) {
            for(const socialNetwork in this.networkObject){
                if(this.networkObject[socialNetwork].length >= minimumFollowers) {
                    console.log('${this.getFullName()}: ${socialNetwork}, Followers:${this.networkObject[socialNetwork].length}');
                }
                else
                    console.log('there is not enough followers ${socialNetwork}');
            
            }
        }
        else{
            console.log('error')
        }

    }
}
