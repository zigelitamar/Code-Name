const express = require("express");
var app = express();
const http = require("http").Server(app);
const socketIO = require("socket.io")(http);
const board = require("./board");
const cors = require("cors");

app.use(express.json());
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use("/board", board);

const server = http.listen(3000, () => {
  console.log(`Server listen on port 3000..`);
});
