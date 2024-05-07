import Breed from "../types/breed";
import basenji from '../images/basenji.jpg';
import beagle from '../images/beagle.jpg';
import boxer from '../images/boxer.jpg';
import bichon from '../images/frise-bichon.jpg';
import husky from '../images/husky.jpg';
import mix from '../images/mix.jpg';
import pitbull from '../images/pitbull.jpg';
import toy from '../images/toy-poodle.jpg';

export const breeds: Breed[] = [
    {
        id: 1,
        name: "Basenji",
        imgUrl: basenji
    },

    {
        id: 2,
        name: "Beagle",
        imgUrl: beagle
    },

    {
        id: 3,
        name: "Boxer",
        imgUrl: boxer
    },

    {
        id: 4,
        name: "Bichon Frise",
        imgUrl: bichon
    },

    {
        id: 5,
        name: "Husky",
        imgUrl: husky
    },

    {
        id: 6,
        name: "Mix",
        imgUrl: mix
    },

    {
        id: 7,
        name: "Pitbull",
        imgUrl: pitbull
    },

    {
        id: 8,
        name: "Poodle Toy",
        imgUrl: toy
    },
];