// const { Socket } = require("dgram");
const express = require("express");
const { createBrotliCompress } = require("zlib");
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

const { createRoom, isRoomExsit, joinRoom, getRoom } = require("./utils/rooms");

const rooms = require("./utils/rooms");

app.use(express.json());
app.use("/rooms", rooms.router);

io.on("connection", (socket) => {
  socket.emit("welcome", "welcome to the game");

  socket.on("createGame", ({ username, roomname }) => {
    console.log("trying to create");
    if (isRoomExsit(roomname)) {
      socket.emit("message", false);
    } else {
      const user = userJoin(socket.id, username, roomname);
      socket.join(roomname);
      console.log(user);
      createRoom(roomname, user);
      socket.emit("massege", true);
    }
  });
  socket.on("joinGame", ({ username, room }) => {
    var roomTojoin = getRoom(room);
    if (roomTojoin.players.length < 4) {
      const user = userJoin(socket.id, username, room);
      socket.join(room);
      joinRoom(room.name, user);
      socket.emit("message", true);
    } else {
      socket.emit("message", false);
    }
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
