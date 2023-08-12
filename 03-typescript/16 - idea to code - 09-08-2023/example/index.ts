// View

// UI:
// - details:
//   first name
//   last name
//   e-mail
//   password
// - error message (only shown if we have errors)
// - action button

// Model
interface Details {
    firstName: string,
    lastName: string,
    eMail: string,
    password: string,
};

let details = {
    firstName: "first",
    lastName: "last",
    eMail: "someone@somewhere.com",
    password: "password123",
};

// Controller
// respond to button click
function buttonClicked(details: Details) {
    // make sure all the details are provided
    // missing details? error
    if(!details.firstName) {
        throw "missing first name";
    }
    if(!details.lastName) {
        throw "missing last name";
    }

    // TODO: Add missing checks for email and password
    checkPassword(details.password);
    
    // save the details
    saveToServer(details);
}

function saveToServer(details: Details) {
    // check that the user doesn't already exist
    if(checkUserExists(details)) {
        // already exist? error
        throw "user already exists";
    }

    // save
    if (saveToStore(details)) {
        // saved? success
        return true;
    }

    // report error to user
    throw "can't save";
}
function checkPassword(password: string) {
    // Check password complexity
    // check length
    // check for specific characters
    // check for consecutive letters
}


function checkUserExists(details: Details):boolean {
    // Check user store for firstName and lastName

    return false;
}

function saveToStore(details: Details):boolean {
    // TODO: save to store
    return true;
}

