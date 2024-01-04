import express from "express";
import productRouter from './routes/productsRouter';
// import toyRouter from './routes/toysRouter';

const app = express();
const port = 3000;
const options = process.cwd();

app.use(express.json());
app.use(express.static('public'));

app.use("/api/products", productRouter);
// app.use("/api/toys", toyRouter);

app.get("/" , (req,res) => {
    res.sendFile("./public/main.html", {root: options});
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})