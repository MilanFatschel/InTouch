const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", function(client) {
  console.log("User Connected:" + client.id);

  client.on("MessageSentToServer", function(msg) {
    console.log(msg);
    io.emit("UpdateClientMessageList", msg);
  });
});

server.listen(port, () => console.log("Server running on port:" + port));
