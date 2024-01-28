import express from 'express';

const port = 3000;
const app = express();
const options = process.cwd();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('../public/index.html', {root: options});
})

app.listen(port, () => {
    console.log("server is running");
})