<<<<<<< HEAD
import express from 'express';

const app = express();
const options = process.cwd()
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile("/public/index.html", { root: options });
});
app.get('/title', (req, res) => {
  res.sendFile("/public/title.html", { root: options });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
=======
import express from 'express';

const app = express();
const options = process.cwd()
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile("/public/index.html", { root: options });
});
app.get('/title', (req, res) => {
  res.sendFile("/public/title.html", { root: options });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
