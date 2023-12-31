import express from 'express';
import productsRouter from './routes/products';

const app = express();
const port = 3000;

// Enable JSON body parsing
app.use(express.json());

// Register products APIs
app.use("/api/products", productsRouter);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
