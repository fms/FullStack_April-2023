// 'index.html' elements
const form1div = document.getElementById('newWatchListDiv') as HTMLElement;
const form2div = document.getElementById('watchListDiv') as HTMLElement;
const select = document.getElementById('selectList') as HTMLSelectElementWithId;
const form1 = document.getElementById('start-form') as HTMLFormElement;
const form2 = document.getElementById('add-movies') as HTMLFormElement;
const newListButton = document.getElementById('addNewList') as HTMLButtonElement;
const submitMovieButton = document.getElementById('submitMovie') as HTMLButtonElement;

//'lists.html' elements
const movieEntries = document.querySelector('.secPage-watchLists') as HTMLElement;
const headerDiv = document.querySelector('.header') as HTMLElement;
const secPageH1 = document.getElementById('lists-header') as HTMLElement;
const seen = document.getElementById('seen') as HTMLInputElement;
const back = document.querySelector('.go-back') as HTMLElement;
const addList = document.getElementById('home') as HTMLButtonElement;
const addMovies = document.getElementById('home2') as HTMLButtonElement;

// Event Listener to load page accordingly 
window.addEventListener('load', loadPage);
// Event Listeners for 'index.html'
form1?.addEventListener('submit', createList);
newListButton?.addEventListener('click', () => {
    toggleHide();
    form1.reset();
});
form2?.addEventListener('submit', SubmitNewMovie);
// Event Listener for 'lists.html'
addMovies?.addEventListener('click', () => localStorage.setItem('clicked', 'add movies'));
