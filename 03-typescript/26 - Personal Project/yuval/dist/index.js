"use strict";
const select = document.getElementById('selectList');
class WatchList {
    constructor(listName) {
        this.listName = listName;
    }
    createList(ev) {
        const name = (ev.target).value;
        const op = document.createElement('option');
        op.value = name;
        op.textContent = name;
        select.add(op);
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
