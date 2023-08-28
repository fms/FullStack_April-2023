const array = [10, 20, 30, /* empty */, /* empty */ ,8, /* empty */, /* empty */ , /* empty */];
//              0   1   2      3           4         5      6           7        ^-- Last comma is ignored

// push(), pop(), shift(), unshift()
array.push(25);         // Add new elements to end of array. The same as:
                        // array[array.length] = new_element

                        
                        
console.log(array);

let removed = array.pop();          // Remove last element in array
                                    // array.length = array.length - 1

console.log(array);
console.log(removed);

removed = array.shift();
console.log(array);
console.log(removed);

array.unshift(1, 2, 3);
console.log(array);

// filter()
let array2 = array.filter((x) => (x ?? 0) > 7);

array2 = array.filter(biggerThan7);
console.log(array);
console.log(array2);


function biggerThan7(value?:number|undefined):boolean {
    return (value ?? 0) > 7;
}

array2 = array.filter((value) => (value ?? 0) > 7);

// Find item in array
let position = array2.findIndex((x) => (x ?? 0) > 7);
console.log(position);

let value = array2.find((x) => (x ?? 0) > 7);
console.log(value);

position = array.indexOf(20);
console.log(position);

array.splice(0, 1);  // ==> shift()
array.splice(-1, 1); // pop()

const arrayA = ['a', 'b', 'c'];
const arrayB = [1, 2, 3];
const mapB = arrayB.map(x => x.toString());
let arrayC = arrayA.concat(arrayB.map(x => x.toString()));


class test {
    arr: number[] = [1, 2, 3, 10, 20, 30]
    indexes: number[] = [ 2, 4, 3];

    printArr() {
        this.arr.forEach(x => console.log(x));
    }

    printIndexes() {
        this.indexes.forEach(x => console.log(this.arr[x]), this);
    }
}

let testMe = new test();
testMe.printArr();
testMe.printIndexes();
