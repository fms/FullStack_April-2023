"use strict";
//Model
class WatchList {
    constructor(listName) {
        this.listName = listName;
    }
}
class Movie {
    constructor(movieName, year, seen) {
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
