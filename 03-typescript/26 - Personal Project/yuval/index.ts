// 'index.html' elements
const form1div = document.getElementById('newWatchListDiv') as HTMLElement;
const form2div = document.getElementById('watchListDiv') as HTMLElement;
const select = document.getElementById('selectList') as HTMLSelectElementWithId;
const form1 = document.getElementById('start-form') as HTMLFormElement;
const form2 = document.getElementById('add-movies') as HTMLFormElement;
const newListButton = document.getElementById('addNewList') as HTMLButtonElement;
const submitMovieButton = document.getElementById('submitMovie') as HTMLButtonElement;
const myListsButton = document.getElementById('lists') as HTMLButtonElement;

let fieldName = "movies";
let movies = loadMovies();

// functions for 'index.html'
form1?.addEventListener('submit', createList);

// interface to help adding options to select element
interface HTMLSelectElementWithId extends HTMLSelectElement {
    add(option: HTMLOptionElement): void;
}

function createList(ev: Event) {
    ev.preventDefault();
    const name = (document.getElementById('listNames') as HTMLInputElement).value;
    const op = document.createElement('option');
    op.value = name;
    op.textContent = name;
    select.add(op);
    form1div.classList.toggle('hide');
    form2div.classList.toggle('hide');
}

newListButton?.addEventListener('click', () => {
    form1div.classList.toggle('hide');
    form2div.classList.toggle('hide');
    form1.reset();
});

form2?.addEventListener('submit', (event) => {
    event.preventDefault();
    const watchList = new WatchList(
        (form2.querySelector('[name="listName"]') as HTMLInputElement).value
    );
    const newMovie = new Movie(
        (form2.querySelector('[name="movieName"]') as HTMLInputElement).value,
        (form2.querySelector('[name="year"]') as HTMLInputElement).valueAsNumber
    );
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

function loadMovies(): WatchListMovie[] {
    const savedMovies = localStorage.getItem(fieldName);
    if (savedMovies) {
        return JSON.parse(savedMovies);
    }

    return new Array<WatchListMovie>();
}

// functions for 'lists.html'
const movieEntries = document.querySelector('.secPage-watchLists');

function getMoviesWithSameListName(watchListMovies: WatchListMovie[], listName: string): WatchListMovie[] {
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

function showList(listName: string, moviesWithSameListName: WatchListMovie[]) {
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
            cell3.innerHTML = `<input id="seen" name="seen" type="checkbox">`
        }
    
        movieEntries?.appendChild(table);
    
}







