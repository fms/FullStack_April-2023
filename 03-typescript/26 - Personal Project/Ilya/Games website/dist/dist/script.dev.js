"use strict"; // Sticky Navigation Menu JS Code

var nav = document.querySelector("nav");
var scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
var val;

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav === null || nav === void 0 ? void 0 : nav.classList.add("sticky");
    scrollBtn === null || scrollBtn === void 0 ? void 0 : scrollBtn.style.display = "block";
  } else {
    nav === null || nav === void 0 ? void 0 : nav.classList.remove("sticky");
    scrollBtn === null || scrollBtn === void 0 ? void 0 : scrollBtn.style.display = "none";
  }
}; // Side NavIgation Menu JS Code


var body = document.querySelector("body");
var navBar = document.querySelector(".navbar");
var menuBtn = document.querySelector(".menu-btn");
var cancelBtn = document.querySelector(".cancel-btn");
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.onclick = function () {
  navBar === null || navBar === void 0 ? void 0 : navBar.classList.add("active");
  menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.style.opacity = "0";
  menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.style.pointerEvents = "none";
  body === null || body === void 0 ? void 0 : body.style.overflow = "hidden";
  scrollBtn === null || scrollBtn === void 0 ? void 0 : scrollBtn.style.pointerEvents = "none";
};
cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.onclick = function () {
  navBar === null || navBar === void 0 ? void 0 : navBar.classList.remove("active");
  menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.style.opacity = "1";
  menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.style.pointerEvents = "auto";
  body === null || body === void 0 ? void 0 : body.style.overflow = "auto";
  scrollBtn === null || scrollBtn === void 0 ? void 0 : scrollBtn.style.pointerEvents = "auto";
}; // Side Navigation Bar Close While We Click On Navigation Links

var navLinks = document.querySelectorAll(".menu li a");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar === null || navBar === void 0 ? void 0 : navBar.classList.remove("active");
    menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.style.opacity = "1";
    menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.style.pointerEvents = "auto";
  });
}
/*read more-less*/


"use strict";

var content1 = document.getElementById("content1");
var button = document.getElementById("show-more");
button === null || button === void 0 ? void 0 : button.onclick = function () {
  if ((content1 === null || content1 === void 0 ? void 0 : content1.className) == "open") {
    //shrink the box
    content1.className = "";
    button === null || button === void 0 ? void 0 : button.innerHTML = "Read more";
  } else {
    //expand the box
    content1 === null || content1 === void 0 ? void 0 : content1.classList.add("open");
    button === null || button === void 0 ? void 0 : button.innerHTML = "Read less";
  }
};
/*slider*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}