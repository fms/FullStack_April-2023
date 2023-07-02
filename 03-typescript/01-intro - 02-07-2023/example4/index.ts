// Define an object with properties of firstName, lastName
let userDetails =
{
    firstName: "Shmuel",
    lastName: "Fishman"
};

// Print the value of property firstName in userDetails
console.log(userDetails.firstName);         // Using dot notation: object.property
console.log(userDetails['firstName']);      // Using index name  : object['proprty']

let propertyName = 'firstName';                     // Use this variable as the name of the property
console.log(userDetails[   propertyName    ]);      // Using index name  : object['proprty']

// Limitations of TypeScript
propertyName = 'email';
console.log(userDetails.email);             // Using dot notation - property does not exist ==> error
console.log(userDetails['email']);          // Using index name - property does not exist, but no error
console.log(userDetails[propertyName]);     // Using index name - will not generate error

