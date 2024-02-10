
export interface Task {
    id: number,
    title: string,
    description: string,
    status: Status
}

export enum Status {
    TO_DO = "To-Do",
    DONE = "Done"
}