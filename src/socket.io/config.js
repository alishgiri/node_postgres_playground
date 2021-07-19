const socketio = require("socket.io");

const initSocketIO = (server) => {
  const io = socketio(server);

  io.on("connection", (socket) => {
    socket.on("name", (name) => {
      console.log(name + " says hello!");
      io.emit("name", name);
    });
  });
};

module.exports = initSocketIO;
