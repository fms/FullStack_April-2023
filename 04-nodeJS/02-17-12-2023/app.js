import express from "express";
import process from "process";
import path from "path";

const app = express();
const PORT = 3000;

const options = { root: path.join(process.cwd(), "files")};
console.log(process.cwd());
// console.log(process.env.);
app.get("/", (req, res) => {
    res.sendFile("./index.html", options, (err) => {
        if (err) {
            console.log("Got error");
        }
    });
});
app.use(express.static('files', options));

app.get("/bamba", (req, res) => {
    res.sendFile("./bamba.html", options);
});

// app.get("/style.css", (req, res) => {
//     res.sendFile("./style.css", options);
// });
// app.get("/script.js", (req, res) => {
//     res.sendFile("./script.js", options);
// });

app.get("/treat", (req, res) => {
    res.redirect("/bamba");
});

app.use((req, res) => {
    res.status(404).sendFile("./notFound.html", options);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
