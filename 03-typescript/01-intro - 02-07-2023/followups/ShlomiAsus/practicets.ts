let myFirstName = 'shlomi';
let myLastName = 'asus';

let myPerson = { myFirstName:"shlomi", myLastName:"asus" };

console.log(myPerson.myFirstName);
console.log(myPerson.myLastName);
console.log(myFirstName + myLastName);

let jinx=myPerson;
jinx.myFirstName = "new man";
jinx.myLastName = "new last name"

console.log("printing jinx");
console.log(jinx.myFirstName);
console.log(jinx.myLastName);
 
