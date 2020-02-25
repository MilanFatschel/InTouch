const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", socket => {
  console.log("User Connected.");
  socket.on("MessageSentToServer", msg => {
    console.log(msg);
    io.emit("UpdateClientMessageList", msg);
  });
});

server.listen(port, () => console.log("Server running on port:" + port));
