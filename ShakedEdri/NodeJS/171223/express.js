// express, nodemon must be installed first
// cd shakededri/nodejs/171223
// npm run exp

import express from 'express';
import process from 'process';

const port = 3000;
const app = express();
const options = {root: process.cwd()};

app.get('/', (req, res) => {
    res.sendFile('./index.html', options, (err) => {
        if(err){
            console.log('Cannot read page');
        }
    });
});

get('/data.js');
get('/style.css');

app.use((req, res) => {
    res.status(404).sendFile('/errorpage.html', options)
});

app.listen(port, function () {
    console.log('Server is running on port ' + port)
});

function get(filename) {
    app.get(filename, (req, res) => {
        res.sendFile("." + filename, options, (err) => {
            if(err) {
                console.log('Cannot read file!');
            }
        })
    });
}