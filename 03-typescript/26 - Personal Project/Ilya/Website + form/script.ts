// Sticky Navigation Menu JS Code
const nav: HTMLElement | null = document.querySelector("nav");
const scrollBtn: HTMLElement | null = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val: number;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav?.classList.add("sticky");
    scrollBtn?.style.display = "block";
  }else{
    nav?.classList.remove("sticky");
    scrollBtn?.style.display = "none";
  }
}

// Side NavIgation Menu JS Code
const body: HTMLElement | null = document.querySelector("body");
const navBar: HTMLElement | null = document.querySelector(".navbar");
const menuBtn: HTMLElement | null = document.querySelector(".menu-btn");
const cancelBtn: HTMLElement | null = document.querySelector(".cancel-btn");

menuBtn?.onclick = function(){
  navBar?.classList.add("active");
  menuBtn?.style.opacity = "0";
  menuBtn?.style.pointerEvents = "none";
  body?.style.overflow = "hidden";
  scrollBtn?.style.pointerEvents = "none";
}

cancelBtn?.onclick = function(){
  navBar?.classList.remove("active");
  menuBtn?.style.opacity = "1";
  menuBtn?.style.pointerEvents = "auto";
  body?.style.overflow = "auto";
  scrollBtn?.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar?.classList.remove("active");
    menuBtn?.style.opacity = "1";
    menuBtn?.style.pointerEvents = "auto";
  });
}

/*read more-less*/
"use strict";

const content1: HTMLElement | null = document.getElementById("content1");
const button: HTMLElement | null = document.getElementById("show-more");

button?.onclick = function () {
  if (content1?.className == "open") {
    //shrink the box
    content1.className = "";
    button?.innerHTML = "Read more";
  } else {
    //expand the box
    content1?.classList.add("open");
    button?.innerHTML = "Read less";
  }
};

/*slider*/
let slideIndex: number = 1;
showSlides(slideIndex);

function plusSlides(n: number) {
  showSlides(slideIndex += n);
}

function currentSlide(n: number) {
  showSlides(slideIndex = n);
}

function showSlides(n: number) {
  let i: number;
  const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
  const dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      (dots[i] as HTMLElement).className = (dots[i] as HTMLElement).className.replace(" active", "");
    }
  (slides[slideIndex-1] as HTMLElement).style.display = "block";
  (dots[slideIndex-1] as HTMLElement).className += " active";
}