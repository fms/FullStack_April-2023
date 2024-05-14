import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";

const port = 3000;
const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("dogChatMessage", (arg) => {
    io.emit("dogChatMessage", arg);
  });
});

server.listen(port, () => {
  console.log(`Server live in port ${port}`);
});
