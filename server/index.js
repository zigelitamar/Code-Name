<<<<<<< HEAD
const express = require("express");
var app = express();
=======
const  express = require('express');
var app= express();
>>>>>>> 6dbed0092c24932e37b389b90cfa15c55b0b01be
const http = require("http").Server(app);
const socketIO = require("socket.io")(http);
const board = require("./board");

app.use(express.json());

app.use("/board", board);

const server = http.listen(3000, () => {
<<<<<<< HEAD
  console.log(`Server listen on port 3000..`);
});
=======
    console.log(`Server listen on port 3000..`);
  });
>>>>>>> 6dbed0092c24932e37b389b90cfa15c55b0b01be
