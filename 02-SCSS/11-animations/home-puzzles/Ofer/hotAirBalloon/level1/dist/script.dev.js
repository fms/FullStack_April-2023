"use strict";

var timer = document.querySelector('#timerClock');
var miliseconds = '00';
var seconds = '00';
var minutes = '00';
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