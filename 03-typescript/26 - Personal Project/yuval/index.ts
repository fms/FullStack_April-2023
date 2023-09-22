interface HTMLSelectElementWithId extends HTMLSelectElement {
    add(option: HTMLOptionElement, before?: HTMLElement | null): void;
}
const select = document.getElementById('selectList') as HTMLSelectElementWithId;

class WatchList {
    constructor(public listName: string){}

    createList(ev: SubmitEvent){
        const name = ((ev.target) as HTMLInputElement).value;
        const op = document.createElement('option');
        op.value = name;
        op.textContent = name;
        select.add(op);
    }
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



