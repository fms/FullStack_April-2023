"use strict";
// 'index.html' elements
const form1div = document.getElementById('newWatchListDiv');
const form2div = document.getElementById('watchListDiv');
const select = document.getElementById('selectList');
const form1 = document.getElementById('start-form');
const form2 = document.getElementById('add-movies');
const newListButton = document.getElementById('addNewList');
const submitMovieButton = document.getElementById('submitMovie');
//'lists.html' elements
const movieEntries = document.querySelector('.secPage-watchLists');
const headerDiv = document.querySelector('.header');
const secPageH1 = document.getElementById('lists-header');
const seen = document.getElementById('seen');
const back = document.querySelector('.go-back');
const addList = document.getElementById('home');
const addMovies = document.getElementById('home2');
// Event Listener to load page accordingly 
window.addEventListener('load', loadPage);
// Event Listeners for 'index.html'
form1 === null || form1 === void 0 ? void 0 : form1.addEventListener('submit', createList);
newListButton === null || newListButton === void 0 ? void 0 : newListButton.addEventListener('click', () => {
    toggleHide();
    form1.reset();
});
form2 === null || form2 === void 0 ? void 0 : form2.addEventListener('submit', SubmitNewMovie);
// Event Listener for 'lists.html'
addMovies === null || addMovies === void 0 ? void 0 : addMovies.addEventListener('click', () => localStorage.setItem('clicked', 'add movies'));
