const { Socket } = require("dgram");
const express = require("express");
var app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const { createBoard } = require("./utils/board");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");
app.use(express.json());
io.on("connection", (socket) => {
  socket.emit("welcome", "welcome to the game");
  socket.on("joinGame", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(room);
  });
  socket.on("response", () => {
    socket.emit("welcome", socket.id);
  });
  socket.on("response2", () => {
    socket.emit("welcome2", socket.id);
  });
});

const server = http.listen(3000, () => {
  console.log(`Server listen on port 3000..`);
});
