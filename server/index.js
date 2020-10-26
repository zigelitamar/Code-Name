<<<<<<< HEAD
const express = require("express")();
const http = require("http").Server(express);
const socketIO = require("socket.io")(http);

const server = http.listen(3000, () => {
  console.log(`Server listen on port 3000..`);
});
=======
const  express = require('express');
var app= express();
const http = require("http").Server(app);
const socketIO= require("socket.io")(http);
const board= require("./board");


app.use(express.json()); 

app.use("/board", board);

const server = http.listen(3000, () => {
    console.log(`Server listen on port 3000..`);
  });
>>>>>>> 13e4bb26f4200ebd4f25da6c3f17640166de702a
