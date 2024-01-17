export class Task {
    constructor(
        public id: number,
        public taskname: string,
        public description: string,
        public status: Status) {
    }
}
export enum Status {
    ToDo = "ToDo",
    DONE = "DONE"
}
