var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, genre) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
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
var Celeb = /** @class */ (function (_super) {
    __extends(Celeb, _super);
    function Celeb(firstName, lastName, genre) {
        var _this = _super.call(this, firstName, lastName, genre) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.genre = genre;
        _this.socialNetworks = [];
        return _this;
    }
    Celeb.prototype.addSocNet = function (network) {
        this.socialNetworks.push(network);
        return network + " has been added to " + this.fullName + ".";
    };
    Celeb.prototype.addFollower = function (network, person) {
        var networkIndex = this.socialNetworks.indexOf(network);
        if (this.socialNetworks.length == 0) {
            console.log("No social networks found.");
        }
        else {
            if (this.socialNetworks[networkIndex].followers.length == 0) {
                this.socialNetworks[networkIndex].followers.push(person);
            }
            else {
                if (this.socialNetworks[networkIndex].checkFollower(person)) {
                    this.socialNetworks[networkIndex].followers.push(person);
                }
                else {
                    console.log(person.fullName + " is allready a follower.");
                }
            }
        }
    };
    Celeb.prototype.removeFollower = function (network, person) {
        var networkIndex = this.socialNetworks.indexOf(network);
        var startIn = this.socialNetworks[networkIndex].followers.indexOf(person);
        this.socialNetworks[networkIndex].followers.splice(startIn, 1);
        return console.log(person.fullName + " was removed from your followers.");
    };
    return Celeb;
}(Person));
var person1 = new Person("asaf", "Ivgi", "Male");
var person2 = new Person("bfdsf", "kfoe", "Male");
var person3 = new Person("hotkoals", "fsd", "Male");
var person4 = new Person("asds", "Ivgi", "Male");
var person5 = new Person("grkosaf", "Ivgi", "Male");
var person6 = new Person("pqwsaf", "Ivgi", "Male");
var facebook = new SocialNetwork("Facebook", "Asaf Ivgi");
var twitter = new SocialNetwork("Twitter", "Asaf Ivgi");
var instagrem = new SocialNetwork("Instagrem", "Asaf Ivgi");
// facebook.followers.push(person1, person2, person3, person4, person5, person6);
// twitter.followers.push(person1, person2, person3, person4, person5, person6);
var celeb1 = new Celeb("Asaf", "ivgi", "Male");
celeb1.addSocNet(facebook);
celeb1.addSocNet(twitter);
celeb1.addFollower(facebook, person1);
celeb1.addFollower(facebook, person2);
celeb1.addFollower(facebook, person3);
celeb1.addFollower(facebook, person4);
celeb1.addFollower(twitter, person4);
celeb1.addFollower(twitter, person1);
celeb1.addFollower(twitter, person2);
celeb1.addFollower(twitter, person5);
celeb1.addFollower(twitter, person6);
