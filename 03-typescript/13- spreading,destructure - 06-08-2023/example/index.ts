const array = [1, 2, 3, 4, 5, 7, 10, 20, 30, 24];

let [first, second, third] = array;
// let last = array[array.length - 1];
let [last] = array.slice(-1);
let [firstAgain, secondAgain, ...allFollowingElements] = array;

console.log("without spreading", first, second, third, last);
console.log("with spreading", firstAgain, secondAgain, allFollowingElements);

const person  = {
    firstName: "Shmuel",
    lastName: "Fishman",
};

const person2 = {
    firstName: "Shmuel",
    lastName: "Fishman",
};

const person3 = {
    firstName: "Shmuel",
    lastName: "Fishman",
};

let { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

// newPerson and person both point to the same object
let newPerson = person;
console.log(person);
console.log(newPerson);
person.firstName = "Sam";           // newPerson also changes
console.log(person);
console.log(newPerson);
console.log(person === newPerson);  // True

// anotherPerson.person2 and person both point to the same object
let anotherPerson = {person2};
console.log(person2);
console.log(anotherPerson);
person2.firstName = "Sam";       // anotherPerson.person2 also changes
console.log(person2);
console.log(anotherPerson);
console.log(person2 === anotherPerson.person2);  // True

// final person copies all properties of person3.
// It's a new, separate, copy.
let finalPerson = {...person3};
console.log(person3);
console.log(finalPerson);
person3.firstName = "Sam";              // finalPerson is NOT changed
console.log(person3);
console.log(finalPerson);
console.log(person3 === finalPerson);  // False

// Merge objects
const obj1 = {
    field1: "value1",
    common: "common value",
};

const obj2 = { 
    field2: "value2",
    common: "another common value",
}

const obj3 = {...obj1, ...obj2, test: "really?", ...person};
console.log(obj3);

// Destructure nested object
const nested = {
    thisName: "Shmuel",
    address: {
        city: "Raanana",
        Street: "Really?",
        // houseNumber: 1,
    }
}

const {thisName} = nested;

const { address: {city, houseNumber = 10}} = nested;
console.log(city, houseNumber);

function printPerson(person: object) {
    console.log(`${person.firstName} ${person.lastName}`);
}

function printPerson2({firstName = "no first name" , lastName}) {
    console.log(`${firstName} ${lastName}`);
}

printPerson(finalPerson);
printPerson2(finalPerson);

const someAnimal = {
    firstName: "bobo",
    lastName: "The monkey",
    food: "banana",
}

printPerson2(someAnimal);
