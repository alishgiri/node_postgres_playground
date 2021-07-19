const socketio = require("socket.io");

const initSocketIO = (server) => {
  const io = socketio(server);

  io.on("connection", (socket) => {
    console.log("A socket is now open!");
    console.log(socket);
  });
};

module.exports = initSocketIO;
