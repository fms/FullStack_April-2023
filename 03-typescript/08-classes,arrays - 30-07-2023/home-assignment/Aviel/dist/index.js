var Person = /** @class */ (function () {
    function Person(firstName, lastName, genre) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
    }
    return Person;
}());
var user1 = new Person("aviel", "haim", "men");
var user2 = new Person("shlomo", "artzi", "men");
var user3 = new Person("pink", "floyd", "men");
//  console.log(user.firstName)
// console.log(`${get_the_fullName.firstName} ${get_the_fullName.lastName}`)
var SocialNetwork = /** @class */ (function () {
    function SocialNetwork(Social_Network_name, account_identifier) {
        this.Social_Network_name = Social_Network_name;
        this.account_identifier = account_identifier;
    }
    return SocialNetwork;
}());
var SocialNetwork_data = new SocialNetwork("facebook", "tttt");
console.log(SocialNetwork_data.Social_Network_name + " : " + user1.firstName + " " + user1.lastName + " , " + user2.firstName + " " + user2.lastName + " , " + user3.firstName + " " + user3.lastName + " ");
var Celeb = /** @class */ (function () {
    function Celeb(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.socialNetworks[0].count;
        this.socialNetworks[1].count;
    }
    return Celeb;
}());
// const my_celeb = new Celeb ("aviv" , "gefen" );
//   console.log(`${my_celeb.firstName} : ${my_celeb.lastName } ${my_celeb.socialNetworks } `)
