import fs from "fs";

// fs.readFile('index.html', (err, data) =>  {
//     console.log("read finished");
// });

// const data = fs.readFileSync('index.html');
// console.log("read finished" + data);

// console.log("Script done");

fs.readFile("docs/a.txt", (err, data) => {
    if (!fs.existsSync("docs/b.txt")) {
        console.log("writing...");
        fs.writeFile("docs/b.txt", data, (err) => {
            if (err) {
                console.log(`write: ${err}`);
            }
        });
    }
});
