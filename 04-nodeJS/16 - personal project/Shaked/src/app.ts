import { createServer } from "./server";
import mongoose from "mongoose";

const app = createServer();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/personalProject');
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

