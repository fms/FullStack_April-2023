import createServer from "./server";
import { Server } from 'socket.io';
import http from 'http';


const port = 3000;
const app = createServer();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    })

    socket.on("chatMessage", (arg) => {
        io.emit("chatMessage",arg)
    })
})

server.listen(port, () => console.log(`Server started on http://localhost:${port}`));