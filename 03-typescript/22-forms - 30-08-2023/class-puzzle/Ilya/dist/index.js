"use strict";
function handleClick(event) {
    console.log(`click`);
}
const validValues = ["Hello", "There"];
function handleKeyup(event) {
    const target = event.target;
    if (target) {
        console.log(`key up ${event.key} ${target.value.length}`);
        const p = document.querySelector("#error-text");
        if (p) {
            p.textContent = target.value;
            // p.textContent = validValues.indexOf(target.value) === -1 ?
            //          "Bad value" : "";
        }
    }
}
const [date, time] = formatDate(new Date()).split(' ');
console.log(date); // 👉️ 2021-12-31
console.log(time); // 👉️ 09:43
// ✅ Set Date input Value
const dateInput = document.getElementById('date');
dateInput.value = date;
// 👇️️ "2021-12-31"
console.log('dateInput value: ', dateInput.value);
// ------------------------------------------------
// ✅ Set time input value
const timeInput = document.getElementById('time');
timeInput.value = time;
// 👇️ "09:43"
console.log('timeInput value: ', timeInput.value);
// ------------------------------------------------
// ✅ Set datetime-local input value
const datetimeLocalInput = document.getElementById('datetime-local');
datetimeLocalInput.value = date + 'T' + time;
// 👇️ "2021-12-31T10:09"
console.log('dateTimeLocalInput value: ', datetimeLocalInput.value);
// 👇️👇️👇️ Format Date as yyyy-mm-dd hh:mm:ss
// 👇️ (Helper functions)
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function formatDate(date) {
    return ([
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
        ].join(':'));
}
// 👇️ 2022-07-22 08:50:39
console.log(formatDate(new Date()));
// 👇️ 2025-05-04 05:24
console.log(formatDate(new Date('May 04, 2025 05:24:07')));
const [date, time] = formatDate(new Date('May 04, 2035 05:24')).split(' ');
console.log(date); // 👉️ 2035-05-04
console.log(time); // 👉️ 05:24
// ✅ Set Date input Value
const dateInput = document.getElementById('date');
dateInput.value = date;
console.log('dateInput value: ', dateInput.value); // 👉️ "2035-05-04"
// ✅ Set time input value
const timeInput = document.getElementById('time');
timeInput.value = time;
console.log('timeInput value: ', timeInput.value); // 👉️ "05:24"
// ✅ Set datetime-local input value
const datetimeLocalInput = document.getElementById('datetime-local');
datetimeLocalInput.value = date + 'T' + time;
// 👇️ "2035-05-04T05:24"
console.log('dateTimeLocalInput value: ', datetimeLocalInput.value);
// 👇️ Format Date as yyyy-mm-dd hh:mm:ss
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function formatDate(date) {
    return ([
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
        ].join(':'));
}
// 👇️ 2022-07-22 08:50:39
console.log(formatDate(new Date()));
// 👇️ 2035-05-04 05:24
console.log(formatDate(new Date('May 04, 2035 05:24:07')));
