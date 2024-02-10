import { createServer } from "./server";

const app = createServer();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

