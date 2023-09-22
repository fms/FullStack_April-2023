"use strict";
const form1div = document.getElementById('newWatchListDiv');
const form2div = document.getElementById('watchListDiv');
const select = document.getElementById('selectList');
const form1 = document.getElementById('start-form');
const form2 = document.getElementById('add-movies');
class WatchList {
    constructor(listName) {
        this.listName = listName;
    }
}
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
form1.addEventListener('submit', createList);
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
