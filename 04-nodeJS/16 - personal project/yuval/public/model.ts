enum Position {
    PG = 1,
    SG,
    SF,
    PF,
    C
}

interface Player {
    name: string,
    age: number,
    jerseyNumber: number,
    height: number,
    position: Position
}

// interface Person {
    //     firstName: string,
    //     lastName: string,
    //     age: number
    // }
    