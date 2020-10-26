const express = require('express')();
const http = require("http").Server(express);
const socketIO= require("socket.io")(http);

const server = http.listen(3000, () => {
    console.log(`Server listen on port 3000..`);
  });