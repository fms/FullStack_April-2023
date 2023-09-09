class Person {
    public id: number;
    constructor(public name:string) {
        this.id = Math.floor(Math.random() * 1000000);
    }
}

class Task {
  constructor(public name: string, public status: number, public owner: Person) {}

  print() {
    console.log(`name: ${this.name}, status: ${this.status} owner: ${this.owner.name}`);
  }
}

const task = new Task("Something to do", 1, new Person("Alon"));

localStorage.setItem("task1", JSON.stringify(task));


const tempObject = JSON.parse(localStorage.getItem("task1")!);
const owner = new Person(tempObject.owner.name);
owner.id = tempObject.owner.id;
const restoredTask = new Task(tempObject.name, tempObject.status, owner);
task.print();
restoredTask.print();
console.dir(task);
console.dir(restoredTask);
