const array1: Array<any> = [1, 3, "ab", {firstName: "Shmuel", lastName: "Fishman"}, 10];
const array2: any[] = [1, 3, "ab", {firstName: "Shmuel", lastName: "Fishman"}, [10, 20]];
const array3: number[] = [10, 20, 30, 8];

const obj =  {firstName: "Shmuel", lastName: "Fishman"};
console.log(obj["firstName"]);
console.log(array1[0]);      // 0-based array
console.log(array1[4]);      // 0-based array
console.log(array2);
const item = array2[4]; 
console.log(item[1]);
console.log(array2[4][1]);
console.log(array2[3]["firstName"]);

const queue :string[] = [];

console.log(`queue: ${queue}`);
queue.push("Aviel");
queue.push("Bar");
console.log(`queue: ${queue}`);

for(let index=0; index < queue.length; index++) {
    let item = queue[index];
    console.log(`queue[${index}] = ${item}`);
}



console.log(array3.length);
