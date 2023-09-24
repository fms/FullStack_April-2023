"use strict";
// 'index.html' elements
const form1div = document.getElementById('newWatchListDiv');
const form2div = document.getElementById('watchListDiv');
const select = document.getElementById('selectList');
const form1 = document.getElementById('start-form');
const form2 = document.getElementById('add-movies');
const newListButton = document.getElementById('addNewList');
const submitMovieButton = document.getElementById('submitMovie');
const myListsButton = document.getElementById('lists');
let fieldName = "movies";
let movies = loadMovies();
// functions for 'index.html'
form1 === null || form1 === void 0 ? void 0 : form1.addEventListener('submit', createList);
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
newListButton === null || newListButton === void 0 ? void 0 : newListButton.addEventListener('click', () => {
    form1div.classList.toggle('hide');
    form2div.classList.toggle('hide');
    form1.reset();
});
form2 === null || form2 === void 0 ? void 0 : form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const watchList = new WatchList(form2.querySelector('[name="listName"]').value);
    const newMovie = new Movie(form2.querySelector('[name="movieName"]').value, form2.querySelector('[name="year"]').valueAsNumber);
    const newWatchListMovie = new WatchListMovie(watchList, newMovie);
    movies.push(newWatchListMovie);
    // Save data to localStorage
    localStorage.setItem(fieldName, JSON.stringify(movies));
    form2.reset();
});
// myListsButton.addEventListener('click', showLists);
// function saveMovies() {
//     const moviesStringified = JSON.stringify(movies);
//     localStorage.setItem(fieldName, moviesStringified);
// }
function loadMovies() {
    const savedMovies = localStorage.getItem(fieldName);
    if (savedMovies) {
        return JSON.parse(savedMovies);
    }
    return new Array();
}
// functions for 'lists.html'
const movieEntries = document.querySelector('.secPage-watchLists');
function getMoviesWithSameListName(watchListMovies, listName) {
    return watchListMovies.filter((watchListMovie) => watchListMovie.watchList.listName === listName);
}
const uniqueListNames = Array.from(new Set(movies.map(wlm => wlm.watchList.listName)));
// need to change that to form onsubmit
window.addEventListener('load', () => {
    if (document.location.pathname === '/03-typescript/26%20-%20Personal%20Project/yuval/lists.html') {
        const uniqueListNames = Array.from(new Set(movies.map(wlm => wlm.watchList.listName)));
        // Prompt the user to choose a list
        const chosenList = prompt(`Choose a list from: ${uniqueListNames.join(', ')}`);
        if (chosenList && uniqueListNames.indexOf(chosenList) !== -1) {
            const moviesWithSameListName = getMoviesWithSameListName(movies, chosenList);
            showList(chosenList, moviesWithSameListName);
        }
    }
});
function showList(listName, moviesWithSameListName) {
    const table = document.createElement('table');
    const headerRowList = table.insertRow();
    const listCell = headerRowList.insertCell();
    listCell.colSpan = 3;
    listCell.style.backgroundColor = "#333";
    listCell.style.color = "#fff";
    listCell.textContent = listName;
    const headerRowMovie = table.insertRow();
    const headerCell1 = headerRowMovie.insertCell();
    const headerCell2 = headerRowMovie.insertCell();
    const headerCell3 = headerRowMovie.insertCell();
    headerCell1.textContent = 'Movie';
    headerCell2.textContent = 'Year';
    headerCell3.textContent = 'Seen?';
    for (const movie of moviesWithSameListName) {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        cell1.textContent = movie.movie.movieName;
        cell2.textContent = movie.movie.year.toString();
        cell3.innerHTML = `<input id="seen" name="seen" type="checkbox">`;
    }
    movieEntries === null || movieEntries === void 0 ? void 0 : movieEntries.appendChild(table);
}
