// View זה הHTML כל הdiv
// <div>, <form>, <table>, <button>
// מחלקה לקונה 
// Model  - Class Buyer
// Controller - כל הפונקציות
var Buyer = /** @class */ (function () {
    function Buyer(name, lastName, eMail, phoneNumber, textArea) {
        this.name = name;
        this.lastName = lastName;
        this.eMail = eMail;
        this.phoneNumber = phoneNumber;
        this.textArea = textArea;
    }
    return Buyer;
}());
