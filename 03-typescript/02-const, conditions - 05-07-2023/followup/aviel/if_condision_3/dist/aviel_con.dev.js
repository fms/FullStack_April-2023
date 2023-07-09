"use strict";

function init() {
  checktemp();
}

function checktemp() {
  var my_hot_temp = 28;
  var my_cold_temp = 21;
  var temp = document.querySelector("#id_input").value;

  if (temp > my_hot_temp) {
    document.querySelector("#id_span").innerHTML = "hot!";
    document.querySelector("#id_span").style.background = "red";
  } else if (temp <= my_cold_temp) {
    document.querySelector("#id_span").innerHTML = "cold!";
    document.querySelector("#id_span").style.background = "aqua";
  } else {
    document.querySelector("#id_span").innerHTML = "normal!";
    document.querySelector("#id_span").style.background = "greenyellow";
  }
}