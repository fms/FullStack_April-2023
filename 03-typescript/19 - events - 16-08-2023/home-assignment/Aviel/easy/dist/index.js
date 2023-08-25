function changeh1red() {
    var redcolor = document.querySelector('#id_h1');
    if (redcolor != null) {
        redcolor.style.color = "red";
    }
}
/////// Easy
function displaybluecolor() {
    var bluecolor = document.querySelector('#div_id');
    if (bluecolor != null) {
        bluecolor.style.background = "blue";
        // setInterval(displaybluecolor, 5000);
        // bluecolor.innerHTML += "Hello";
        // bluecolor.style.background = "green"
    }
}
function displayredcolor() {
    var redcolor = document.querySelector('#div_id');
    if (redcolor != null) {
        redcolor.style.background = "red";
    }
}
/////// Medium
var images = ['image/js1.png', 'image/js2.png', 'image/js3.png'];
function next_image() {
    var imge = document.querySelector('#my_imge');
    if (imge != null) {
        // name.value = "aviel";
        imge.src = images[0 + 1];
    }
}
function prev_image() {
    var imge = document.querySelector('#my_imge');
    if (imge != null) {
        // name.value = "aviel";
        imge.src = images[0];
    }
}
function passwords() {
    var input1 = document.getElementById('id_pass1');
    var value1 = input1 === null || input1 === void 0 ? void 0 : input1.value;
    // console.log(value1) 
    var input2 = document.getElementById('id_pass2');
    var value2 = input2 === null || input2 === void 0 ? void 0 : input2.value;
    // console.log(value2) 
    var resurt = document.querySelector('#test_result');
    if (value1 === value2) {
        if (resurt != null) {
            resurt.value = "its ok";
        }
    }
}
