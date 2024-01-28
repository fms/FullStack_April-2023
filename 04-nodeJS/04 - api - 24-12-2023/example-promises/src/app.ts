import fs from 'fs';

// This creates a Promise for fs.ReadFile() 
function promiseReadFile(fileToRead: string) {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(fileToRead, (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(data.toString());
      }
    })
  }
  );
}

// Here we use the Promise() to get the content of a file: A single line, with the name of the second file to read and print out
function readTwoFilesUsingPromises() {
  promiseReadFile("redirector.txt")
    .then((filename) => {
      console.log(`Promise: File name to read. Got this from first file: ${filename}`);
      // This is a brand new Promise that we CHAIN together.
      return promiseReadFile(filename);
    })
    .then((data) => {
      console.log("Promise: The content of the second file:");
      return console.log(data)
    })
    .catch(
      // This catch() handles all the errors for both first and second (chained) Promises
      (err) => console.error(`Promise: err is : ${err}`))
}

// This is an async function that performs the same function as readTwoFilesUsingPromises() above.
async function readTwoFilesAsync() {
  try {
    const secondsFileName = await promiseReadFile("redirector.txt");
    console.log(`Async: File name to read. Got this from first file: ${secondsFileName}`);

    const data = await promiseReadFile(secondsFileName);
    console.log("Async: The content of the second file:");
    console.log(data);
  }
  catch (error) {
    console.error(`Async: err is : ${error}`);
  }
}

readTwoFilesAsync();
readTwoFilesUsingPromises();

// This is an example of waiting on multiple Promises. 
// const myPromise1 = promiseReadFile("myFile");
// const myPromise2 = promiseReadFile("myFile");
// 
// Wait until all the Promises are ready.
// Promise.all([myPromise1, myPromise2]).then(...)

// A promise does not have to wrap an asynchronous functionality. Here was just wrap a simple compare.
function compare(str1: string, str2: string) {
  return new Promise((success, fail) => {
    if (str1 === str2) {
      success("");
    }
    else {
      fail("err");
    }
  })
}

compare("a", "a")
.then((text) => console.log("Yey!"))
.catch((err) => console.error(err));