"use strict";

var timer = document.querySelector('#timerClock');
var miliseconds = '00';
var seconds = '00';
var minutes = '00';
var failedMessage = document.getElementById("falied-message");
var ballons = [document.getElementById("ballon-1"), document.getElementById("ballon-2"), document.getElementById("ballon-3"), document.getElementById("ballon-4"), document.getElementById("ballon-5"), document.getElementById("ballon-6"), document.getElementById("ballon-7"), document.getElementById("ballon-8"), document.getElementById("ballon-9"), document.getElementById("ballon-10")];
var count = setInterval(function () {
  miliseconds++;
  timer.innerHTML = "".concat(minutes, ":").concat(seconds, ":").concat(miliseconds);

  if (miliseconds == 99) {
    miliseconds = 0;
    seconds++;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
}, 10);
ballons.forEach(function (item) {
  item.addEventListener('animationend', function (event) {
    // alert(`You failed, your time is: ${minutes}:${seconds}:${miliseconds}`);
    // document.getElementById("failed-div").style.display = "flex";
    console.log('test');
    document.getElementById('failed-div').style.display = "flex";
    document.getElementById('failed-div').style.zIndex = "3";
    failedMessage.innerHTML = "You failed, your time is: ".concat(minutes, ":").concat(seconds, ":").concat(miliseconds);
  });
});