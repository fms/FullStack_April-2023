

class Person {
    firstName: string
    lastName: string
    genre: string

    constructor(firstName: string, lastName: string, genre: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.genre = genre
    }

}

const user1 = new Person ("aviel" , "haim" , "men");
const user2 = new Person ("shlomo" , "artzi" , "men");
const user3 = new Person ("pink" , "floyd" , "men");

//  console.log(user.firstName)

// console.log(`${get_the_fullName.firstName} ${get_the_fullName.lastName}`)




class SocialNetwork {
    Social_Network_name: string
    account_identifier: string
 

    constructor(Social_Network_name: string, account_identifier: string) {
        this.Social_Network_name = Social_Network_name
        this.account_identifier = account_identifier
        
    }

}

const SocialNetwork_data = new SocialNetwork ("facebook" , "tttt" );

console.log(`${SocialNetwork_data.Social_Network_name} : ${user1.firstName } ${user1.lastName } , ${user2.firstName } ${user2.lastName } , ${user3.firstName } ${user3.lastName } `)





class Celeb  {
    firstName: string
    lastName: string

    socialNetworks: [
        {network: "twitter",  count: 5},
        {network: "facebook", count: 3},
    ]


    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.socialNetworks[0].count
        this.socialNetworks[1].count
    }

}

// const my_celeb = new Celeb ("aviv" , "gefen" );

//   console.log(`${my_celeb.firstName} : ${my_celeb.lastName } ${my_celeb.socialNetworks } `)