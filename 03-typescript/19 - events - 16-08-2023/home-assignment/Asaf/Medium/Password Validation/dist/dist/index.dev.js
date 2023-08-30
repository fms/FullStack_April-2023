"use strict";

var input1 = document.querySelector(".frstInput");
var input2 = document.querySelector(".secInput");
var confirmBtn = document.querySelector("button");
var password1 = "";
var password2 = "";
input1.addEventListener("input", function (ev) {
  console.log(ev.target.value);
});