"use strict";
const h1Local = document.querySelector("#h1-local");
const h1Session = document.querySelector("#h1-session");
const h2Local = document.querySelector("#h2-local");
const h2Session = document.querySelector("#h2-session");
// These are the same
const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const FieldNameForString = "just-a-string";
const FieldNameForObject = "object-as-string";
loadData();
loadDataMulti();
function submitInput(event) {
    const target = event.target;
    saveData(target.value);
    if (h1Local) {
        h1Local.textContent = `local: ${target.value}`;
    }
    if (h1Session) {
        h1Session.textContent = `session: ${target.value}`;
    }
}
function submitInput2(event) {
    const obj = { f2: f2.value, f3: f3.value };
    saveDataMulti(obj);
    if (h2Local) {
        h2Local.textContent = `local: f2: "${f2.value}" f3: "${f3.value}"`;
    }
    if (h2Session) {
        h2Session.textContent = `session: f2: "${f2.value}" f3: "${f3.value}"`;
    }
}
function saveData(value) {
    localStorage.setItem(FieldNameForString, value);
    sessionStorage.setItem(FieldNameForString, value);
}
function loadData() {
    const localSavedValue = localStorage.getItem(FieldNameForString);
    const sessionSavedValue = sessionStorage.getItem(FieldNameForString);
    if (h1Local && localSavedValue) {
        h1Local.textContent = `local: ${localSavedValue}`;
    }
    if (h1Session && sessionSavedValue) {
        h1Session.textContent = `session: ${sessionSavedValue}`;
    }
}
function saveDataMulti(obj) {
    const objAsString = JSON.stringify(obj);
    localStorage.setItem(FieldNameForObject, objAsString);
    sessionStorage.setItem(FieldNameForObject, objAsString);
}
function loadDataMulti() {
    const localSavedValue = localStorage.getItem(FieldNameForObject);
    const sessionSavedValue = sessionStorage.getItem(FieldNameForObject);
    if (localSavedValue && h2Local) {
        const objectFromLocal = JSON.parse(localSavedValue);
        h2Local.textContent = `local: f2: "${objectFromLocal.f2}" f3: "${objectFromLocal.f3}"`;
    }
    if (sessionSavedValue && h2Session) {
        const objectFromLocal = JSON.parse(sessionSavedValue);
        h2Session.textContent = `session: f2: "${objectFromLocal.f2}" f3: "${objectFromLocal.f3}"`;
    }
}
