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