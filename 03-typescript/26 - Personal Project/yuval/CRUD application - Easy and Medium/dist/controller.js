"use strict";
let moviesFieldName = "movies";
let optionsFieldName = "savedOptions";
let listsFieldName = "listNamesSet";
let wlmFieldName = "MoviesForList";
let movies = loadMovies();
let listNamesSet = loadListNames();
let movieNamesSet = loadMoviesName();
const uniqueListNames = Array.from(new Set(movies.map(wlm => wlm.watchList.listName))); // Array of all list names
// The background image and the elements on both pages can change based on the data in localStorage
function loadPage() {
    //index.html
    if (document.location.pathname === "/03-typescript/26%20-%20Personal%20Project/yuval/CRUD%20application%20-%20Easy%20and%20Medium/index.html") {
        const checkButton = localStorage.getItem('clicked');
        checkButton && toggleHide(); // checkButton won't be null only if addMovies was pressed
        const savedOptions = localStorage.getItem(optionsFieldName);
        savedOptions && (select.innerHTML = savedOptions);
        loadListNames();
        localStorage.removeItem('clicked');
    }
    //lists.html
    else if (document.location.pathname === '/03-typescript/26%20-%20Personal%20Project/yuval/CRUD%20application%20-%20Easy%20and%20Medium/lists.html') {
        if (movies.length !== 0) {
            const listElementDiv = document.createElement('div');
            listElementDiv.classList.add('secPage-watchLists__listNames-list');
            movieEntries === null || movieEntries === void 0 ? void 0 : movieEntries.appendChild(listElementDiv);
            const tableDiv = document.createElement('div');
            tableDiv.classList.add('secPage-watchLists__table-div');
            for (const listName of uniqueListNames) { // Creating an element for each watch list
                const listElement = document.createElement('div');
                listElement.textContent = listName;
                listElement.style.cursor = 'pointer';
                listElement.addEventListener('click', () => {
                    movieEntries === null || movieEntries === void 0 ? void 0 : movieEntries.appendChild(tableDiv);
                    const moviesWithSameListName = getMoviesWithSameListName(movies, listName);
                    showList(listName, moviesWithSameListName, tableDiv);
                });
                listElementDiv === null || listElementDiv === void 0 ? void 0 : listElementDiv.appendChild(listElement);
            }
        }
        else {
            headerDiv.innerHTML = `<h1>No Watch Lists!</h1>`;
            loadListNames();
            document.body.style.backgroundImage = 'url("images/homer.gif")';
            document.body.style.backgroundSize = '100%';
            if (listNamesSet.size == 0) {
                addList.firstChild.style.width = '120px';
                addList.firstChild.style.height = '30px';
                addList.firstChild.style.fontSize = '15px';
                back.classList.toggle('go-back');
                addMovies.classList.toggle('hide');
            }
            else {
                let listNamesInHeader = localStorage.getItem(listsFieldName); // Can't be null
                listNamesInHeader = JSON.parse(listNamesInHeader).join(', ');
                headerDiv.innerHTML = `<h1>No Watch Lists!</h1><h3>Add to existing lists:</h3><p>${listNamesInHeader}</p>`;
            }
        }
    }
}
function createList(ev) {
    ev.preventDefault();
    try {
        const name = document.getElementById('listNames').value;
        if (listNamesSet.has(name)) {
            throw new Error('List Already exists');
        }
        listNamesSet.add(name);
        const op = document.createElement('option');
        op.classList.add('black');
        op.value = name;
        op.textContent = name;
        select.add(op);
        localStorage.setItem(optionsFieldName, select.innerHTML);
        localStorage.setItem(listsFieldName, JSON.stringify(Array.from(listNamesSet)));
        toggleHide();
    }
    catch (error) {
        error instanceof Error && alert(error.message);
    }
}
function SubmitNewMovie(ev) {
    ev.preventDefault();
    const watchList = new WatchList(form2.querySelector('[name="listName"]').value);
    const newMovie = new Movie(form2.querySelector('[name="movieName"]').value, form2.querySelector('[name="year"]').valueAsNumber, false);
    addMovieToList(watchList, newMovie);
    localStorage.setItem(moviesFieldName, JSON.stringify(movies));
    form2.reset();
}
// Functions to help prevent entering the same movie twice in the same list
function getUniqueIdentifier(watchList, movie) {
    return `${watchList.listName}-${movie.movieName}-${movie.year}`;
}
function addMovieToList(watchList, movie) {
    try {
        const identifier = getUniqueIdentifier(watchList, movie);
        if (movieNamesSet.has(identifier)) {
            throw new Error(`"${movie.movieName}" is already in "${watchList.listName}"`);
        }
        movieNamesSet.add(identifier);
        movies.push(new WatchListMovie(watchList, movie));
        localStorage.setItem(wlmFieldName, JSON.stringify(Array.from(movieNamesSet)));
    }
    catch (error) {
        error instanceof Error && alert(error.message);
    }
}
// Create table element for each list
function showList(listName, moviesWithSameListName, element) {
    element === null || element === void 0 ? void 0 : element.replaceChildren();
    const table = document.createElement('table');
    const headerRowList = table.insertRow();
    const listCell = headerRowList.insertCell();
    listCell.colSpan = 5;
    listCell.style.backgroundColor = "#333";
    listCell.style.color = "#fff";
    listCell.textContent = listName;
    const headerRowMovie = table.insertRow();
    const headerCell1 = headerRowMovie.insertCell();
    const headerCell2 = headerRowMovie.insertCell();
    const headerCell3 = headerRowMovie.insertCell();
    const headerCell4 = headerRowMovie.insertCell();
    const headerCell5 = headerRowMovie.insertCell();
    headerCell1.textContent = 'Movie';
    headerCell2.textContent = 'Year';
    headerCell3.textContent = 'Seen?';
    headerCell4.textContent = 'Film info';
    headerCell5.textContent = 'Trailer';
    headerCell4.classList.add('film-info-cell');
    headerCell5.classList.add('trailer-cell');
    let counter = 0;
    for (const movie of moviesWithSameListName) {
        let outerCounter = movies.indexOf(moviesWithSameListName[counter]);
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();
        const cell5 = row.insertCell();
        cell4.classList.add('film-info-cell');
        cell5.classList.add('trailer-cell');
        cell1.textContent = movie.movie.movieName;
        cell2.textContent = movie.movie.year.toString();
        const checkboxSeen = document.createElement('input');
        checkboxSeen.type = 'checkbox';
        checkboxSeen.dataset['id'] = `${outerCounter}`;
        checkboxSeen.addEventListener('click', (ev) => {
            const checkbox = ev.target;
            movies[outerCounter].movie.seen = checkbox.checked;
            cell1.classList.toggle('line-through');
            cell2.classList.toggle('line-through');
            localStorage.setItem(moviesFieldName, JSON.stringify(movies));
        });
        cell3.appendChild(checkboxSeen);
        if (movies[outerCounter].movie.seen) { // Will keep it crossed even after refreshing the page
            cell1.classList.toggle('line-through');
            cell2.classList.toggle('line-through');
            checkboxSeen.checked = true;
        }
        const letterboxdLink = document.createElement('a');
        const linkInfo = cell1.textContent.toLowerCase().replace(/[^a-zA-Z0-9-]+/g, '-'); // Replace spaces and symbols with '-'
        letterboxdLink.href = `https://letterboxd.com/film/${linkInfo}/`;
        letterboxdLink.innerHTML = '<img id=letterboxd src="images/letterboxd.png">';
        letterboxdLink.target = '_blank';
        cell4.appendChild(letterboxdLink);
        cell4.classList.add('cell');
        const youtubeLink = document.createElement('a');
        youtubeLink.href = `https://www.youtube.com/results?search_query=${linkInfo}+${cell2.textContent}+trailer`;
        youtubeLink.innerHTML = '<img id=youtube src="images/youtube.png">';
        youtubeLink.target = "_blank";
        cell5.appendChild(youtubeLink);
        cell5.classList.add('cell');
        counter++;
    }
    element === null || element === void 0 ? void 0 : element.appendChild(table);
}
// Get all the movies of a certain watch list in an array
function getMoviesWithSameListName(watchListMovies, listName) {
    return watchListMovies.filter((watchListMovie) => watchListMovie.watchList.listName === listName);
}
function loadMoviesName() {
    const savedMovieNames = localStorage.getItem(wlmFieldName);
    if (savedMovieNames) {
        return new Set(JSON.parse(savedMovieNames));
    }
    return new Set;
}
function loadMovies() {
    const savedMovies = localStorage.getItem(moviesFieldName);
    if (savedMovies) {
        return JSON.parse(savedMovies);
    }
    return new Array();
}
function loadListNames() {
    const savedListNames = localStorage.getItem(listsFieldName);
    if (savedListNames) {
        return new Set(JSON.parse(savedListNames));
    }
    return new Set;
}
function toggleHide() {
    form1div.classList.toggle('hide');
    form2div.classList.toggle('hide');
}
