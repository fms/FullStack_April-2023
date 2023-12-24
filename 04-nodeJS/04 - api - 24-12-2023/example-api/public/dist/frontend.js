"use strict";
async function getName(username = "") {
    const response = await (username ? fetch(`/name/${username}`) : fetch("/name"));
    const name = await response.json();
    return name;
}
async function getAll() {
    try {
        console.log(await getName());
        console.log(await getName("yuval"));
        console.log(await getName("saar"));
    }
    catch (err) {
        console.error(err);
    }
}
try {
    getAll();
    getName().then((text) => console.log(text));
    getName("yuval").then((text) => console.log(text));
    getName("saar").then((text) => console.log(text));
}
catch (err) {
    console.error(err);
}
const rootElement = document.querySelector("#root");
const nameElement = document.querySelector("#name");
async function handleClick() {
    const nameFromServer = await getName(nameElement.value);
    console.log(nameFromServer);
    rootElement.textContent = nameFromServer.name;
}
