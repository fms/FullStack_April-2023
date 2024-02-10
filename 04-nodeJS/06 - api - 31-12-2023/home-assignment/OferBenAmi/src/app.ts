import express, {Request, Response} from 'express';
import productsRouter from './routes/products';
import morgan from 'morgan';

const app = express();
const port = 3000;

// Enable static files
app.use(express.static('public'));

// Enable JSON body parsing
app.use(express.json());

//logging output
// app.use(morgan("tiny"));

// Register products APIs
app.use("/api/products", productsRouter);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
