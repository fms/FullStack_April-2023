let array: number[] = [5, 10, 25, 20, 145, 70, 35];
console.log(array.filter((x) => x > 20));
console.log(array);
array.splice(3, 1, 17, 9999);
console.log(array);
