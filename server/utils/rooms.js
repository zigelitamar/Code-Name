var express = require("express");
var router = express.Router();
const rooms = {};


router.get('getGames',(req,res)=>{
    var openGames=[];
    rooms.forEach(element => {
        if(element.players.length<4){
            el={
                "room_name": element.name,
                "players": element.players.length
            }
            openGames.push(el);
        }
        
    });
    res.status('200').send(openGames)
})

function isRoomExsit(roomName) {
  if (roomName in rooms) {
    return true;
  }
  return false;
}

function createRoom(name, user) {
  room[name] = {
    name: name,
    players: [user],
    board: null,
  };
}

function joinRoom(name, user) {
  room[name].players.push(user);
}

function getRoom(name) {
  return rooms[name];
}

module.exports= {
    router: router,
    isRoomExsit,
    createRoom,
    joinRoom,
    getRoom

}