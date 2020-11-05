const express = require("express");
var app = express();
const http = require("http");
const webSocketServer = require("websocket").server;
const httpServer = http.createServer();
const board = require("./board");
const cors = require("cors");
const idGenerator = require("guid");
const { Socket } = require("dgram");

const clients = {};
const games = {};

const wsServer = new webSocketServer({
  httpServer: httpServer,
});

wsServer.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("opened!"));
  connection.on("close", () => console.log("closed!"));
  connection.on("message", (message) => {});

  //Create a client ID
  const clientId = idGenerator.create().value;
  clients[clientId] = {
    connection: connection,
  };

  const payLoad = {
    method: "connect",
    clientId: clientId,
  };

  connection.send(JSON.stringify(payLoad));
});

app.use(express.json());
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use("/board", board);

app.listen(3000, () => {
  console.log(`Server started on 3001`);
});
httpServer.listen(3001, () => {
  console.log(`Server listen on port 3000..`);
});
