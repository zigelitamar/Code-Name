var express = require("express");
var router = express.Router();
const rooms = {};

router.get("/getGames", async (req, res) => {
  var openGames = [];
  console.log(rooms);
  for (element in rooms) {
    console.log(rooms[element].players.length);
    if (rooms[element].players.length < 4) {
      let el = {
        room_name: rooms[element].name,
        players: rooms[element].players.length,
      };
      openGames.push(el);
    }
  }
  res.status("200").send(openGames);
});

function isRoomExsit(roomName) {
  if (roomName in rooms) {
    return true;
  }
  return false;
}

function createRoom(name, user) {
  rooms[name] = {
    name: name,
    players: [user],
    board: null,
  };
}

function joinRoom(name, user) {
  rooms[name].players.push(user);
}

function getRoom(name) {
  return rooms[name];
}

module.exports = {
  router: router,
  isRoomExsit,
  createRoom,
  joinRoom,
  getRoom,
};
