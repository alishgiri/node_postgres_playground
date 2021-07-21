module.exports.initSocketIoRooms = (io) => {
  io.on("connection", (socket) => {
    socket.on("room.join", (room) => {
      console.log("Socket Rooms", socket.rooms);
      Array.from(socket.rooms)
        .filter((r) => r !== socket.id)
        .forEach((r) => socket.leave(r));

      setTimeout(() => {
        socket.join(room);
        socket.emit("event", "Joined room " + room);
        socket.broadcast
          .to(room)
          .emit("event", "Someone joined the room " + room);
      }, 0);
    });

    socket.on("event", (e) => {
      socket.broadcast.to(e.room).emit("event", e.name + " says hello!");
    });
  });
};
