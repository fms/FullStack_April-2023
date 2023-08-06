"use strict";
const array = [10, 20, 30, 8, 17];
let minValue = Math.min(10, 20, 30, 8, 17);
console.log(minValue);
minValue = Math.max(...array);
console.log(minValue);
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);
let array4 = [...array1, ...array2]; // [ 1, 2, 3, 4, 5, 6]
console.log(array4);
function print(...values) {
    values.forEach((x) => console.log(x));
}
print(1);
print(1, 2, 3, 4);
// let a = array[0];
// let b = array[1];
let [a, b, ...c] = array; // [10, 20, 30, 8, 17];
//   a   b  |-> c 
console.log(a);
console.log(b);
console.log(c);
console.log(array);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(newName) {
        [this.firstName, this.lastName] = newName.split(" ");
    }
}
let person = new Person("Shmuel", "Fishman");
console.log(person);
console.log(person.fullName);
let samePerson = new Person("Shmuel", "Fishman");
console.log(samePerson);
console.log(samePerson.fullName);
samePerson.fullName = "Avi Vertsman";
console.log(samePerson);
