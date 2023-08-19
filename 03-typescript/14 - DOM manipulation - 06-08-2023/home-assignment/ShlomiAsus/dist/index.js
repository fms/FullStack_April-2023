var personClasss = /** @class */ (function () {
    function personClasss(idNumber, firstName, lastName, fullname) {
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = this.fulName;
    }
    Object.defineProperty(personClasss.prototype, "fulName", {
        get: function () {
            return this.firstName + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return personClasss;
}());
var shlomii = new personClasss(1, 'shlomi', 'Asus');
var shani = new personClasss(2, 'shani', 'Asus');
var halely = new personClasss(3, 'halely', 'Asus');
var htmlBody = document.body;
var myArray = [shlomii, shani];
myArray.forEach(htmlBody.appendChild(div));
