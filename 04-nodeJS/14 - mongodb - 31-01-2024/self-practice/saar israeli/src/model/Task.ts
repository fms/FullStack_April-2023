import { TaskStatus } from "./TaskStatus";

export class Task {
    id: string;

    constructor(public title: string,
        public description: string,
        public status: TaskStatus){
            this.id = `${Date.now().toFixed()}-${Math.random().toString().substring(2)}`;
        }
}