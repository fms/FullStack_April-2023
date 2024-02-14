import createServer from './index';
import {connectToMongo} from './database';

const app = createServer();
const port = process.env.PORT || 3000;

connectToMongo();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});