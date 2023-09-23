"use strict";
const form1div = document.getElementById('newWatchListDiv');
const form2div = document.getElementById('watchListDiv');
const select = document.getElementById('selectList');
const form1 = document.getElementById('start-form');
const form2 = document.getElementById('add-savedMovies');
const newListButton = document.getElementById('addNewList');
let fieldName = "movies";
let movies = loadMovies();
form1.addEventListener('submit', createList);
function createList(ev) {
    ev.preventDefault();
    const name = document.getElementById('listNames').value;
    const op = document.createElement('option');
    op.value = name;
    op.textContent = name;
    select.add(op);
    form1div.classList.toggle('hide');
    form2div.classList.toggle('hide');
}
newListButton.addEventListener('click', () => {
    form1div.classList.toggle('hide');
    form2div.classList.toggle('hide');
    form1.reset();
});
function formSubmit(ev) {
    ev.preventDefault();
    const elements = form2.elements;
    const watchList = new WatchList(elements.listName.value);
    const newMovie = new Movie(elements.movieName.value, elements.year.valueAsNumber);
    let newWatchListMovie = new WatchListMovie(watchList, newMovie);
    movies.push(newWatchListMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
}
function saveMovies() {
    const moviesStringified = JSON.stringify(movies);
    localStorage.setItem(fieldName, moviesStringified);
}
function loadMovies() {
    const savedMovies = localStorage.getItem(fieldName);
    if (savedMovies) {
        return JSON.parse(savedMovies);
    }
    return new Array();
}
class WatchList {
    constructor(listName) {
        this.listName = listName;
    }
}
class Movie {
    constructor(movieName, year, seen = false) {
        this.movieName = movieName;
        this.year = year;
        this.seen = seen;
    }
}
class WatchListMovie {
    constructor(watchList, movie) {
        this.watchList = watchList;
        this.movie = movie;
    }
}
class WatchListMovieRelationship {
    constructor() {
        this.relation = new Array();
    }
}
