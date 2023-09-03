class Book {
    title: string;
    author: string;
    genre: string;
    date: string;
    // imgFile?: File;
    imgUrl?: string;
    constructor(title: string, author: string, genre: string, date: string, imgFile?: File, imgUrl?: string) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.date = date;
        // this.imgFile = imgFile;
        this.imgUrl = imgUrl;
    }
}

let save = document.querySelector('.save') as HTMLButtonElement;

save.addEventListener('click', () => {
    addBook();
    // counter();
});

let Delete = document.querySelector('#delete') as HTMLElement;
Delete.addEventListener('click', deleteBook)

let Books: Book[] = [];

let MyLibrary = document.querySelector('#MyLibrary') as HTMLTableElement;


function addBook() {
    let title = document.querySelector('.title') as HTMLInputElement;
    let titleVal = title?.value;
    let author = document.querySelector('.author') as HTMLInputElement;
    let authorVal = author?.value;
    let genre = document.querySelector('.genre') as HTMLInputElement;
    let genreVal = genre?.value;
    let date = document.querySelector('.date') as HTMLInputElement;
    let dateVal = date?.value;
    // let imgFile = document.querySelector('.imgFile') as HTMLInputElement;
    // let imgFileVal = imgFile?.files;
    let imgUrl = document.querySelector('.imgUrl') as HTMLInputElement;
    let imgUrlVal = imgUrl?.value;

    let img = document.createElement('img') as HTMLImageElement;
    img.src = `${imgUrlVal}`;
    img.style.height = '100px';
    img.style.width = '80px';

    let checkbox = document.createElement('input') as HTMLInputElement;
    checkbox.setAttribute('type', 'checkbox');

    let newBook: Book = {
        title: titleVal,
        author: authorVal,
        genre: genreVal,
        date: dateVal,
        // imgFile: imgFileVal,
        imgUrl: imgUrlVal,
    };

    Books.push(newBook)

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
        }
    }

};

function deleteBook() {
 
}





