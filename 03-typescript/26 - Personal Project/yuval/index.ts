interface HTMLSelectElementWithId extends HTMLSelectElement {
    add(option: HTMLOptionElement, before?: HTMLElement | null): void;
}
const form1div = document.getElementById('newWatchListDiv') as HTMLElement;
const form2div = document.getElementById('watchListDiv') as HTMLElement;
const select = document.getElementById('selectList') as HTMLSelectElementWithId;
const form1 = document.getElementById('start-form') as HTMLFormElement;
const form2 = document.getElementById('add-movies') as HTMLFormElement;

class WatchList {
    constructor(public listName: string){}

}

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

form1.addEventListener('submit', createList);

class Movie {
    constructor(public movieName: string, public year: number, public seen: boolean = false){}
}

class WatchListMovie {
    constructor(public watchList: WatchList, public movie: Movie){}
}

class WatchListMovieRelationship {
    private relation = new Array<WatchListMovie>();
}



