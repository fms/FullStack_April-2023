var Person = /** @class */ (function () {
    function Person(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var SocialNetwork = /** @class */ (function () {
    function SocialNetwork(socNetName, accId) {
        this.socNetName = socNetName;
        this.accId = accId;
        this.followers = [];
        this.socNetName = socNetName;
        this.accId = accId;
    }
    SocialNetwork.prototype.checkFollower = function (person) {
        var checker = true;
        this.followers.forEach(function (x) {
            if (x.fullName == person.fullName) {
                checker = false;
            }
            else {
                checker = true;
            }
        });
        return checker;
    };
    SocialNetwork.prototype.addFollower = function (person) {
        if (this.followers.length == 0) {
            this.followers.push(person);
        }
        else {
            if (this.checkFollower(person)) {
                this.followers.push(person);
            }
            else {
                console.log(person.fullName + " is allready a follower.");
            }
        }
    };
    SocialNetwork.prototype.removeFollower = function (person) {
        var startIn = this.followers.indexOf(person);
        this.followers.splice(startIn, 1);
        return console.log(person.fullName + " was removed from your followers.");
    };
    SocialNetwork.prototype.print = function () {
        var namesArray = [];
        this.followers.forEach(function (fol) { return namesArray.push(fol.fullName); });
        namesArray.sort();
        console.log(this.socNetName + " Followers: " + namesArray);
    };
    return SocialNetwork;
}());
var person1 = new Person("asaf", "Ivgi", "Male");
var person2 = new Person("bfdsf", "kfoe", "Male");
var person3 = new Person("hotkoals", "fsd", "Male");
var person4 = new Person("asds", "Ivgi", "Male");
var person5 = new Person("grkosaf", "Ivgi", "Male");
var person6 = new Person("pqwsaf", "Ivgi", "Male");
var facebook = new SocialNetwork("Facebook", "Asaf Ivgi");
facebook.followers.push(person1, person2, person3, person4, person5, person6);
