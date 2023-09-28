//Model
class WatchList {
    constructor(public listName: string){}

}
class Movie {
    constructor(public movieName: string, public year: number, public seen: boolean){}
}

class WatchListMovie {
    constructor(public watchList: WatchList, public movie: Movie){}
}