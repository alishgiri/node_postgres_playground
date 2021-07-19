const socketio = require("socket.io");

const initSocketIO = (server) => {
  const io = socketio(server);

  io.on("connection", (socket) => {
  // Using broadcast everyone but not self gets the message
    socket.broadcast.emit("user.events", "Someone has joined!");
    socket.on("name", (name) => {
      console.log(name + " says hello!");
      socket.broadcast.emit("name", name);
    });
  });

  // No broadcast everyone including self gets the message
  // io.on("connection", (socket) => {
  //   socket.on("name", (name) => {
  //     console.log(name + " says hello!");
  //     io.emit("name", name);
  //   });
  // });
};

module.exports = initSocketIO;
