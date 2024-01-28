import express from 'express';
import fs from 'fs';
const app = express()
const port = 3000


app.use(express.static('public'));



const myName = 'Shmuel';


app.get('/name/:first', (req, res) => {
  console.log(req.params);
  res.send({ name: req.params.first });
})

app.get('/name', (req, res) => {
  res.send({ name: myName });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})