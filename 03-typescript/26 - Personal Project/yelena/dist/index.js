"use strict";
console.log('index.ts');
const schoolClasses = [
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
    {
        title: "Karate",
        description: "this is a karate class",
        time: "May 2023",
        teacher: "Yelena",
        image: "./dist/images/karate_small.png",
    },
];
const classesContainer = document.querySelector('#schooldClassesContainer');
schoolClasses.forEach((schoolClass) => {
    classesContainer.appendChild(`<div>${schoolClass.title}</div>`);
});
