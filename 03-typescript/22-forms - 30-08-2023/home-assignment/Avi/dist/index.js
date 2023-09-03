"use strict";
class Book {
    constructor(title, author, genre, date, imgFile, imgUrl) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.date = date;
        // this.imgFile = imgFile;
        this.imgUrl = imgUrl;
    }
}
let save = document.querySelector('.save');
save.addEventListener('click', () => {
    addBook();
    // counter();
});
let Delete = document.querySelector('#delete');
Delete.addEventListener('click', deleteBook);
let Books = [];
let MyLibrary = document.querySelector('#MyLibrary');
function addBook() {
    let title = document.querySelector('.title');
    let titleVal = title === null || title === void 0 ? void 0 : title.value;
    let author = document.querySelector('.author');
    let authorVal = author === null || author === void 0 ? void 0 : author.value;
    let genre = document.querySelector('.genre');
    let genreVal = genre === null || genre === void 0 ? void 0 : genre.value;
    let date = document.querySelector('.date');
    let dateVal = date === null || date === void 0 ? void 0 : date.value;
    // let imgFile = document.querySelector('.imgFile') as HTMLInputElement;
    // let imgFileVal = imgFile?.files;
    let imgUrl = document.querySelector('.imgUrl');
    let imgUrlVal = imgUrl === null || imgUrl === void 0 ? void 0 : imgUrl.value;
    let img = document.createElement('img');
    img.src = `${imgUrlVal}`;
    img.style.height = '100px';
    img.style.width = '80px';
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    let newBook = {
        title: titleVal,
        author: authorVal,
        genre: genreVal,
        date: dateVal,
        // imgFile: imgFileVal,
        imgUrl: imgUrlVal,
    };
    Books.push(newBook);
    title.value = '',
        author.value = '',
        genre.value = '',
        date.value = '',
        // imgFile.value = '',
        imgUrl.value = '';
    if (titleVal != '') {
        let newrow = MyLibrary.insertRow(-1);
        let col1 = newrow.insertCell(0);
        let col2 = newrow.insertCell(0);
        let col3 = newrow.insertCell(0);
        let col4 = newrow.insertCell(0);
        let col5 = newrow.insertCell(0);
        let col6 = newrow.insertCell(0);
        col1.appendChild(checkbox);
        col3.innerText = `${dateVal}`;
        col4.innerText = `${genreVal}`;
        col5.innerText = `${authorVal}`;
        col6.innerText = `${titleVal}`;
        if (imgUrlVal != '') {
            col2.appendChild(img);
        }
    }
    for (let i = 0; i < MyLibrary.rows.length; i++) {
        MyLibrary.rows[i].onclick = function () {
            console.log(i);
            // MyLibrary.deleteRow(i);
        };
    }
}
;
function deleteBook() {
}
