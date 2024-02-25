import createServer from './server';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const app = createServer();

async function connectToMongoDB() {
    await mongoose.connect('mongodb://localhost/todo');
}

connectToMongoDB();
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

