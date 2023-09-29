// 'index.html' elements
const form1div = document.getElementById('newWatchListDiv') as HTMLElement;
const form2div = document.getElementById('watchListDiv') as HTMLElement;
const select = document.getElementById('selectList') as HTMLSelectElementWithId;
const form1 = document.getElementById('start-form') as HTMLFormElement;
const form2 = document.getElementById('add-movies') as HTMLFormElement;
const newListButton = document.getElementById('addNewList') as HTMLButtonElement;
const submitMovieButton = document.getElementById('submitMovie') as HTMLButtonElement;
// const myListsButton = document.getElementById('lists') as HTMLButtonElement;

let moviesFieldName = "movies";
let optionsFieldName = "savedOptions";
let listsFieldName = "listNamesSet";
let wlmFieldName = "MoviesForList"
let movies = loadMovies();
let listNamesSet = loadListNames();
let movieNamesSet = loadMoviesName();

// functions for 'index.html'
form1?.addEventListener('submit', createList);

// interface to help adding options to select element
interface HTMLSelectElementWithId extends HTMLSelectElement {
    add(option: HTMLOptionElement): void;
}

window.addEventListener('load', () => {
    if (document.location.pathname === "/03-typescript/26%20-%20Personal%20Project/yuval/CRUD%20application%20-%20Easy%20and%20Medium/index.html") {
        const checkButton = localStorage.getItem('clicked');
        checkButton && toggleHide();
        const savedOptions = localStorage.getItem(optionsFieldName);
        savedOptions && (select.innerHTML = savedOptions);
        loadListNames();
        localStorage.removeItem('clicked');
    }
});

function createList(ev: Event) {
    ev.preventDefault();

    try {
        const name = (document.getElementById('listNames') as HTMLInputElement).value;

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


newListButton?.addEventListener('click', () => {
    toggleHide();
    form1.reset();
});

form2?.addEventListener('submit', (event) => {
    event.preventDefault();
    const watchList = new WatchList(
        (form2.querySelector('[name="listName"]') as HTMLInputElement).value
    );
    const newMovie = new Movie(
        (form2.querySelector('[name="movieName"]') as HTMLInputElement).value,
        (form2.querySelector('[name="year"]') as HTMLInputElement).valueAsNumber,
        false
    );
    addMovieToList(watchList, newMovie);
    localStorage.setItem(moviesFieldName, JSON.stringify(movies));
    form2.reset();
});

function getUniqueIdentifier(watchList: WatchList, movie: Movie): string {
    return `${watchList.listName}-${movie.movieName}-${movie.year}`;
}

function addMovieToList(watchList: WatchList, movie: Movie) {
    const identifier = getUniqueIdentifier(watchList, movie);
    if (!movieNamesSet.has(identifier)) {
        movieNamesSet.add(identifier);
        movies.push(new WatchListMovie(watchList, movie));
        localStorage.setItem(wlmFieldName, JSON.stringify(Array.from(movieNamesSet)));
    }
    else {
        alert(`"${movie.movieName}" is already in "${watchList.listName}"`);
    }
}

function loadMoviesName(): Set<string> {
    const savedMovieNames = localStorage.getItem(wlmFieldName);
    if (savedMovieNames) {
        return new Set(JSON.parse(savedMovieNames));
    }
    return new Set<string>;
}

function loadMovies(): WatchListMovie[] {
    const savedMovies = localStorage.getItem(moviesFieldName);
    if (savedMovies) {
        return JSON.parse(savedMovies);
    }

    return new Array<WatchListMovie>();
}

function loadListNames(): Set<string> {
    const savedListNames = localStorage.getItem(listsFieldName);
    if (savedListNames) {
        return new Set(JSON.parse(savedListNames));
    }
    return new Set<string>;
}

//'lists.html' elements
const movieEntries = document.querySelector('.secPage-watchLists');
const headerDiv = document.querySelector('.header') as HTMLElement;
const secPageH1 = document.getElementById('lists-header');
const seen = document.getElementById('seen') as HTMLInputElement;
const addList = document.getElementById('home') as HTMLButtonElement;
const addMovies = document.getElementById('home2') as HTMLButtonElement;

// functions for 'lists.html'
addMovies?.addEventListener('click', () => localStorage.setItem('clicked', 'add movies'));

function getMoviesWithSameListName(watchListMovies: WatchListMovie[], listName: string): WatchListMovie[] {
    return watchListMovies.filter((watchListMovie) => watchListMovie.watchList.listName === listName);
}
const uniqueListNames = Array.from(new Set(movies.map(wlm => wlm.watchList.listName)));

window.addEventListener('load', () => {
    if (document.location.pathname === '/03-typescript/26%20-%20Personal%20Project/yuval/CRUD%20application%20-%20Easy%20and%20Medium/lists.html') {
        if (movies.length !== 0) {
            const uniqueListNames = Array.from(new Set(movies.map(wlm => wlm.watchList.listName)));
            const listElementDiv = document.createElement('div');
            listElementDiv.classList.add('secPage-watchLists__listNames-list');
            movieEntries?.appendChild(listElementDiv);
            const tableDiv = document.createElement('div');
            tableDiv.classList.add('secPage-watchLists__table-div');
            for (const listName of uniqueListNames) {
                const listElement = document.createElement('div');
                listElement.textContent = listName;
                listElement.style.cursor = 'pointer';

                listElement.addEventListener('click', () => {
                    movieEntries?.appendChild(tableDiv);
                    const moviesWithSameListName = getMoviesWithSameListName(movies, listName);
                    showList(listName, moviesWithSameListName, tableDiv);
                });

                listElementDiv?.appendChild(listElement);
            }
        }
        else {
            headerDiv.innerHTML = `<h1>No Watch Lists!</h1>`;
            loadListNames();
            document.body.style.backgroundImage = 'url("images/homer.gif")';
            document.body.style.backgroundSize = '100%';
            if (listNamesSet.size == 0) {
                (addList.firstChild as HTMLButtonElement).style.width = '120px';
                (addList.firstChild as HTMLButtonElement).style.height = '30px';
                (addList.firstChild as HTMLButtonElement).style.fontSize = '15px';
                addMovies.classList.toggle('hide');
            }
            else {
                let listNamesInHeader = localStorage.getItem(listsFieldName)!; // Can't be null
                listNamesInHeader = JSON.parse(listNamesInHeader).join(', ');
                headerDiv.innerHTML = `<h1>No Watch Lists!</h1><h2>Add to existing lists ${listNamesInHeader}</h2>`;
            }
        }
    }
});

function showList(listName: string, moviesWithSameListName: WatchListMovie[], element: Element) {
    element?.replaceChildren();
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
            const checkbox = ev.target as HTMLInputElement;
            movies[outerCounter].movie.seen = checkbox.checked;
            cell1.classList.toggle('line-through');
            cell2.classList.toggle('line-through');
            localStorage.setItem(moviesFieldName, JSON.stringify(movies));
        });
        cell3.appendChild(checkboxSeen);
        if (movies[outerCounter].movie.seen) {
            cell1.classList.toggle('line-through');
            cell2.classList.toggle('line-through');
            checkboxSeen.checked = true;
        }
        const letterboxdLink = document.createElement('a');
        let linkInfo = replaceSpacesAndSymbols(cell1.textContent.toLowerCase());
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
    
    element?.appendChild(table);
}

function replaceSpacesAndSymbols(inputString: string): string {
    return inputString.replace(/[^a-zA-Z0-9-]+/g, '-');
}

function getId(element: HTMLInputElement): number {
    return parseInt(element.dataset['id'] ?? "0", 10);
}

function toggleHide() {
    form1div.classList.toggle('hide');
    form2div.classList.toggle('hide');
}



//Left to do:
// - mvc






