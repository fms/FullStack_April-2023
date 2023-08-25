"use strict";
let box = document.querySelector('.main__box');
box.addEventListener(`mouseover`, (event) => box.style.backgroundColor = `red`);
box.addEventListener(`mouseout`, (event) => box.style.backgroundColor = `initial`);
let img1 = 'https://shop-mobile.rami-levy.co.il/wp-content/uploads/2022/09/%D7%9C%D7%91%D7%9F-2.png';
let img2 = 'https://cdn.awsli.com.br/600x700/1861/1861669/produto/190594792/apple-iphone-14-128-gb-roxo-3-agvoha.jpg';
let img3 = 'https://shop-mobile.rami-levy.co.il/wp-content/uploads/2022/09/%D7%AA%D7%9B%D7%9C%D7%AA.png';
let images = [img1, img2, img3];
let imagenum = 0;
let gallery = document.querySelector('.main__gallery');
let back = document.querySelector('.back');
let next = document.querySelector('.next');
gallery.style.backgroundSize = "310px 350px";
gallery.style.backgroundImage = `url(${images[0]})`;
next.addEventListener('click', (event) => {
    if (imagenum < images.length - 1) {
        imagenum++;
    }
    else {
        imagenum = 0;
    }
    gallery.style.backgroundImage = `url(${images[imagenum]})`;
});
back.addEventListener('click', (event) => {
    if (imagenum > 0) {
        imagenum--;
    }
    else {
        imagenum = images.length - 1;
    }
    gallery.style.backgroundImage = `url(${images[imagenum]})`;
});
let pass1 = document.querySelector('.pass1');
let pass2 = document.querySelector('.pass2');
let check = document.querySelector('.main__chek');
let result = document.querySelector('.result');
check.addEventListener('click', () => {
    const pass1_value = pass1.value;
    const pass2_value = pass2.value;
    if (pass1_value == pass2_value) {
        result.style.color = `green`;
        result.innerHTML = 'good';
    }
    else {
        result.style.color = `red`;
        result.innerHTML = 'not good';
    }
});
