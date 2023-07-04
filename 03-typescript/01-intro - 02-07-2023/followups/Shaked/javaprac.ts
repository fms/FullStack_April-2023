let userDetails = {
    job: 'Managerial',
    name: 'Shaked',
    age: '26'
};

console.log('About myself',
    '\nHey, my name is ' + userDetails.name +
    ', \nMy age is ' + userDetails.age +
    ',\nAnd my job is ' + userDetails.job);

//While loop , ascending order
console.log('----------------');
let txt = "";
let j = 0;
while (j < 5) {
    console.log('Numbers 0-4');
    txt += "\nThe number is " + j;
    j++;
}
console.log(txt);


console.log('----------------');
//for loop , descending order
console.log('Numbers 4-0');
for (let i = 4; -1 < i; i--) {
    console.log("The number is " + i);
}