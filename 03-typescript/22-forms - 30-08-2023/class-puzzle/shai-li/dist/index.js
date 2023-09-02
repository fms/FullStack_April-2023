//RADIO
var form = document.querySelector("form");
var login = document.querySelector("#log");
form.addEventListener("submit", function (ev) {
    var data = new FormData(form);
    var output = "";
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var entry = data_1[_i];
        output = "" + output + entry[0] + "=" + entry[1] + "/r";
    }
    login.innerText = output;
    ev.preventDefault();
}, false);
