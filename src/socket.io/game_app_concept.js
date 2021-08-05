module.exports.initRealTimeGameConcept = (io) => {
  io.on("connection", (socket) => {
    socket.on("game-room.join", ({ room, userColor }) => {
      Array.from(socket.rooms)
        .filter((r) => r !== socket.id)
        .forEach((r) => socket.leave(r));

      setTimeout(() => {
        socket.join(room);
        socket.emit("activities", `Joined room "${room}".`);
        socket.broadcast
          .to(room)
          .emit("activities", `"${userColor}" joined the room "${room}".`);
      }, 0);
    });

    socket.on("movement-forward", (e) => {
      socket.broadcast.to(e.room).emit("movement-forward", e.move);
    });

    socket.on("movement-backward", (e) => {
      socket.broadcast.to(e.room).emit("movement-backward", e.move);
    });
  });
};
