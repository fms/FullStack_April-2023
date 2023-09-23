interface HTMLSelectElementWithId extends HTMLSelectElement {
    add(option: HTMLOptionElement, before?: HTMLElement | null): void;
}

interface FormElements extends HTMLFormControlsCollection {
    listName: HTMLInputElement;
    movieName: HTMLInputElement;
    year: HTMLInputElement;
    add: HTMLInputElement;
    update: HTMLInputElement;
    cancel: HTMLInputElement;
}

const form1div = document.getElementById('newWatchListDiv') as HTMLElement;
const form2div = document.getElementById('watchListDiv') as HTMLElement;
const select = document.getElementById('selectList') as HTMLSelectElementWithId;
const form1 = document.getElementById('start-form') as HTMLFormElement;
const form2 = document.getElementById('add-movies') as HTMLFormElement;
const newListButton = document.getElementById('addNewList') as HTMLButtonElement;
const submitMovieButton = document.getElementById('submitMovie') as HTMLButtonElement;

let fieldName = "movies";
let movies = loadMovies();

form1.addEventListener('submit', createList);

function createList(ev: Event){
    ev.preventDefault();
    const name = (document.getElementById('listNames') as HTMLInputElement).value;
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

// submitMovieButton.addEventListener('click', () => {
//     const elements = form2?.elements as FormElements;
//     const watchList = new WatchList(elements.listName.value);
//     const newMovie = new Movie(elements.movieName.value, elements.year.valueAsNumber);
//     let newWatchListMovie = new WatchListMovie(watchList, newMovie);
//     movies.push(newWatchListMovie);
//     localStorage.setItem('movies', JSON.stringify(movies));
//     form2.reset();
// });

form2.addEventListener('submit', (event) => {
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



function saveMovies() {
    const moviesStringified = JSON.stringify(movies);
    localStorage.setItem(fieldName, moviesStringified);
}

function loadMovies(): WatchListMovie[] {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
        return JSON.parse(savedMovies);
    }

    return new Array<WatchListMovie>();
}

class WatchList {
    constructor(public listName: string){}

}
class Movie {
    constructor(public movieName: string, public year: number, public seen: boolean = false){}
}

class WatchListMovie {
    constructor(public watchList: WatchList, public movie: Movie){}
}

class WatchListMovieRelationship {
    private relation = new Array<WatchListMovie>();
}



