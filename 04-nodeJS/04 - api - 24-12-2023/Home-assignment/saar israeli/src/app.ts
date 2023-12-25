import express from 'express';
import fs from 'fs';

const app = express();
const options = process.cwd();
const port = 3000;

app.use(express.static('public'));

app.listen(port , () => {
    console.log("server is runing")
})