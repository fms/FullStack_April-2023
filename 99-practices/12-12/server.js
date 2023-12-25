import { writeFileSync, readFileSync, mkdirSync, rm } from "fs";

const asyncFunction = async () => {
  try {
    console.log("before async");
    const result = await addTwo(1, 2);
    console.log("after async");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const promiseFunction = () => {
  console.log("before");
  const newPromise = new Promise((resolve, reject) => {
    resolve(addTwo(2, 2));
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("after");
};

async function addTwo(a, b) {
  for (let i = 0; i <= 10000000000; i++) {
    var x = 1 + 1;
  }
  return a + b;
}

const writeToFile = () => {
  const text = readFileSync("./gili.txt");
  writeFileSync("./gili.txt", text + "test");
};

const createAFolder = (folderName, relativePath) => {
    mkdirSync(`${relativePath}/${folderName}`)
    console.log("created folder")
}
// createAFolder("gili", "./")
// writeToFile();

// promiseFunction();
// asyncFunction();
