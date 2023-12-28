import express from 'express';
import fs from 'fs';
import liveDateComp from '../components/time'

const israelCurrentDate = liveDateComp('Asia/Jerusalem');
const app = express();
const options = process.cwd();
const port = 3000;

app.use(express.static('public'));

app.get('/echo/:text', (req, res) =>{
console.log(req.params);
res.send({message: req.params.text});
})

app.get('/nowhtml', (req, res) => {
    res.sendFile('./public/now.html', {root: options});
})

app.get('/now', (req,res) => {
    res.send({date: israelCurrentDate})
})

// app.use((req,res) => {
//     res.status(404).sendFile('./public/index.html', {root: options});
// })

app.listen(port , () => {
    console.log("server is runing")
})


function promiseReadFile(fileToRead:string) {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(fileToRead, (err, data) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        })
    })
}

function readTwoFilesUsingPromises() {
    promiseReadFile("redirect.txt")
    .then((filename) => {
        console.log(`Promise: got this from first text ${filename}`);
        return promiseReadFile(filename);
    })
    .then((data) => {
        console.log(`Promise: got this data from the second text`)
        return console.log(data);
    })
    .catch(
        (err) => console.error(`Promise: err is : ${err}`)
    )
}

async function readTwoFilesAsync() {
    try {
        const secondsFileName = await promiseReadFile("redirect.txt");
        console.log(`Async: got this from the first text ${secondsFileName}`);

        const data = await promiseReadFile(secondsFileName);
        console.log("Async: got this data from the second text");
        console.log(data);
    }
    catch(error) {
        console.error(`Asynce: err is : ${error}`);
    }
}

// readTwoFilesAsync()
// readTwoFilesUsingPromises();