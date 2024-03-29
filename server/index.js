import { Server } from "socket.io";
import Connection from "./database/db.js";
import { getDocument, updateDocument } from "./controller/documentController.js";

const PORT = 8080;

Connection();

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await getDocument(documentId);

    socket.join(documentId);

    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await updateDocument(documentId, data);
    })
  });

  console.log(`Server is running on port: ${PORT}`);
});
