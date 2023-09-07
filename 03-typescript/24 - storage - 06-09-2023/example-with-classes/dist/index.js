"use strict";
class Person {
    constructor(name) {
        this.name = name;
        this.id = Math.floor(Math.random() * 1000000);
    }
}
class Task {
    constructor(name, status, owner) {
        this.name = name;
        this.status = status;
        this.owner = owner;
    }
    print() {
        console.log(`name: ${this.name}, status: ${this.status} owner: ${this.owner.name}`);
    }
}
const task = new Task("Something to do", 1, new Person("Alon"));
localStorage.setItem("task1", JSON.stringify(task));
const tempObject = JSON.parse(localStorage.getItem("task1"));
const owner = new Person(tempObject.owner.name);
owner.id = tempObject.owner.id;
const restoredTask = new Task(tempObject.name, tempObject.status, owner);
task.print();
restoredTask.print();
console.dir(task);
console.dir(restoredTask);
