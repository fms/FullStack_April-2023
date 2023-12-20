import express from "express";
import { cwd } from "process";
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const options = { root: cwd() };

app.use((req, res, next) => {
    console.log("Time:", Date.now(), " ", req.url);
    next();
});

app.use(express.static("public"));
app.use((req, res) => {
    // This handles everything that doesn't have a file.
    // res.status(404).send(`Get you act together. We don't have this url: ${req.url}`);
    res.status(404).sendFile("public\\index.html", options, (err) => {
        if (err) {
            console.log(`Got error: ${err}`);
        }
    });
});
