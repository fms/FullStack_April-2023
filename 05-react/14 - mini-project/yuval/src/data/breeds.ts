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
        name: "basenji",
        imgUrl: basenji
    },

    {
        id: 2,
        name: "beagle",
        imgUrl: beagle
    },

    {
        id: 3,
        name: "boxer",
        imgUrl: boxer
    },

    {
        id: 4,
        name: "frise-bichon",
        imgUrl: bichon
    },

    {
        id: 5,
        name: "husky",
        imgUrl: husky
    },

    {
        id: 6,
        name: "mix",
        imgUrl: mix
    },

    {
        id: 7,
        name: "pitbull",
        imgUrl: pitbull
    },

    {
        id: 8,
        name: "toy-poodle",
        imgUrl: toy
    },
];