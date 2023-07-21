"use strict";
let firstName1 = 'Shmuel';
let lastName1 = 'Fishman';
let firstName2 = 'Aviel';
let lastName2 = 'Haim';
function printUserDetails(first, last) {
    console.log(`Old: First name: ${first}, last name: ${last}`);
}
printUserDetails(firstName1, lastName2); // oops, wrong pair
function printNewUserDetails(user) {
    console.log(`New: First name: ${user.firstName}, last name: ${user.lastName}, age: ${user.age}`);
}
let user1 = {
    firstName: 'Shmuel',
    lastName: 'Fishman',
    age: 50,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
let user2 = {
    firstName: 'Aviel',
    lastName: 'Haim',
    fullName() { return this.firstName + " " + this.lastName; },
};
console.log(this);
printNewUserDetails(user1);
printNewUserDetails(user2);
console.log(user1.fullName());
console.log(user2.fullName());
// Factory function
// Version 1
// function createUser(firstName: string, lastName: string, age?: number) {
//     let newUser:user = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         fullName: function() {
//             return this.firstName + " " + this.lastName;
//         }
//     }
//     return newUser;
// }
// Version 2 - no need to repeat the property name if it matches the variable name
function createUser(firstName, lastName, age) {
    let newUser = {
        firstName,
        lastName,
        age,
        fullName() { return this.firstName + " " + this.lastName; },
    };
    return newUser;
}
let user3 = createUser("Dan", "Bin-noun", 25);
printNewUserDetails(user3);
const user4 = createUser("Dan", "Bin-noune", 25); // Oops, got the last name wrong
printNewUserDetails(user4);
// user4 = user3;                    // Error, it's a const!
user4.lastName = "Bin-noun"; // Fix it? Yes, we can change properties
printNewUserDetails(user4);
function increaseAge(user) {
    let age = user.age === undefined ? 0 : user.age;
    user.age = age + 1;
}
// user5 and user4 reference the same data
let user5 = user4;
let user6 = createUser(user4.firstName, user4.lastName, user4.age); // Separate copy
increaseAge(user5); // Also changes user4, because they're the same
increaseAge(user6);
increaseAge(user6);
increaseAge(user2);
printNewUserDetails(user2);
printNewUserDetails(user4); // Pass by reference, 
printNewUserDetails(user5); // Pass by reference, 
printNewUserDetails(user6); // Pass by reference, 
// Pass by value
let num = 10;
function increase(num) {
    num++; // Change local copy, global num is still 10
}
increase(num);
console.log(num);
// Define an object with properties of firstName, lastName
let userDetails = {
    firstName: "Shmuel",
    lastName: "Fishman",
};
// Define an object with a property of age
let userAge = {
    age: 50,
};
// new object, includes properties from both objects above
let combined = {
    firstName: "Shmuel",
    lastName: "Fishman",
    age: 50,
};
function printDetails(user) {
    console.log(user.firstName);
}
function printAge(user) {
    console.log(user.age);
}
printDetails(userDetails); // Correct
printDetails(userAge); // object mismatch
printAge(userDetails); // object mismatch
printAge(userAge); // Correct
printDetails(combined); // Correct, has required properties
printAge(combined); // Correct, has required properties
printNewUserDetails(combined); // Works because of JS, depite TS error
// // Print the value of property firstName in userDetails
// console.log(userDetails.firstName);         // Using dot notation: object.property
// console.log(userDetails['firstName']);      // Using index name  : object['proprty']
// let propertyName = 'firstName';                     // Use this variable as the name of the property
// console.log(userDetails[   propertyName    ]);      // Using index name  : object['proprty']
// // Limitations of TypeScript
// propertyName = 'email';
// console.log(userDetails.email);             // Using dot notation - property does not exist ==> error
// console.log(userDetails['email']);          // Using index name - property does not exist, but no error
// console.log(userDetails[propertyName]);     // Using index name - will not generate error
