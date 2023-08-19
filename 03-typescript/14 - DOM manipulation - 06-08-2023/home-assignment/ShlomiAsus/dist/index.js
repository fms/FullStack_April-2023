var personClasss = /** @class */ (function () {
    function personClasss(idNumber, firstName, lastName) {
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
var container1 = document.getElementById('container');
var shlomii = new personClasss(1, 'shlomi', 'Asus');
var shani = new personClasss(2, 'shani', 'Asus');
var halely = new personClasss(3, 'halely', 'Asus');
var myArray = [shlomii, shani, halely];
myArray.forEach(function (arrayName1) { createDiv(arrayName1.firstName); });
function createDiv(arrayName1) {
    var div = document.createElement('div');
    div.textContent = ("" + arrayName1);
    div.className = 'div';
    if (container1)
        container1.appendChild(div);
}
