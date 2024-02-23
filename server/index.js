import { Server } from "socket.io";

const PORT = 8080;

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Server is running on port: ${PORT}`);
});
