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
var APerson = /** @class */ (function () {
    function APerson(firstName, lastName, genre) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.genre = genre;
    }
    APerson.prototype.getFullName = function () {
        return ((this.firstName + " " + this.lastName));
    };
    return APerson;
}());
var ACeleb = /** @class */ (function (_super) {
    __extends(ACeleb, _super);
    function ACeleb(firstName, lastName, genre) {
        var _this = _super.call(this, firstName, lastName, genre) || this;
        _this.networkObject = {};
        return _this;
    }
    ACeleb.prototype.addFollower = function (socialNetwork, person) {
        if (!this.networkObject[socialNetwork]) {
            this.networkObject[socialNetwork] = [person.getFullName()];
        }
        else if (this.networkObject[socialNetwork].some(function (user) { return person.getFullName() === user; })) {
            console.log("User is already in the social network");
            return null;
        }
        else {
            this.networkObject[socialNetwork].push(person.getFullName());
        }
    };
    ACeleb.prototype.removeFollower = function (socialNetwork, person) {
        if (!this.networkObject[socialNetwork]) {
            console.log("Social network does not exist");
        }
        else {
            var index = this.networkObject[socialNetwork].findIndex(function (user) { return person.getFullName() === user; });
            if (index !== -1) {
                this.networkObject[socialNetwork].splice(index, 1);
            }
            else {
                console.log("User does not exist");
            }
        }
    };
    ACeleb.prototype.details = function () {
        console.log(this);
    };
    return ACeleb;
}(APerson));
var ASocialNetwork = /** @class */ (function () {
    function ASocialNetwork(socialNetworkName, accountIdentifier, usersArray) {
        if (usersArray === void 0) { usersArray = []; }
        this.usersArray = [];
        this.socialNetworkName = socialNetworkName;
        this.accountIdentifier = accountIdentifier;
        this.usersArray = usersArray;
    }
    ASocialNetwork.prototype.addFollower = function (person) {
        if (this.usersArray.some(function (user) { return (person.getFullName() === user.getFullName()); })) {
            console.log("User is already in the social network");
        }
        else {
            this.usersArray.push(person);
        }
    };
    ASocialNetwork.prototype.removeFollower = function (person) {
        if (this.usersArray.some(function (user) { return (person.getFullName() === user.getFullName()); })) {
            this.usersArray.splice(this.usersArray.indexOf(person), 1);
            return person;
        }
        else {
            console.log("User is not in the social network");
            return null;
        }
    };
    ASocialNetwork.prototype.print = function () {
        var fullNameArray = [];
        this.usersArray.forEach(function (user) {
            fullNameArray.push(user.getFullName());
        });
        return this.socialNetworkName + ": " + fullNameArray;
    };
    return ASocialNetwork;
}());
var person1 = new APerson("Amit", "Gazub", "A");
var person2 = new APerson("Hofni", "Klark", "B");
var person3 = new APerson("Yoni", "Asark", "C");
var socialNetwork = new ASocialNetwork("Twitter", 10);
// socialNetwork.addFollower(person1)
// socialNetwork.addFollower(person2)
// socialNetwork.addFollower(person3)
// console.log(socialNetwork.print());
var celeb = new ACeleb("Amir", "Shlazag", "D");
celeb.addFollower("Twitter", person3);
celeb.addFollower("Facebook", person2);
celeb.addFollower("Facebook", person3);
// celeb.addFollower("Instagram", person2);
// celeb.addFollower("Twitter", person3);
// celeb.addFollower("Twitter", person1);
// celeb.addFollower("Twitter", person1);
celeb.details();
